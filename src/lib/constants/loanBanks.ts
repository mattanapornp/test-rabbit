const banks = [
  {
    id: 'CITI',
    name: 'motor:loan_banks:CITI',
    logo: '/images/banks/citi_bank.svg,',
    isRecommended: false,
    isActive: true,
    specialInterestRate: '-',
    normalInterestRate: '15.99% - 25% ต่อปี (ตลอดอายุสัญญา)',
    maxLoan: 'ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท',
    maxTerm: 60,
    exitFee: '5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี)',
    loanType: 'cash_loan',
    shortName: 'CITI',
  },
  {
    id: 'KRUNGSRI',
    name: 'motor:loan_banks:KRUNGSRI',
    logo: '/images/banks/bank_4.svg,',
    isRecommended: false,
    isActive: true,
    specialInterestRate: '-',
    normalInterestRate: '19.99% - 25% ต่อปี (ตลอดอายุสัญญา)',
    maxLoan: 'ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท',
    maxTerm: 60,
    exitFee: 'ไม่มี',
    loanType: 'cash_loan',
    shortName: 'KRUNGSRI',
  },
  {
    id: 'SCB',
    name: 'motor:loan_banks:SCB',
    isRecommended: false,
    logo: '/images/banks/bank_1.svg,',
    isActive: true,
    specialInterestRate: '-',
    normalInterestRate: '15.99% - 25% ต่อปี (ตลอดอายุสัญญา)',
    maxLoan: 'ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 5 ล้านบาท',
    maxTerm: 72,
    exitFee:
      'ส่วนต่างระหว่างอัตราดอกเบี้ยสูงสุดและอัตราที่ได้รับ (ถ้าปิดสินเชื่อก่อน 2 ปี)',
    loanType: 'cash_loan',
    shortName: 'SCB',
  },
  {
    id: 'KKP',
    name: 'motor:loan_banks:KKP',
    logo: '/images/banks/bank_2.svg,',
    isRecommended: false,
    isActive: true,
    specialInterestRate: '-',
    normalInterestRate: '13.5% - 25% ต่อปี (ตลอดอายุสัญญา)',
    maxLoan: 'ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 1.5 ล้านบาท',
    maxTerm: 60,
    exitFee: '2% ของเงินที่จ่ายเกินค่างวด 2 เท่า',
    loanType: 'cash_loan',
    shortName: 'KKP',
  },
  {
    id: 'TTB',
    name: 'motor:loan_banks:TTB',
    logo: '/images/banks/bank_9.svg,',
    isRecommended: false,
    isActive: true,
    specialInterestRate: '-',
    normalInterestRate: '19% - 25% ต่อปี (ตลอดอายุสัญญา)',
    maxLoan: 'ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 1.5 ล้านบาท',
    maxTerm: 60,
    exitFee:
      'ส่วนต่างระหว่างอัตราดอกเบี้ยสูงสุดและอัตราที่ได้รับ (ถ้าปิดสินเชื่อก่อน 1 ปี)',
    loanType: 'cash_loan',
    shortName: 'TTB',
  },

  {
    id: 'UOB',
    name: 'motor:loan_banks:UOB',
    logo: '/images/banks/uob.svg,',
    isRecommended: false,
    isActive: true,
    specialInterestRate: '-',
    normalInterestRate: '18.99% - 25% ต่อปี (ตลอดอายุสัญญา)',
    maxLoan: 'ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 1.5 ล้านบาท',
    maxTerm: 60,
    exitFee:
      'ส่วนต่างระหว่างอัตราดอกเบี้ยสูงสุดและอัตราที่ได้รับ (ถ้าปิดสินเชื่อก่อน 1 ปี)',
    loanType: 'cash_loan',
    shortName: 'UOB',
  },
  {
    id: 'LHBANK',
    name: 'motor:loan_banks:LHBANK',
    logo: '/images/banks/lh_bank.svg,',
    isRecommended: false,
    isActive: true,
    specialInterestRate: '-',
    normalInterestRate: '8.8% - 25% ต่อปี (ตลอดอายุสัญญา)',
    maxLoan: 'ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 1.5 ล้านบาท',
    maxTerm: 60,
    exitFee: '2% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 1 ปี)',
    loanType: 'cash_loan',
    shortName: 'LHBANK',
  },
];

export default banks;

export const provincesASNNotAccept = [
  '570000',
  '580000',
  '630000',
  '430000',
  '270000',
  '930000',
  '830000',
  '910000',
  '940000',
  '960000',
  '920000',
];

export const provincesCarFinnAccept = [
  '100000',
  '130000',
  '120000',
  '730000',
  '110000',
  '740000',
  '210000',
  '200000',
  '760000',
  '700000',
  '160000',
  '750000',
  '170000',
  '720000',
  '140000',
  '150000',
  '300000',
  '240000',
  '710000',
  '180000',
  '250000',
  '610000',
  '270000',
];

export const provincesLHAccept = [
  '100000',
  '110000',
  '120000',
  '130000',
  '730000',
  '740000',
];

export const provincesUOBAccept = [
  '200000',
  '210000',
  '730000',
  '500000',
  '300000',
  '240000',
  '400000',
  '740000',
  '140000',
  '190000',
  '650000',
  '900000',
  '250000',
  '260000',
  '220000',
  '830000',
  '160000',
  '230000',
  '410000',
  '600000',
  '510000',
  '520000',
  '340000',
  '750000',
  '570000',
  '350000',
  '450000',
  '370000',
  '440000',
  '330000',
  '320000',
  '310000',
  '420000',
  '800000',
  '100000',
  '500000',
  '300000',
  '140000',
  '740000',
  '730000',
  '710000',
];