import { Given, When, Then, When } from 'cypress-cucumber-preprocessor/steps';
import { RF_baseUrl, RC_baseUrl, RC_corporate_baseUrl} from '../../../../constants';
import { category } from '../../../../fixtures/test-data-rabbiturl.json';

When ('I access the old RF urls in homepage category then it should redirect to new RC urls', () => {
            cy.visit(`${RF_baseUrl}`);
            cy.url().should('eq', `${RC_baseUrl}`);
})

When ('I access the old RF urls in about-us category then it should redirect to new RC urls', () => {
    const urls = category.aboutus
        urls.forEach((url) => {
            cy.visit(`${RF_baseUrl}`+ url);
            cy.url().should('eq', `${RC_corporate_baseUrl}`+ url);
        )};
})

When ('I access the old RF urls in corporate-insurance category then it should redirect to new RC urls', () => {
    const urls = category.corporateinsurance
        urls.forEach((url) => {
            cy.visit(`${RF_baseUrl}`+ "business" + url);
            cy.url().should('eq', `${RC_baseUrl}`+ "corporate-insurance" + url);
        )};
})  

When ('I access the old RF urls in car-insurances-brand category then it should redirect to new RC urls', () => {
    const urls = category.carinsurancebrand
        urls.forEach((url) => {
            cy.visit(`${RF_baseUrl}`+ "car-insurance/" + url);
            cy.url().should('eq', `${RC_baseUrl}`+ "car-insurance/brands/" + url);
        )};
}) 

When ('I access the old RF urls in motorbike-insurance-brand category then it should redirect to new RC urls', () => {
    const urls = category.motorbikeinsurancebrand
        urls.forEach((url) => {
            cy.visit(`${RF_baseUrl}`+ "motorbike-insurance/" + url);
            cy.url().should('eq', `${RC_baseUrl}`+ "motorbike-insurance/brands/" + url);
        )};
})

When ('I access the old RF urls in car-insurances-model category then it should redirect to new RC urls', () => {
    const urls = category.carinsurancemodel
        urls.forEach((url) => {
            cy.visit(`${RF_baseUrl}`+ "car-insurance/car-" + url);
            cy.url().should('eq', `${RC_baseUrl}`+ "car-insurance/models/" + url);
        )};
})

When ('I access the old RF urls in car-insurances-suppliers category then it should redirect to new RC urls', () => {
    const urls = category.carinsurancesuppliers
        urls.forEach((url) => {
            cy.visit(`${RF_baseUrl}`+ "car-insurance/" + url);
            cy.url().should('eq', `${RC_baseUrl}`+ "car-insurance/suppliers/" + url);
        )};
})

When ('I access the old RF urls in por-ror-bor category then it should redirect to new RC urls', () => {
            cy.visit(`${RF_baseUrl}`+ "car-insurance/por-ror-bor" + url);
            cy.url().should('eq', `${RC_baseUrl}`+ "por-ror-bor/car" + url);
            cy.visit(`${RF_baseUrl}`+ "en/car-insurance/por-ror-bor" + url;
            cy.url().should('eq', `${RC_baseUrl}`+ "en/por-ror-bor/car" + url);
})

When ('I access the old RF urls in cash-card category then it should redirect to new RC urls', () => {
    const oldurls = category.cashcardold
    const newurls = category.cashcardnew
    let i = 0;
        oldurls.forEach((oldurl) => {
            cy.visit(`${RF_baseUrl}` + oldurl);
            //cy.log(`${RC_baseUrl}`+ newurls[i])
            cy.url().should('eq', `${RC_baseUrl}`+ newurls[i]);
            i++;
        )};
        
}) 

When ('I access the old RF urls in credit-card category then it should redirect to new RC urls', () => {
    const oldurls = category.creditcardold
    const newurls = category.creditcardnew
    let i = 0;
        oldurls.forEach((oldurl) => {
            cy.visit(`${RF_baseUrl}` + oldurl);
            //cy.log(`${RC_baseUrl}`+ newurls[i])
            cy.url().should('eq', `${RC_baseUrl}`+ newurls[i]);
            i++;
        )};
})

When ('I access the old RF urls in loan category then it should redirect to new RC urls', () => {
    const oldurls = category.loanold
    const newurls = category.loannew
    let i = 0;
        oldurls.forEach((oldurl) => {
            cy.visit(`${RF_baseUrl}` + oldurl);
            //cy.log(`${RC_baseUrl}`+ newurls[i])
            cy.url().should('eq', `${RC_baseUrl}`+ newurls[i]);
            i++;
        )};
})

When ('I access the old RF urls in health-insurance category then it should redirect to new RC urls', () => {
    const oldurls = category.healthinsuranceold
    const newurls = category.healthinsurancenew
    let i = 0;
        oldurls.forEach((oldurl) => {
            cy.visit(`${RF_baseUrl}` + oldurl);
            //cy.log(`${RC_baseUrl}`+ newurls[i])
            cy.url().should('eq', `${RC_baseUrl}`+ newurls[i]);
            i++;
        )};
})