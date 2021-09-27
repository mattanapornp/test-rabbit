import { expect, test } from '@jest/globals';
import number from './number';

const validator = number({ max: 500000 });

test('Invalid type of value : empty value', () => {
  expect(validator.isValidSync('')).toBeFalsy();
});

test('Invalid type of value : number type', () => {
  expect(validator.isValidSync('number')).toBeFalsy();
});

test('Invalid value which is greater than max value', () => {
  expect(validator.isValidSync(5000000)).toBeFalsy();
});
