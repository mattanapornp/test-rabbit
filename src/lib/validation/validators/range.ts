import * as Yup from 'yup';

export default (params) => {
  let range = Yup.number()
    .typeError('common:validation.required_range')
    .required('common:validation.required_range');

  if (params.min) {
    range = range.min(params.min, {
      key: 'common:validation.invalid_min_range',
      values: { value: params.min },
    });
  }

  if (params.max) {
    range = range.max(params.max, {
      key: 'common:validation.invalid_max_range',
      values: { value: params.max },
    });
  }

  return range;
};
