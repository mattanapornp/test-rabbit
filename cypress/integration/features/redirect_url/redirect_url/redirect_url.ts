import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { redirectUrl } from '../../../../constants_url';

const testDataKeys = Object.keys(redirectUrl);
const testDataValues = Object.values(redirectUrl);
let RF_baseUrl     
let RC_baseUrl               
        Before(() => {
            for (let index = 0; index < 2; index += 1) {
            const count = index+1;
            cy.fixture('test-data-url').then((testdata)  => {
              cy.log(`${count}`);
              RF_baseUrl = testdata[`${count}`].RF_baseUrl 
              RC_baseUrl = testdata[`${count}`].RC_baseUrl
              cy.log(`${RF_baseUrl}`);
              cy.log(`${RC_baseUrl}`);
            })
          }
        })
          

          // Given the url RF
          Given('input Rabbit Finnance website {string}',() => { 
            //cy.fixture('test-data-url').then((testdata)  => {
            //var RF_baseUrl = testdata
            //var RC_baseUrl = testdata.no
            //cy.log(`${RF_baseUrl}`);
            //cy.log(`${RC_baseUrl}`);
            //})
            //}
          
          cy.visit(RF_baseUrl);
          }
          );
          // A step to check have change url from RF
           When('redirect from Rabbit Finnance website {string}', () => {
          cy.url().should('eq', RF_baseUrl);
          }
          );
    
          // A step to validate url is redirect to RF
          Then('expect redirect to Rabbit Care website correctly point {string}', () => {
          cy.wait(2000)
          cy.url().should('not.eq', RC_baseUrl) 
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
