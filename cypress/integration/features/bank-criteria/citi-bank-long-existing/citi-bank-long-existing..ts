import { When, Then, Before } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from 'cucumber';
import { cases } from '../../../../fixtures/citibank-long-existing.json';
import { getFieldType, fillFieldWithValue } from '../../../../utils';
import { baseUrl, questionPageUrl } from '../../../../constants';

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

When('I select {string} bank', (bankChoice: string) => {
  cy.get(`#${bankChoice.toUpperCase()}__detail-card`).click();
});

When('I click {string} in citi loan section', (value: string) => {
  if (value === 'Yes') {
    cy.get('label[for="citiloan-Y"]').click();
  } else {
    cy.get('label[for="citiloan-N"]').click();
  }
});

Then(
  'expect the {string} card have the following values',
  (bankName: string, data: DataTable) => {
    cy.get(`#${bankName.toUpperCase()}__detail-card > .card-body`).within(
      () => {
        let propertyValue: string;
        data.hashes().forEach((elem: any) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const propertyName in elem) {
            if (elem.hasOwnProperty.call(elem, propertyName)) {
              propertyValue = elem[propertyName];
              cy.get('.rich-multichoice__details')
                .contains('div', propertyName)
                .next()
                .should('have.text', `${propertyValue}`);
            }
          }
        });
      }
    );
  }
);
