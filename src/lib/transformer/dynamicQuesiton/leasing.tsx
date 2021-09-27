import React from 'react';

import bankValidationTransformer from './bankValidationTransformer';
import DynamicQuestion from './dynamicQuestion';

import BankRankingHandler from 'lib/transformer/bankRankingHandler';

export default class Leasing extends DynamicQuestion {
  handleHMBorrowValidation(response: any, t: (s: string) => string) {
    const { price } = response.questions.hmborrow;
    this.config.validationSchema.hmborrow.validation = {
      ...this.config.validationSchema.hmborrow.validation,
      max: price,
    };
    this.config.questions.hmborrow.subLabel = (
      <div>
        {t('motor:questions.labels.car_loan_price_current_value')} :{' '}
        <b style={{ color: '#035098', marginRight: '0.4rem' }}>
          {Number(price).toLocaleString()}
        </b>
        {t('motor:questions.labels.car_loan_price_currency')}
      </div>
    );
    return this.config;
  }

  handleBankValidation(formValues) {
    const bankRankingHandler = new BankRankingHandler();
    const banks = bankRankingHandler.getRanking(formValues);

    return bankValidationTransformer(this.config, banks);
  }

  handleHMRepaidValidation(isDebtFree = 'Y') {
    const newConfig = Object.assign(this.config);
    if (isDebtFree === 'Y') {
      newConfig.questions.hmrepaid.skipQuestion = '';
      delete newConfig.validationSchema.hmrepaid;
    } else {
      delete newConfig.questions.hmrepaid.skipQuestion;
      newConfig.validationSchema.hmrepaid = {};
    }
    return newConfig;
  }

  async handle(
    questionCode: string,
    formValues: Record<string, any>,
    lang: string,
    t: (s: string) => string
  ) {
    switch (questionCode) {
      case 'hmrepaid':
        return this.handleHMRepaidValidation(formValues.debtfree);

      case 'customer_banks':
        return this.handleBankValidation(formValues);

      case 'hmborrow':
        return this.handleHMBorrowValidation(
          await super.handleDynamicQuestion(questionCode, formValues, lang),
          t
        );

      default:
        return super.mergeWithChoices(
          questionCode,
          await super.handleDynamicQuestion(questionCode, formValues, lang)
        );
    }
  }
}
