import { getLimitationTextContent } from './transformBanks';

export type DetailType = {
  label?: string;
  value: string;
};

export type TranslationType = (
  s: string,
  value?: Record<string, any>
) => string;

export type ExitFreeType = {
  percentage?: number;
  times?: number;
  year?: number;
  special?: boolean;
};

export type MaxLoanType = {
  times?: number;
  amount?: number;
};

export type InterestRateType = {
  min?: number;
  max?: number;
  value?: number;
  month?: number;
  tenor?: boolean;
};

export type SpecialInterestRateType = {
  min?: number;
  max?: number;
  value?: number;
  month?: number;
  tenor?: boolean;
  first?: boolean;
  deduction?: number;
};

export type BankType = {
  id?: string | number;
  name: string;
  logo: string;
  isRecommended?: boolean;
  isActive?: boolean;
  specialInterestRate: string | SpecialInterestRateType;
  normalInterestRate: string | InterestRateType;
  maxLoan: string | number | MaxLoanType;
  maxTerm: string | number;
  exitFee: string | ExitFreeType;
  loanType: string;
  eligibleText?: string;
  details?: Array<DetailType | string>;
  shortName?: string;
};

const transformInterestRate = (
  { specialInterestRate }: BankType,
  t: TranslationType
) => {
  let value = specialInterestRate;

  if (typeof specialInterestRate === 'object') {
    const { deduction, min, max, month, tenor, first } = specialInterestRate;
    if (deduction) {
      value = `${t('motor:loan_details_bank.interest_rate_with_deduction', {
        min,
        max,
        deduction,
      })}`;
    } else if (min && max) {
      value = `${min}% - ${max}% ${t('motor:loan_details_bank.per_year')}`;
    } else if (min && month) {
      value = `${min}% ${t('motor:loan_details_bank.per_year')}`;
    } else {
      value = '-';
    }

    if (month) {
      value += ` (${t(
        first
          ? 'motor:loan_details_bank.first_months'
          : 'motor:loan_details_bank.up_to_months',
        { count: month }
      )})`;
    }

    value += tenor ? ` ${t('motor:loan_details_bank.over_the_tenor')}` : '';
  }

  return {
    label: t('motor:bank.label.special_interest_rate'),
    value,
  };
};

const transformNormalInterestRate = (
  { normalInterestRate }: BankType,
  t: TranslationType
) => {
  let value = normalInterestRate;
  if (typeof normalInterestRate === 'object') {
    const { min, max, tenor } = normalInterestRate;
    if (min && max) {
      value = `${min}% - ${max}% ${t('motor:loan_details_bank.per_year')}`;
    } else {
      value = '-';
    }
    value += tenor ? ` ${t('motor:loan_details_bank.over_the_tenor')}` : '';
  }

  return {
    label: t('motor:bank.label.normal_interest_rate'),
    value,
  };
};

const transformMaxLoan = ({ maxLoan }: BankType, t: TranslationType) => {
  let value = maxLoan;

  if (typeof maxLoan === 'object') {
    const { times, amount } = maxLoan;
    if (times && amount) {
      value = t('motor:loan_details_bank.max_loan_amount', {
        times,
        amount,
      });
    } else {
      value = '-';
    }
  }

  return {
    label: t('motor:bank.label.max_loan'),
    value,
  };
};

const transformMaxTerm = ({ maxTerm }: BankType, t: TranslationType) => {
  return {
    label: t('motor:bank.label.max_term'),
    value: t('common:monthly_terms', {
      value: maxTerm,
    }),
  };
};

const transformExitFee = ({ exitFee }: BankType, t: TranslationType) => {
  let value = t('common:none');

  if (typeof exitFee === 'object') {
    const { percentage, year, times, special } = exitFee;
    if (percentage && year) {
      value = t('motor:loan_details_bank.exit_fee_debt', {
        value: percentage,
        count: year,
      });
    } else if (times && percentage) {
      value = t('motor:loan_details_bank.exit_fee_installment', {
        value: percentage,
        times,
      });
    } else if (year) {
      value = t(
        special
          ? 'motor:loan_details_bank.exit_fee_differences_special'
          : 'motor:loan_details_bank.exit_fee_differences',
        {
          count: year,
        }
      );
    }
  }

  return {
    label: t('motor:bank.label.exit_fee'),
    value,
  };
};

const transformLoanType = ({ loanType }: BankType, t: TranslationType) => {
  return {
    label: t('motor:bank.label.loan_type'),
    value: t(`motor:loan_details_bank.loan_type.${loanType}`),
  };
};

const transformDetails = (banks: Array<BankType>, t: TranslationType) => {
  const transFormBanks = banks;
  transFormBanks.forEach((bank) => {
    const details = [];
    const b = bank;

    if (!b.isActive) {
      b.eligibleText = t('motor:questions.labels.customer_banks.eligible_text');
    }

    b.name = t(b.name);

    details.push(transformInterestRate(bank, t));
    details.push(transformNormalInterestRate(bank, t));

    details.push(transformMaxLoan(bank, t));
    details.push(transformMaxTerm(bank, t));

    details.push(transformExitFee(bank, t));
    details.push(transformLoanType(bank, t));

    b.details = details;
    return b;
  });

  return transFormBanks;
};
export default (questionsFlow: any, lang: string, t: TranslationType) => {
  const qFlow = questionsFlow;
  let rCustomerBanks = {};

  if (questionsFlow.questions && questionsFlow.questions.customer_banks) {
    rCustomerBanks = {
      ...questionsFlow.questions.customer_banks,
      limitationText: getLimitationTextContent(lang, t),
      description: {
        ...questionsFlow.questions.customer_banks.description,
        text: t('motor:questions.labels.customer_banks.description'),
      },
      subLabel: t('motor:questions.labels.customer_banks.loan_sub_label'),
    };

    qFlow.questions.customer_banks = rCustomerBanks;
    qFlow.questions.customer_banks.items = transformDetails(
      qFlow.questions.customer_banks.items,
      t
    );
  }
  return qFlow;
};
