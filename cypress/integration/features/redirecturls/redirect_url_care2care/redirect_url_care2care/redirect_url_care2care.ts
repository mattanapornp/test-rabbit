import { When, Then } from 'cypress-cucumber-preprocessor/steps';

  When(
    'go to Rabbit Care website {string}',(urls) => {
      cy.fixture('test-data-url').then((testdata)  => {
        cy.log(testdata[urls].RC_baseUrl);   
          if ((testdata[urls].RC_baseUrl).includes('https://corporate.rabbitcare.com')){
            cy.log('authen user');
            cy.visit(testdata[urls].RC_baseUrl, {
            auth: {
              username: 'shareinvestor',
              password: 'rabbitcare_1234',
            },
          })
          }
          else {
            cy.log('skip authen user');
            cy.visit(testdata[urls].RC_baseUrl)
          }
    });
  });

  Then(
    'expect displayed Rabbit Care website correctly {string}',(urls) => {
      cy.fixture('test-data-url').then((testdata)  => {
        cy.wait(2000)
        cy.url().should('eq', testdata[urls].RC_baseUrl) 
        cy.get('.css-1u6jo85').should('not.exist');
        cy.get('.chakra-heading css-tr6dnf').should('not.exist');
        cy.get('.chakra-text css-1k3k3fz').should('not.exist');   
    });
  });
