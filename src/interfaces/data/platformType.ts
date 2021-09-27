export interface PlatformType {
  question_flow: Record<string, any>;
  questionOrder: Array<string>;
  sections: Record<string, any>;
  surveyDetail: Object;
}

export interface FormValuesType {
  carbrand: string;
  carmanufac: string;
  carmodel: string;
  customer_banks?: Array<string>;
  debtfree: string;
  district: string;
  email: string;
  hmborrow: number;
  income: string;
  latepayment: string;
  name: string;
  occupation: string;
  phone: string;
  province: string;
  surname: string;
  tc: string;
  zipcode: string;
}
