import * as Yup from 'yup';

export default (params) => {
  let number = Yup.number()
    .typeError('common:validation.required')
    .required('common:validation.required');

  if (params.max) {
    number = number.max(params.max, {
      key: 'common:validation.invalid_price',
      values: { value: params.max },
    });
  }

  return number;
};
