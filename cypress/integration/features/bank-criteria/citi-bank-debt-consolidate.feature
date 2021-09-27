Feature: Tests for the Citibank debt consolidate criteria

  This feature file the Citibank debt consolidate criteria will be tested.

  JIRA Reference: QAA-262

  The test cases are defined in the following file:
  https://docs.google.com/spreadsheets/d/1YfZb_A1ChA_u8VxcVLdQrHDNlStNrlwJayhMiCLKRwM/edit#gid=979496642

  @english
  Scenario: TC_039_1_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - ENG
    When I fill the form with values of test case 'case-1-ENG'
    Then expect the 'Citi' card have the following values
      | Special interest rate                  | Normal interest rate | Max. loan amount                                   | Max. term loan | Exit fee                                       | Type of loans      |
      | 15.99% - 25% per year (over the tenor) | -                    | Not over 1.5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Debt consolidation |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section
    Then expect message of 'title' select to be 'Thank you for completing our online application.'
    And expect message of 'subtitle' select to be 'Your information have been sent to the selected financial institutions and will be contacted within 1-3 business days. If you have any further questions, call 1438.'

  @english
  Scenario: TC_039_2_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - ENG
    When I fill the form with values of test case 'case-2-ENG'
    Then expect the 'Citi' card have the following values
      | Special interest rate                  | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 15.99% - 25% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Debt consolidation |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section

  @english
  Scenario: TC_039_3_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - ENG
    When I fill the form with values of test case 'case-3-ENG'
    Then expect the 'Citi' card have the following values
      | Special interest rate                  | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 15.99% - 25% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Debt consolidation |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section

  @english
  Scenario: TC_039_4_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - ENG
    When I fill the form with values of test case 'case-4-ENG'
    Then expect the 'Citi' card have the following values
      | Special interest rate                  | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 15.99% - 25% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Debt consolidation |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section

  @english
  Scenario: TC_039_5_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - ENG
    When I fill the form with values of test case 'case-5-ENG'
    Then expect the 'Citi' card have the following values
      | Special interest rate                  | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 15.99% - 25% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Debt consolidation |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section

  @thai
  Scenario: TC_040_1_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - THAI
    When I fill the form with values of test case 'case-1-THAI'
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ                 | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                       | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด               | ลักษณะสินเชื่อ |
      | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา) | -                 | ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน           | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | รวมหนี้        |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section
    Then expect message of 'title' select to be 'ขอบคุณที่ไว้วางใจในแรบบิทแคร์'
    And expect message of 'subtitle' select to be 'ข้อมูลของท่านได้ถูกส่งไปยังสถาบันการเงินที่คุณเลือก และจะได้รับการติดต่อกลับภายใน 1-3 วันทำการหากสงสัยเพิ่มเติม โทร.1438'

  @thai
  Scenario: TC_040_2_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - THAI
    When I fill the form with values of test case 'case-2-THAI'
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ                 | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                       | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด               | ลักษณะสินเชื่อ |
      | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา) | -                 | ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน           | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | รวมหนี้        |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section

  @thai
  Scenario: TC_040_3_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - THAI
    When I fill the form with values of test case 'case-3-THAI'
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ                 | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                     | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด               | ลักษณะสินเชื่อ |
      | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา) | -                 | ไม่เกิน 5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน           | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | รวมหนี้        |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section

  @thai
  Scenario: TC_040_4_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - THAI
    When I fill the form with values of test case 'case-4-THAI'
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ                 | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                     | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด               | ลักษณะสินเชื่อ |
      | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา) | -                 | ไม่เกิน 5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน           | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | รวมหนี้        |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section

  @thai
  Scenario: TC_040_5_CITIBANK_DEBT_CONSOLIDATE - Matched criteria - THAI
    When I fill the form with values of test case 'case-5-THAI'
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ                 | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                     | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด               | ลักษณะสินเชื่อ |
      | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา) | -                 | ไม่เกิน 5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน           | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | รวมหนี้        |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section

  @english
  Scenario: TC_041_1_CITIBANK_DEBT_CONSOLIDATE - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-1-Unmatched-ENG'
    Then expect the 'Citi' card have the following values
      | Special interest rate   | Normal interest rate                      | Max. loan amount                                   | Max. term loan | Exit fee                                      | Type of loans      |
      | -                       | 15.99% - 25% per year (over the tenor)   | Not over 1.5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Cash loan |
   
@english
  Scenario: TC_041_2_CITIBANK_DEBT_CONSOLIDATE - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-2-Unmatched-ENG'
    Then expect the 'citi' bank card to be 'You are not eligible for this bank'

 @english
  Scenario: TC_041_3_CITIBANK_DEBT_CONSOLIDATE - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-3-Unmatched-ENG'
    Then expect the 'citi' bank card to be 'You are not eligible for this bank'  
    
  @english
  Scenario: TC_041_4_CITIBANK_DEBT_CONSOLIDATE - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-4-Unmatched-ENG'
    Then expect the 'citi' bank card to be 'You are not eligible for this bank'  

  @thai
  Scenario: TC_042_1_CITIBANK_DEBT_CONSOLIDATE - Unmatched criteria - THAI
    When I fill the form with values of test case 'case-1-Unmatched-THAI'
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ   | อัตราดอกเบี้ยปกติ                    | วงเงินกู้สูงสุด                                  | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด            | ลักษณะสินเชื่อ  |
      | -                | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา)   | ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน         | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | สินเชื่อเงินสด  |
   
  @thai
  Scenario: TC_042_2_CITIBANK_DEBT_CONSOLIDATE - Unmatched criteria - THAI
    When I fill the form with values of test case 'case-2-Unmatched-THAI'
    Then expect the 'citi' bank card to be 'คุณสมบัติของคุณไม่เข้าเกณฑ์' 
