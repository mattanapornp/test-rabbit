import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { DataTable } from 'cucumber';
import { baseUrl, questionPageUrl } from '../../../../constants';
import { testData } from '../../../../fixtures/test-data.json';
import { getFieldType, fillField } from '../../../../utils';

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

// By using the intercept, we can validate if the right information is sent to the server by asserting the intercepted value
Before(() => {
  cy.intercept('POST', '**/api/campaign/personal-loan/response').as(
    'api/campaign/personal-loan/responset'
  );
});

// A step to fill the form until a certain point
// For example, you want to fill the form up to 'income', you can use the step as follows:
// "Given the form is filled until 'income' in 'thai'"
Given(
  'the form is filled until {string} in {string}',
  (fieldName: string, language: string) => {
    const testDataKeys = Object.keys(testData);
    const testDataValues = Object.values(testData);
    const indexTo = testDataKeys.indexOf(fieldName);
    for (let index = 0; index < indexTo; index += 1) {
      const fieldType = getFieldType(testDataKeys[index]);
      fillField(fieldType, index, testDataKeys, testDataValues, language);
    }
  }
);

// A step to fill the form completely with default values
When('I fill all the correct values in {string}', (language: string) => {
  const testDataKeys = Object.keys(testData);
  const testDataValues = Object.values(testData);

  for (let index = 0; index < testDataKeys.length; index += 1) {
    const fieldType = getFieldType(testDataKeys[index]);
    fillField(fieldType, index, testDataKeys, testDataValues, language);
  }
});

// A step to assert the response of the request which is sent to the server when submitting the form
Then(
  'expect the response of {string} post have following values',
  (apiEndpointName: string, dataTable: any) => {
    let propValue;
    cy.wait(`@${apiEndpointName}`)
      .its('request.body')
      .then((body) => {
        dataTable.hashes().forEach((elem) => {
          for (let index; index < elem.length; index += 1) {
            propValue = elem[index];
            expect(body.values).to.have.deep.property(elem, propValue);
          }
        });
      });
  }
);

// A general assertion step which can be used to check whether elements in a specific section are e.g. visible or enabled
Then(
  'expect {string} with text {string} in section {string} to be {string}',
  (elemementType: string, text: string, section: string, condition: string) => {
    cy.get(`#${section}`).within(() => {
      cy.get(elemementType).contains(text).should(`be.${condition}`);
    });
  }
);

// A step to validate all the options of a select field
Then(
  'expect options of {string} select to be correct in {string}',
  (fieldName: string, language: string) => {
    const testDataKeys = Object.keys(testData);
    const testDataValues = Object.values(testData);
    const index = testDataKeys.indexOf(fieldName);
    const fieldType = getFieldType(testDataKeys[index]);
    if (fieldType === 'select') {
      cy.get(`select[name="${fieldName}"]`)
        .find('option')
        .then((options: any) => {
          const actual = [...options].map((o) => o.text);
          expect(actual).to.deep.eq(testDataValues[index].values[language]);
        });
    } else {
      cy.get('#customer_banks_loan')
        .find('h6')
        .then((options: any) => {
          const actual = [...options].map((o) => o.innerText);
          expect(actual).to.deep.eq(testDataValues[index].values[language]);
        });
    }
  }
);

// A step to validate the default option at a select field
Then(
  'expect default option of {string} to be {string}',
  (fieldName: string, value: string) => {
    cy.get(`select[name="${fieldName}"] option:selected`)
      .invoke('text')
      .should('eq', value);
  }
);

// A general assertion step which can be used to check whether elements are e.g. visible or enabled
Then(
  'expect {string} with text {string} to be {string}',
  (element: string, elementName: string, condition: string) => {
    cy.get(`${element}[name="${elementName}"]`).should(`be.${condition}`);
  }
);

// A step to validate the options of a select field, in this step the options should be define in the scenario,
// and given as a parameter to this step
Then(
  'expect options of {string} select equal to {string}',
  (fieldName: string, values: string) => {
    cy.get(`select[name=${fieldName}] > option`).then((options: any) => {
      const actual = [...options].map((o) => o.text);
      expect(actual.join(', ')).to.equal(values);
    });
  }
);

// A step to check if the customer can select a bank of choice in the customer bank loan section
Then(
  'expect following fields to be {string}',
  (condition: string, dataTable: DataTable) => {
    dataTable.rows().forEach((elem) => {
      cy.get('#customer_banks_loan').within(() => {
        if (condition === 'checked') {
          cy.get('h6')
            .contains(elem.toString())
            .parent()
            .parent()
            .parent()
            .parent()
            .should('have.class', 'multi-select__selected-item');
        } else {
          cy.get('h6')
            .contains(elem.toString())
            .parent()
            .parent()
            .parent()
            .parent()
            .should('not.have.class', 'multi-select__selected-item');
        }
      });
    });
  }
);

// A step to validate the given error message when a field input is not valid
Then(
  'expect error message {string} is displayed at {string} field',
  (message: string, field: string) => {
    if (field === 'email') {
      cy.get(`input[name=${field}]`)
        .parent()
        .next()
        .should('have.text', message);
    } else {
      cy.get(`input[name=${field}]`).next().should('have.text', message);
    }
  }
);

// A step to validate the placeholder of an input field
Then(
  'expect the {string} field to have value {string}',
  (field: string, value: string) => {
    cy.get(`input[name="${field}"]`).should('have.attr', 'placeholder', value);
  }
);
