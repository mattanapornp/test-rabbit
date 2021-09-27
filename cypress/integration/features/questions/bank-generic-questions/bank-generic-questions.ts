import { Before, When } from 'cypress-cucumber-preprocessor/steps';
import { baseUrl, questionPageUrl } from '../../../../constants';
import { fillFieldWithValue, getFieldType } from '../../../../utils';
import { cases } from '../../../../fixtures/bank-generic-questions.json';

// By using the tag '@english' above your scenario,
// cypress will visit the page in english
Before({ tags: '@english' }, () => {
  cy.visit(`${baseUrl}en/${questionPageUrl}`);
});

// By using the tag '@thai' above your scenario,
// cypress will visit the page in thai
Before({ tags: '@thai' }, () => {
  cy.visit(`${baseUrl}${questionPageUrl}`);
});

// Step to select a specific bank from the choices the customer can make
When('I select {string} bank', (bankChoice: string) => {
  cy.get(`#${bankChoice.toUpperCase()}__detail-card`).click();
});

// Step to fill in the values of specific test case defined in json
When(
  'I fill the form with values of test case {string}',
  (testCase: string) => {
    const keys: string[] = Object.keys(cases[testCase]);
    const values: string[] = Object.values(cases[testCase]);
    for (let index: number = 0; index < keys.length; index += 1) {
      const fieldType = getFieldType(keys[index]);
      fillFieldWithValue(fieldType, keys[index], values[index]);
    }
  }
);
