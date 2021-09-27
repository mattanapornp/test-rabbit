import { fieldTypes } from './fixtures/field-types.json';

/**
 * getFieldType is a method to determine the field type of the input element.
 * The field types should be configured at the fieldTypes.json.
 * The return value is the fieldType string.
 * @param {string} fieldName - the name of the field.
 */
export function getFieldType(fieldName: string): string {
  return Object.keys(fieldTypes).find((key) =>
    fieldTypes[key].includes(fieldName)
  );
}

/**
 * fillField is a method to fill all the fields of the Qflow with default values.
 * For select fields, the default value will be the 1st value of the list.
 * The return value is the fieldType string.
 * @param {string} fieldType - the type of field you want to fill.
 * @param {number} index - the index to determine the key and value of the field data.
 * @param { [x: string]: any } testDataKeys - the keys of the data fields which are used to search the fields defined in json file.
 * @param {any} testDataValues - the values of the fields which are used to fill in defined in json file.
 * @param {string} language - the language the user want to fill in the fields.
 */
export function fillField(
  fieldType: string,
  index: number,
  testDataKeys: { [x: string]: any },
  testDataValues: any,
  language: string
) {
  switch (fieldType) {
    case 'select': {
      const selector = `select[name="${testDataKeys[index]}"]`;
      cy.get(selector)
        .should('be.visible', { timeout: 7000 })
        .select(testDataValues[index].values[language][1], {
          timeout: 10000,
        });
      break;
    }
    case 'multiSelect':
      cy.get('div[class="multi-select"]')
        .should('be.visible')
        .within(() => {
          cy.get('h6')
            .contains(testDataValues[index].values[language][0])
            .click({ force: true, multiple: true });
        });
      break;
    case 'button':
      cy.get(`#${testDataKeys[index].slice(5)}`)
        .should('be.visible')
        .within(() => {
          cy.get('button')
            .should('have.text', testDataValues[index].values[language])
            .click();
        });
      break;
    case 'text':
      cy.get(`input[name="${testDataKeys[index]}"]`)
        .should('be.visible')
        .type(testDataValues[index].values[language])
        .blur();
      cy.get(`label[for=${testDataKeys[index]}]`)
        .should('be.visible')
        .should('have.text', testDataValues[index].label[language])
        .click();
      break;
    case 'contain':
      cy.get('label')
        .should('be.visible')
        .contains(testDataValues[index].values[language][0])
        .click();
      break;
    default:
      cy.log('field_type is invalid');
      break;
  }
}

/**
 * fillField is a method to fill a specific field of the Qflow with a value.
 * @param {string} fieldType - the type of field you want to fill.
 * @param {string} testDataKey - the key of the field which are used to get the field.
 * @param {string} testDataValue - the value you want to input in the field.
 */
export function fillFieldWithValue(
  fieldType: string,
  testDataKey: string,
  testDataValue: string
) {
  switch (fieldType) {
    case 'select': {
      const selector = `select[name="${testDataKey}"]`;
      cy.get(selector).should('be.visible').select(testDataValue, {
        timeout: 10000,
      });
      break;
    }
    case 'multiSelect':
      cy.get('div[class="multi-select"]')
        .should('be.visible')
        .within(() => {
          cy.get('h6').contains(testDataValue).click();
        });
      break;
    case 'button':
      cy.get(`#${testDataKey.slice(5)}`)
        .should('be.visible')
        .within(() => {
          cy.get('button').should('have.text', testDataValue).click();
        });
      break;
    case 'text':
      cy.get(`input[name="${testDataKey}"]`)
        .should('be.visible')
        .type(testDataValue)
        .blur();
      cy.get(`label[for="${testDataKey}"]`).click();
      break;
    case 'contain':
      cy.get('label').contains(testDataValue).should('be.visible').click();
      break;
    default:
      cy.log('field_type is invalid');
      break;
  }
}
