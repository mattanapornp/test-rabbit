import { FormikValues } from 'formik';
import banks, {
  provincesASNNotAccept,
  provincesCarFinnAccept,
  carBrandsKKPAccept,
  carBrandsKrungsriAccept,
} from '../constants/banks';
import { BankType } from './transformBanks';

class BankRankingHandler {
  isInRangeOfCarYear = (value: number, yearGap: number) => {
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - yearGap;
    return value >= minYear && value <= currentYear;
  };

  isInRangeOfMinMax = (value: number, min: number, max: number) => {
    return value >= min && value <= max;
  };

  checkDebtfree = (
    value: string,
    param: Array<string>,
    dependentValue: string
  ) => {
    return value === 'Y' || (value === 'N' && param.includes(dependentValue));
  };

  evaluateCriteriaSCB = (formValues: FormikValues) => {
    return (
      formValues.carmanufac >= 2009 &&
      formValues.hmborrow <= 5000000 &&
      ['A1', 'A2', 'A3'].includes(formValues.latepayment)
    );
  };

  evaluateCriteriaKrungsri = (formValues: FormikValues) => {
    const debtFree = this.checkDebtfree(
      formValues.debtfree,
      ['A2', 'A3'],
      formValues.hmrepaid
    );
    return (
      carBrandsKrungsriAccept.includes(formValues.carbrand) &&
      formValues.carmanufac >= 2001 &&
      formValues.hmborrow <= 5000000 &&
      debtFree
    );
  };

  evaluateCriteriaKbank = (formValues: FormikValues) => {
    const debtFree = this.checkDebtfree(
      formValues.debtfree,
      ['A3'],
      formValues.hmrepaid
    );
    return (
      formValues.carmanufac >= 2005 &&
      formValues.hmborrow <= 5000000 &&
      debtFree &&
      ['A1', 'A2', 'A3', 'A4'].includes(formValues.latepayment) &&
      ['A2', 'A3', 'A4', 'A5', 'A6', 'A7'].includes(formValues.income)
    );
  };

  evaluateCriteriaKKP = (formValues: FormikValues) => {
    const debtFree = this.checkDebtfree(
      formValues.debtfree,
      ['A2', 'A3'],
      formValues.hmrepaid
    );
    return (
      carBrandsKKPAccept.includes(formValues.carbrand) &&
      formValues.carmanufac >= 2006 &&
      formValues.hmborrow <= 5000000 &&
      debtFree &&
      ['A1', 'A2', 'A3'].includes(formValues.latepayment) &&
      ['A2', 'A3', 'A4', 'A5', 'A6', 'A7'].includes(formValues.income)
    );
  };

  evaluateCriteriaTISCO = (formValues: FormikValues) => {
    const debtFree = this.checkDebtfree(
      formValues.debtfree,
      ['A2', 'A3'],
      formValues.hmrepaid
    );
    const isInRangeHMBorrow = this.isInRangeOfMinMax(
      formValues.hmborrow,
      30000,
      10000000
    );
    const isInRangeCarYear = this.isInRangeOfCarYear(formValues.carmanufac, 20);

    return (
      !['Proton', 'TR'].includes(formValues.carbrand) &&
      isInRangeCarYear &&
      isInRangeHMBorrow &&
      debtFree &&
      ['A1', 'A2'].includes(formValues.latepayment)
    );
  };

  evaluateCriteriaTTB = (formValues: FormikValues) => {
    const debtFree = this.checkDebtfree(
      formValues.debtfree,
      ['A2', 'A3'],
      formValues.hmrepaid
    );
    return (
      formValues.carbrand !== 'Proton' &&
      formValues.carmanufac >= 2005 &&
      formValues.hmborrow <= 5000000 &&
      debtFree &&
      ['A1', 'A2', 'A3'].includes(formValues.latepayment)
    );
  };

  evaluateCriteriaASN = (formValues: FormikValues) => {
    const canAccept =
      formValues.carbrand === 'Chevrolet'
        ? formValues.carbrand === 'Chevrolet' && formValues.carmanufac >= 2016
        : formValues.carmanufac >= 2007;
    const debtFree =
      formValues.debtfree === 'Y' ||
      (formValues.debtfree === 'N' && formValues.hmrepaid === 'A3');
    return (
      canAccept &&
      formValues.hmborrow <= 300000 &&
      !['A3', 'A5', 'A8', 'A9'].includes(formValues.occupation) &&
      debtFree &&
      !provincesASNNotAccept.includes(formValues.province)
    );
  };

  evaluateCriteriaCarFinn = (formValues: FormikValues) => {
    return (
      formValues.carbrand !== 'Chevrolet' &&
      formValues.carmanufac >= 2008 &&
      formValues.hmborrow <= 1500000 &&
      !['A6', 'A8'].includes(formValues.occupation) &&
      provincesCarFinnAccept.includes(formValues.province)
    );
  };

  evaluateCriteriaSomwang = (formValues: FormikValues) => {
    const debtFree = this.checkDebtfree(
      formValues.debtfree,
      ['A2', 'A3'],
      formValues.hmrepaid
    );
    const isInRangeCarYear = this.isInRangeOfCarYear(formValues.carmanufac, 20);
    const isInRangeHMBorrow = this.isInRangeOfMinMax(
      formValues.hmborrow,
      30000,
      10000000
    );
    return (
      !['Proton', 'TR'].includes(formValues.carbrand) &&
      isInRangeCarYear &&
      isInRangeHMBorrow &&
      debtFree &&
      ['A1', 'A2'].includes(formValues.latepayment)
    );
  };

  getRanking(formValues: FormikValues) {
    banks.map((bank: BankType) => {
      const b = bank;
      b.id = bank.shortName;
      switch (b.shortName) {
        case 'SCB':
          b.isActive = this.evaluateCriteriaSCB(formValues);
          break;
        case 'KRUNGSRI':
          b.isActive = this.evaluateCriteriaKrungsri(formValues);
          break;
        case 'KBANK':
          b.isActive = this.evaluateCriteriaKbank(formValues);
          break;
        case 'KKP':
          b.isActive = this.evaluateCriteriaKKP(formValues);
          break;
        case 'TISCO':
          b.isActive = this.evaluateCriteriaTISCO(formValues);
          break;
        case 'ASN':
          b.isActive = this.evaluateCriteriaASN(formValues);
          break;
        case 'CARFINN':
          b.isActive = this.evaluateCriteriaCarFinn(formValues);
          break;
        default:
          b.isActive = this.evaluateCriteriaSomwang(formValues);
          break;
      }
      return b;
    });

    const activeBanks: Array<BankType> = banks.filter((b) => b.isActive);
    banks.map((bank: BankType) => {
      const selected: BankType = bank;
      selected.isRecommended =
        activeBanks.length &&
        activeBanks.includes(selected) &&
        activeBanks.indexOf(selected) === 0;
      return selected;
    });
    const nonActiveBanks: Array<BankType> = banks.filter((b) => !b.isActive);
    return [...activeBanks, ...nonActiveBanks];
  }
}

export default BankRankingHandler;
