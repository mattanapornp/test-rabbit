import { Then, When } from 'cypress-cucumber-preprocessor/steps';

// A step to navigate to an invalid url
When('I navigate to an invalid url', () => {
  cy.visit('/en/unknown-url', {
    failOnStatusCode: false,
  });
});

// A step to validate the error messages by a specific error
Then('expect the {string} page to be visible', (page) => {
  switch (page) {
    case '404':
      cy.get('img').should('be.visible');
      cy.get('h3').should(($h) => {
        expect($h).to.contain('Sorry');
      });
      cy.get('p').should(($p) => {
        expect($p).to.contain('This page is not available');
      });
      cy.get('button').should(
        'have.css',
        'background-color',
        'rgb(0, 80, 152)'
      );
      break;
    default:
      break;
  }
});
