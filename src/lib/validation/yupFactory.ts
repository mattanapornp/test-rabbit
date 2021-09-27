import email from './validators/email';
import phone from './validators/phone';
import date from './validators/date';
import dob from './validators/dob';
import name from './validators/name';
import multipleChoice from './validators/multipleChoice';
import thaiID from './validators/thaiId';
import defaultRule from './validators/default';
import range from './validators/range';
import number from './validators/number';
import array from './validators/array';

export default (rule, params) => {
  switch (rule) {
    case 'email':
      return email();
    case 'phone':
      return phone();
    case 'name':
      return name(params);
    case 'date':
      return date(params);
    case 'dob':
      return dob(params);
    case 'multiple_choice':
      return multipleChoice(params);
    case 'thai_id':
      return thaiID(params);
    case 'range':
      return range(params);
    case 'number':
      return number(params);
    case 'array':
      return array(params);
    case 'text':
    case 'default':
    default:
      return defaultRule(params);
  }

  return null;
};
