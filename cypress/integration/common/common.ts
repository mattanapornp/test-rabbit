import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { fillFieldWithValue, getFieldType } from '../../utils';
import { cases } from '../../fixtures/bank-generic-questions.json';

Given('I intercept the post request', () => {
  cy.intercept('POST', '**/api/campaign/personal-loan/responset').as('post');
});

// Step to click on a button e.g 'next button' in a specific section.
// Please use the ID of the section as it's selector
When(
  'I click the button {string} in section {string}',
  (text: string, section: string) => {
    cy.get(`#${section}`).within(() => {
      cy.get('button')
        .contains(text)
        .should('be.visible')
        .click({ force: true });
    });
  }
);

// Step to type a specific value into an input field.
// Please use the name of the input field as the selector.
// In case the name is not given, adjust the method to look at the id of the input field.
When(
  'I type {string} at the {string} field',
  (value: string, field: string) => {
    let selector: string;
    if (field === 'idcard') {
      selector = `input[id="${field}"]`;
    } else {
      selector = `input[name=${field}]`;
    }
    if (value === '') {
      cy.get(selector).clear();
    } else {
      cy.get(selector).clear().type(value).blur();
    }
  }
);

// Step to select a specific value at a select field
// Please use the name of the input field as the selector.
When(
  'I select option {string} at select {string}',
  (option: string, field: string) => {
    cy.get(`select[name="${field}"]`)
      .find('option')
      .contains(option)
      .then((selectOption) => {
        cy.get(`select[name="${field}"]`).select(`${selectOption.text()}`, {
          force: true,
        });
      });
  }
);

// Step to select a specific value at a select field
// This select option is only used for the bank selection
When('I select the value {string}', (value) => {
  cy.get('#customer_banks_loan')
    .should('be.visible')
    .find('h6')
    .contains(value)
    .click({ force: true });
});

// Step to fill in the Qflow with values from specific test case
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

When(
  'I click {string} and {string} in {string} section',
  (consent: string, button: string, section: string) => {
    cy.get(`#${section}`).within(() => {
      cy.get('label')
        .contains(consent)
        .should('be.visible')
        .click({ force: true });
    });
    cy.get(`#${section}`).within(() => {
      cy.get('button')
        .contains(button)
        .should('be.visible')
        .click({ force: true });
    });
  }
);

// Step to validate a button e.g 'next button' in a specific section.
// Please use the ID of the section as it's selector
Then(
  'expect button {string} in section {string} to be {string}',
  (text: string, section: string, condition: string) => {
    cy.get(`#${section}`).within(() => {
      cy.get('button').contains(text).should(`be.${condition}`);
    });
  }
);

// Step to validate page's url
Then('expect the url to include {string}', (url: string) => {
  cy.url().should('include', url);
});

// Step to validate the question's text
// Please use ID of the section as it's selector
Then(
  'expect question of {string} select to be {string}',
  (fieldName: string, value: string) => {
    cy.get(`label[for=${fieldName}]`).should('be.visible');
    cy.get(`label[for=${fieldName}]`).should('have.text', value);
  }
);

Then(
  'expect message of {string} select to be {string}',
  (fieldName: string, value: string) => {
    if (fieldName === 'title') {
      cy.get('h3', { timeout: 10000 }).should('be.visible');
      cy.get('h3').should('have.text', value);
    } else {
      cy.get('div').within(() => {
        cy.get('p').contains(value).should('be.visible');
      });
    }
  }
);

// Step to validate the citibank custom question choices
Then(
  'expect the choices to be {string} and {string}',
  (choiceY: string, choiceN: string) => {
    cy.get('label[for="citiloan-Y"]').should('have.text', choiceY);
    cy.get('label[for="citiloan-N"]').should('have.text', choiceN);
  }
);

Then('expect the {string} bank card to be {string}', (bank: string, value: string) => {
  cy.get(`#${bank.toUpperCase()}__eligible-text`).then($bankCard => {
    if ($bankCard.is(':visible')){
      cy.contains(value).should('be.visible');
    }else{
      cy.contains(value).should('not.be.visible');
    }
  })
});