import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from 'cucumber';
import { RF_baseUrl, RC_baseUrl } from '../../../../constants';
import { testData } from '../../../../fixtures/test-data-url.json';
import { getFieldType, fillField } from '../../../../utils';
import { data } from 'cypress/types/jquery';


// Given the url RF
Given(
  'input Rabbit Finnance website {string}',
    (rf_path: string) => {
    cy.visit(`${RF_baseUrl}`) ;
    }
);

// A step to check have change url
When('redirect from Rabbit Finnance website {string}', 
  (rf_path: string) => {
  cy.url().should('eq', `${RF_baseUrl}`);
  }
);

// A step to validate url is RF
Then(
  'expect redirect to Rabbit Care website correctly point {string}', 
    (rc_path: string) => {
    cy.url().should('not.eq', `${RC_baseUrl}`) 
  }
);
