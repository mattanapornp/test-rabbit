import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { redirectUrl } from '../../../../constants_url';

// cypress will visit the page in english

const testDataKeys = Object.keys(redirectUrl);
const testDataValues = Object.values(redirectUrl);
for (let index = 0; index < 375; index += 1) {
  const count = index+1;
    // Given the url RF
    Given('input Rabbit Finnance website {string}',() => {
    cy.log(`${count}`);
    cy.visit(`${redirectUrl.urls.no211.RF_baseUrl}`);
    }
    );

    // A step to check have change url to RC
    When('redirect from Rabbit Finnance website {string}', () => {
    cy.url().should('eq', `${redirectUrl.urls.no211.RC_baseUrl}`);
    }
    );

    // A step to validate url is redirect to RC and diplayed corectly
    Then('expect redirect to Rabbit Care website correctly point {string}', () => {
    cy.wait(2000)
    cy.url().should('eq', `${redirectUrl.urls.no211.RC_baseUrl}`) 
    cy.get('.css-1u6jo85').should('not.exist');
    cy.get('.chakra-heading css-tr6dnf').should('not.exist');
    cy.get('.chakra-text css-1k3k3fz').should('not.exist');
    }
    );
  //it('is true', () => {
  //  expect(count).lessThan(375);
  //  cy.log(`${count}`);
  //})
}