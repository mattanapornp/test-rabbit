import * as Yup from 'yup';

export default (params) => {
  let array = Yup.array().required('common:validation.required');
  if (params.min) {
    array = array.min(params.min, 'common:validation.invalid_min_bank_range');
  }
  if (params.max) {
    array = array.max(params.max, 'common:validation.invalid_max_bank_range');
  }
  return array;
};
