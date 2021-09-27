Feature: Tests for the Bank Generic Questions

  This feature file the question concerning bank choices such as ID card will be tested.
  For this specific fields, the title of the question will be validated as well the field validations will be validated

  JIRA Reference: QAA-282

  The test cases are defined in the following file:
  https://docs.google.com/spreadsheets/d/1YfZb_A1ChA_u8VxcVLdQrHDNlStNrlwJayhMiCLKRwM/edit#gid=0

  @english
  Scenario: TC_033_QUESTION_PAGE - idcard field - ENG
    When I fill the form with values of test case 'krungsi_ENG'
    And I select 'Krungsri' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect question of 'idcard' select to be 'What is your ID number?'
    Then expect button 'Next' in section 'idcard' to be 'disabled'

    When I type '11A000019989' at the 'idcard' field
    Then expect button 'Next' in section 'idcard' to be 'disabled'

    When I type '1100600189373' at the 'idcard' field
    Then expect button 'Next' in section 'idcard' to be 'enabled'

  @thai
  Scenario: TC_034_QUESTION_PAGE - idcard field - THAI
    When I fill the form with values of test case 'krungsi_THAI'
    And I select 'Krungsri' bank
    And I click the button 'ต่อไป' in section 'customer_banks'
    Then expect question of 'idcard' select to be 'ระบุเลขบัตรประชาชนของคุณ'
    Then expect button 'ต่อไป' in section 'idcard' to be 'disabled'

    When I type '11A000019989' at the 'idcard' field
    Then expect button 'ต่อไป' in section 'idcard' to be 'disabled'

    When I type '1100600189373' at the 'idcard' field
    Then expect button 'ต่อไป' in section 'idcard' to be 'enabled'

  @english
  Scenario: TC_035_QUESTION_PAGE - citiloan field - ENG
    When I fill the form with values of test case 'krungsi_ENG'
    And I select 'Citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect question of 'citiloan' select to be 'Have you ever apply loan with Citibank in the previous 6 months?'
    And expect the choices to be 'Yes' and 'No'

  @thai
  Scenario: TC_036_QUESTION_PAGE - citiloan field - THAI
    When I fill the form with values of test case 'krungsi_THAI'
    And I select 'Citi' bank
    And I click the button 'ต่อไป' in section 'customer_banks'
    Then expect question of 'citiloan' select to be 'คุณมีประวัติการขอสินเชื่อ Citi ในระยะเวลา 6 เดือนที่ผ่านมา'
    And expect the choices to be 'ใช่' and 'ไม่ใช่'

  @english
  Scenario: TC_037_QUESTION_PAGE - idcard and citiloan field - ENG
    When I fill the form with values of test case 'krungsi_ENG'
    And I select 'Krungsri' bank
    And I select 'Citi' bank
    And I click the button 'Next' in section 'customer_banks'

    Then expect question of 'idcard' select to be 'What is your ID number?'
    Then expect button 'Next' in section 'idcard' to be 'disabled'
    When I type '1100600189373' at the 'idcard' field
    And I click the button 'Next' in section 'idcard'

    Then expect question of 'citiloan' select to be 'Have you ever apply loan with Citibank in the previous 6 months?'
    And expect the choices to be 'Yes' and 'No'

  @thai
  Scenario: TC_038_QUESTION_PAGE - idcard and citiloan  field - THAI
    When I fill the form with values of test case 'krungsi_THAI'
    And I select 'Krungsri' bank
    And I select 'Citi' bank
    And I click the button 'ต่อไป' in section 'customer_banks'

    Then expect question of 'idcard' select to be 'ระบุเลขบัตรประชาชนของคุณ'
    Then expect button 'ต่อไป' in section 'idcard' to be 'disabled'
    When I type '1100600189373' at the 'idcard' field
    And I click the button 'ต่อไป' in section 'idcard'

    Then expect question of 'citiloan' select to be 'คุณมีประวัติการขอสินเชื่อ Citi ในระยะเวลา 6 เดือนที่ผ่านมา'
    And expect the choices to be 'ใช่' and 'ไม่ใช่'



