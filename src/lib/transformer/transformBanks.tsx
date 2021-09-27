import React from 'react';
import LimitationText from 'components/common/LimitationText';

export type DetailType = {
  label?: string;
  value: string;
};

export type TranslationType = (
  s: string,
  value?: Record<string, any>
) => string;

export type BankType =
  | {
      id?: string | number;
      name: string;
      logo: string;
      isRecommended?: boolean;
      isActive?: boolean;
      flatRate: string;
      effective: string;
      maxLoan: string;
      maxTerm: string | number;
      ncbCheck?: boolean;
      eligibleText?: string;
      details?: Array<DetailType | string>;
      shortName?: string;
    }
  | Record<string, any>;

const transformInterestRate = (bank: BankType, t: TranslationType) => {
  return {
    label: t('motor:bank.label.interest_rate'),
    value: t('motor:bank.value.interest_rate', {
      flatRate: bank.flatRate,
      effective: bank.effective,
    }),
  };
};

const transformMaxLoan = (bank: BankType, t: TranslationType, lang: string) => {
  return {
    label: t('motor:bank.label.max_loan'),
    value: `${t('motor:bank.value.max_loan', {
      maxLoan:
        lang === 'th' && bank.maxLoan.includes('K')
          ? bank.maxLoan.substring(0, bank.maxLoan.length - 3) // in thai text, the unit refers to hundred thousands so need to show only one digit
          : bank.maxLoan.substring(0, bank.maxLoan.length - 1),
    })}${
      bank.maxLoan.includes('M')
        ? t('motor:bank.value.max_loan_unit_m')
        : t('motor:bank.value.max_loan_unit')
    }`,
  };
};

const transformMaxTerm = (bank: BankType, t: TranslationType) => {
  return {
    label: t('motor:bank.label.max_term'),
    value: t('motor:bank.value.max_term', {
      maxTerm: bank.maxTerm,
    }),
  };
};

const transformNCBCheck = (bank: BankType, t: TranslationType) => {
  return {
    label: t('motor:bank.label.ncb_check'),
    value: bank.ncbCheck
      ? t('motor:bank.value.ncb_check_yes')
      : t('motor:bank.value.ncb_check_no'),
  };
};

const transformDetails = (
  banks: Array<BankType>,
  t: TranslationType,
  lang: string
) => {
  const transFormBanks = banks;
  transFormBanks.map((bank) => {
    const details = [];
    const b = bank;

    if (!b.isActive) {
      b.eligibleText = t('motor:questions.labels.customer_banks.eligible_text');
    }

    b.name = t(b.name);

    details.push(transformInterestRate(bank, t));
    details.push(transformMaxLoan(bank, t, lang));
    details.push(transformMaxTerm(bank, t));
    details.push(transformNCBCheck(bank, t));

    b.details = details;
    return b;
  });

  return transFormBanks;
};

export const getLimitationTextContent = (lang: string, t: TranslationType) => (
  <LimitationText
    lang={lang}
    text={t('motor:questions.labels.customer_banks.limitation_text')}
  />
);

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
      subLabel: (
        <div>
          {questionsFlow.questions.hmborrow.subLabel}
          {t('motor:questions.labels.customer_banks.reference_price')}
        </div>
      ),
    };

    qFlow.questions.customer_banks = rCustomerBanks;
    qFlow.questions.customer_banks.items = transformDetails(
      qFlow.questions.customer_banks.items,
      t,
      lang
    );
  }
  return qFlow;
};
