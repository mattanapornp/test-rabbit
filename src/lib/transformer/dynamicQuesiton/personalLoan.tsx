import bankValidationTransformer from './bankValidationTransformer';
import DynamicQuestion from './dynamicQuestion';

import LoanBankRankingHandler from 'lib/transformer/loanBankRankingHandler';
import loanBanks from 'lib/constants/loanBanks';

export default class PersonalLoan extends DynamicQuestion {
  handleBankValidation(formValues) {
    const loanRakingHandler = new LoanBankRankingHandler(loanBanks);
    const banks = loanRakingHandler.getRanking(formValues);

    return bankValidationTransformer(this.config, banks);
  }

  handleHMLoanValidation(value: string) {
    const newConfig = { ...this.config };
    if (['A1', 'A2', 'A3'].includes(value)) {
      delete newConfig.questions.hmloan.skipQuestion;
      newConfig.validationSchema.hmloan = {};
      return newConfig;
    }
    newConfig.questions.hmloan.skipQuestion = '';
    delete newConfig.validationSchema.hmloan;
    return newConfig;
  }

  handleRegisteredValidation(value) {
    const newConfig = { ...this.config };
    if (['A5'].includes(value)) {
      delete newConfig.questions.registered.skipQuestion;
      newConfig.validationSchema.registered = {};
      return newConfig;
    }
    newConfig.questions.registered.skipQuestion = '';
    delete newConfig.validationSchema.registered;
    return newConfig;
  }

  handleExperienceValidation(value) {
    const newConfig = { ...this.config };
    if (['A5', 'A9'].includes(value)) {
      newConfig.questions.experience.skipQuestion = '';
      delete newConfig.validationSchema.experience;
      return newConfig;
    }
    delete newConfig.questions.experience.skipQuestion;
    newConfig.validationSchema.experience = {};
    return newConfig;
  }

  handleIdCardValidation(customer_banks: Array<string>) {
    const newConfig = { ...this.config };
    if (customer_banks.includes('KRUNGSRI')) {
      delete newConfig.questions.idcard.skipQuestion;
      newConfig.validationSchema.idcard = {
        validation: {
          rule: 'thai_id',
        },
      };
      return newConfig;
    }
    newConfig.questions.idcard.skipQuestion = '';
    delete newConfig.validationSchema.idcard;

    return newConfig;
  }

  handleCitiloanValidation(value) {
    const newConfig = this.handleIdCardValidation(value);
    if (value.includes('KRUNGSIRI') || value.includes('CITI')) {
      delete newConfig.questions.citiloan.skipQuestion;
      newConfig.validationSchema.citiloan = {};
      return newConfig;
    }
    newConfig.questions.citiloan.skipQuestion = '';
    delete newConfig.validationSchema.citiloan;

    return newConfig;
  }

  async handle(
    questionCode: string,
    formValues: Record<string, any>,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    lang: string
  ) {
    switch (questionCode) {
      case 'idcard':
        return this.handleIdCardValidation(formValues.customer_banks);
      case 'income':
        return this.config;
      case 'registered':
        return this.handleRegisteredValidation(formValues.occupation);
      case 'experience':
        return this.handleExperienceValidation(formValues.occupation);
      case 'citiloan':
        return this.handleCitiloanValidation(formValues.customer_banks);
      case 'occupation':
      case 'hmloan':
        return this.handleHMLoanValidation(formValues.income);
      default:
        // Take care the validations from question flow component
        return null;
      // default:
      //   return super.mergeWithChoices(
      //     questionCode,
      //     await super.handleDynamicQuestion(questionCode, formValues, lang)
      //   );
    }
  }
}
