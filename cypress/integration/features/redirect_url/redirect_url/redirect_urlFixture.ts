import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from 'cucumber';
import { RF_baseUrl, RC_baseUrl } from '../../../../constants';
import { testData } from '../../../../fixtures/test-data-url.json';
import { getFieldType, fillField } from '../../../../utils';
import { data } from 'cypress/types/jquery';


// A step to fill the form until a certain point
// For example, you want to fill the form up to 'income', you can use the step as follows:
// "Given the form is filled until 'income' in 'thai'"
Given(
  'input Rabbit Finnance website {string}',
    (rf_path: string) => {
    cy.visit(`${RF_baseUrl}`) ;
    }
);

// A step to fill the form completely with default values
When('redirect from Rabbit Finnance website {string}', 
  (rf_path: string) => {
  cy.url().should('eq', `${RF_baseUrl}`);
  }
);

// A step to validate the placeholder of an input field
Then(
  'expect redirect to Rabbit Care website correctly point {string}', 
    (rc_path: string) => {
    cy.url().should('not.eq', `${RC_baseUrl}`) 
  }
);
