import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { redirectUrl } from '../../../../constants_url';


for (let index = 0; index < 365; index += 1) {
describe('Launch  testsite',() => {
  it('urls', () => { 
  //Fixture loads the testdata setup in fixtures folder , so setup testdata required before executing test script   
    const count = index+1;
    cy.log(`${count}`);
    cy.fixture('test-data-url').then((testdata)  => {
    const RF_baseUrl = testdata[`${count}`].RF_baseUrl 
    const RC_baseUrl = testdata[`${count}`].RC_baseUrl
    Cypress.config('defaultCommandTimeout', 5000);
    cy.log(`${RF_baseUrl}`);
    cy.log(`${RC_baseUrl}`);
    cy.visit(`${RF_baseUrl}`); 
    cy.url().should('not.eq', `${RC_baseUrl}`)   
    cy.wait(2000)
    cy.url().should('not.eq', `${RC_baseUrl}`) 
    cy.get('.css-1u6jo85').should('not.exist');
    cy.get('.chakra-heading css-tr6dnf').should('not.exist');
    cy.get('.chakra-text css-1k3k3fz').should('not.exist'); 
    cy.on('uncaught:exception', err => {
      return !err.message.includes(`Cannot read property '__error' of null`);
    });   
    //it('is true', () => {
    //  expect(count).lessThan(375);
    //  cy.log(`${count}`);
    //})
    }) 
  })
})
}
