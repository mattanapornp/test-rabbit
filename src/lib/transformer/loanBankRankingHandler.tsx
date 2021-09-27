import { FormikValues } from 'formik';

import { provincesUOBAccept, provincesLHAccept } from '../constants/loanBanks';
import {
  BankType,
  InterestRateType,
  MaxLoanType,
  SpecialInterestRateType,
} from './transformBanksForLoan';

/**
 * Loan Bank Ranking Handler
 *
 * display logic was handled according to https://app.diagrams.net/#G1h-PaXgs8YBnEAXQEntd4M22KJq1MMQBO
 */
class LoanBankRankingHandler {
  public banks: Array<BankType>;

  constructor(banks: any) {
    this.banks = banks;
  }

  evaluateCriteriaKrungsri = (formValues: FormikValues) => {
    let specialInterestRate: string | SpecialInterestRateType = {};
    let normalInterestRate: string | InterestRateType = {};
    let maxLoan: MaxLoanType = {};

    if (formValues.howlong === 'A1') {
      specialInterestRate = ['A1', 'A4'].includes(formValues.occupation)
        ? { min: 10.99, month: 12 }
        : {
            min: 12.99,
            month: 12,
          };
      normalInterestRate = '-';
    } else {
      specialInterestRate = '-';
      normalInterestRate = {
        min: 19.99,
        max: 25,
        tenor: true,
      };
    }

    maxLoan = ['A1', 'A2', 'A3'].includes(formValues.income)
      ? { times: 1.5, amount: 2 }
      : { times: 5, amount: 2 };

    const isActive =
      ['A1', 'A4', 'A5'].includes(formValues.occupation) &&
      ((['A1', 'A4'].includes(formValues.occupation) &&
        formValues.experience === 'A3' &&
        !['A1', 'A2', 'A3'].includes(formValues.income)) ||
        (formValues.occupation === 'A5' &&
          formValues.income === 'A9' &&
          formValues.registered !== 'A1'));

    return { isActive, specialInterestRate, normalInterestRate, maxLoan };
  };

  evaluateCriteriaKKP = (formValues: FormikValues) => {
    const normalInterestRate: InterestRateType = {
      min: 13.5,
      max: 25,
      tenor: true,
    };

    const exitFee = {
      times: 2,
      percentage: 2,
    };

    const maxLoan = ['A1', 'A2', 'A3'].includes(formValues.income)
      ? { times: 1.5, amount: 1.5 }
      : { times: 5, amount: 1.5 };

    const isActive =
      formValues.experience !== 'A1' &&
      ((formValues.occupation === 'A1' &&
        !['A1', 'A2', 'A3'].includes(formValues.income)) ||
        (formValues.occupation === 'A4' &&
          !['A1', 'A2'].includes(formValues.income)));

    return {
      isActive,
      normalInterestRate,
      exitFee,
      maxLoan,
    };
  };

  evaluateCriteriaSCB = (formValues: FormikValues) => {
    const isActive =
      (formValues.occupation === 'A1' &&
        formValues.experience !== 'A1' &&
        formValues.income !== 'A1') ||
      (formValues.occupation === 'A5' &&
        formValues.income === 'A9' &&
        formValues.registered !== 'A1');

    const normalInterestRate: InterestRateType = {
      min: 15.99,
      max: 25,
      tenor: true,
    };

    const exitFee = {
      year: 2,
    };

    const maxLoan = ['A1', 'A2', 'A3'].includes(formValues.income)
      ? { times: 1.5, amount: 5 }
      : { times: 5, amount: 5 };
    return { isActive, exitFee, normalInterestRate, maxLoan };
  };

  evaluateCriteriaTTB = (formValues: FormikValues) => {
    let specialInterestRate: string | SpecialInterestRateType = {};
    let normalInterestRate: string | InterestRateType = '-';
    const isExisting = formValues.customer_banks_loan.includes(2);

    if (isExisting && formValues.howlong === 'A2') {
      specialInterestRate = {
        deduction: 3,
        min: 19,
        max: 25,
      };
    } else if (
      ['A1', 'A4', 'A5'].includes(formValues.occupation) &&
      formValues.howlong === 'A2'
    ) {
      specialInterestRate = ['A1', 'A4'].includes(formValues.occupation)
        ? {
            min: 14,
            max: 22,
            tenor: true,
          }
        : {
            min: 19,
            max: 22,
            tenor: true,
          };
    } else {
      specialInterestRate =
        formValues.howlong === 'A1'
          ? {
              min: 12,
              max: 15,
              month: 12,
              first: true,
            }
          : '-';

      normalInterestRate = {
        min: 19,
        max: 25,
        tenor: formValues.howlong === 'A2',
      };
    }

    const maxLoan = ['A1', 'A2', 'A3'].includes(formValues.income)
      ? {
          times: 1.5,
          amount: 1.5,
        }
      : {
          times: 5,
          amount: 1.5,
        };

    const isActive =
      (['A1', 'A4'].includes(formValues.occupation) &&
        !['A1', 'A2'].includes(formValues.income) &&
        formValues.experience !== 'A1') ||
      (formValues.occupation === 'A5' &&
        !['A1', 'A2', 'A3'].includes(formValues.income) &&
        formValues.registered === 'A3');

    const exitFee = {
      year: 1,
      special: true,
    };

    return {
      isActive,
      specialInterestRate,
      normalInterestRate,
      maxLoan,
      exitFee,
    };
  };

  evaluateCriteriaUOB = (formValues: FormikValues) => {
    const isShortDebtForPermanentOfficer =
      formValues.occupation === 'A1' &&
      formValues.howlong === 'A1' &&
      !['A1', 'A2', 'A3', 'A4', 'A5'].includes(formValues.income);
    const specialInterestRate: string | SpecialInterestRateType =
      isShortDebtForPermanentOfficer
        ? {
            min: 9.99,
            month: 2,
            first: true,
          }
        : '-';
    const normalInterestRate = {
      min: 18.99,
      max: 25,
      tenor: !isShortDebtForPermanentOfficer,
    };
    const maxLoan = ['A1', 'A2', 'A3'].includes(formValues.income)
      ? {
          times: 1.5,
          amount: 1.5,
        }
      : {
          times: 5,
          amount: 1.5,
        };

    const exitFee = {
      year: 1,
      special: true,
    };

    const isActive =
      provincesUOBAccept.includes(formValues.province) &&
      ((['A1', 'A4'].includes(formValues.occupation) &&
        !['A1', 'A2'].includes(formValues.income) &&
        formValues.experience === 'A3') ||
        (formValues.occupation === 'A5' &&
          formValues.income === 'A9' &&
          formValues.registered === 'A3'));
    return {
      isActive,
      specialInterestRate,
      normalInterestRate,
      maxLoan,
      exitFee,
    };
  };

  evaluateCriteriaLH = (formValues: FormikValues) => {
    const isActive =
      provincesLHAccept.includes(formValues.province) &&
      ['A1', 'A2', 'A4'].includes(formValues.occupation) &&
      !['A1', 'A2', 'A3'].includes(formValues.income) &&
      formValues.experience === 'A3';
    const normalInterestRate = { min: 8.8, max: 25, tenor: true };
    const maxLoan = ['A1', 'A2', 'A3'].includes(formValues.income)
      ? {
          times: 1.5,
          amount: 1.5,
        }
      : { times: 5, amount: 1.5 };
    const exitFee = {
      percentage: 2,
      year: 1,
    };
    return { isActive, exitFee, normalInterestRate, maxLoan };
  };

  evaluateCriteriaCiti = (formValues: FormikValues) => {
    const isDebtConsolidation = formValues.purpose === 'A1';
    let specialInterestRate: string | SpecialInterestRateType = '-';
    let normalInterestRate: string | InterestRateType = '-';

    if (isDebtConsolidation) {
      specialInterestRate = {
        min: 15.99,
        max: 25,
        tenor: true,
      };
    } else if (
      formValues.howlong === 'A2' &&
      !['A1', 'A2', 'A3'].includes(formValues.income) &&
      (formValues.customer_banks_loan.includes(5) ||
        ['A1', 'A4'].includes(formValues.occupation))
    ) {
      specialInterestRate = {
        min: 9.99,
        max: 20.99,
        tenor: true,
      };
    } else {
      normalInterestRate = {
        min: 15.99,
        max: 25,
        tenor: true,
      };
    }

    const maxLoan = ['A1', 'A2', 'A3'].includes(formValues.income)
      ? {
          times: 1.5,
          amount: 2,
        }
      : {
          times: 5,
          amount: 2,
        };

    const exitFee = {
      percentage: 5,
      year: 2,
    };

    // criteria
    const isActive =
      !['A1', 'A2'].includes(formValues.income) &&
      ((['A1', 'A4'].includes(formValues.occupation) &&
        formValues.experience !== 'A1' &&
        !['A1', 'A2'].includes(formValues.income)) ||
        (formValues.occupation === 'A5' && formValues.registered === 'A3'));
    return {
      isActive,
      specialInterestRate,
      normalInterestRate,
      maxLoan,
      exitFee,
      loanType: isDebtConsolidation ? 'debt_consolidation' : 'cash_loan',
    };
  };

  transformBank = (bank: BankType, formValues: FormikValues): BankType => {
    const b = bank;
    b.id = bank.shortName;

    switch (b.shortName) {
      case 'CITI':
        return { ...b, ...this.evaluateCriteriaCiti(formValues) };
      case 'KRUNGSRI':
        return { ...b, ...this.evaluateCriteriaKrungsri(formValues) };
      case 'SCB':
        return { ...b, ...this.evaluateCriteriaSCB(formValues) };
      case 'KKP':
        return { ...b, ...this.evaluateCriteriaKKP(formValues) };
      case 'TTB':
        return { ...b, ...this.evaluateCriteriaTTB(formValues) };
      case 'LHBANK':
        return { ...b, ...this.evaluateCriteriaLH(formValues) };
      case 'UOB':
        return { ...b, ...this.evaluateCriteriaUOB(formValues) };
      default:
        return b;
    }
  };

  getRanking(formValues: FormikValues) {
    this.banks = this.banks.map((bank) => this.transformBank(bank, formValues));

    const activeBanks: Array<BankType> = this.banks.filter((b) => b.isActive);
    this.banks.forEach((bank: any) => {
      const selected: BankType = bank;
      selected.isRecommended =
        activeBanks.length &&
        activeBanks.includes(selected) &&
        activeBanks.indexOf(selected) === 0;
      return selected;
    });
    const nonActiveBanks: Array<BankType> = this.banks.filter(
      (b) => !b.isActive
    );
    return [...activeBanks, ...nonActiveBanks];
  }
}

export default LoanBankRankingHandler;
