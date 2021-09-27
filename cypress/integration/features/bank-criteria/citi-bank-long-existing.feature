Feature: Tests for the Citibank long existing criteria

  This feature file the Citibank long existing criteria will be tested.

  JIRA Reference: QAA-264 and QAA-265

  The test cases are defined in the following file:
  https://docs.google.com/spreadsheets/d/1YfZb_A1ChA_u8VxcVLdQrHDNlStNrlwJayhMiCLKRwM/edit#gid=979496642

  @english
  Scenario: TC_043_1_CITIBANK_LONG_EXISTING - Matched criteria - ENG
    When I fill the form with values of test case 'case-1-ENG'
    And I select the value 'Citibank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Bangkok' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'Citi' card have the following values
      | Special interest rate                    | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 9.99% - 20.99% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Cash loan          |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section
    Then expect message of 'title' select to be 'Thank you for completing our online application.'
    And expect message of 'subtitle' select to be 'Your information have been sent to the selected financial institutions and will be contacted within 1-3 business days. If you have any further questions, call 1438.'

  @english
  Scenario: TC_043_2_CITIBANK_LONG_EXISTING - Matched criteria - ENG
    When I fill the form with values of test case 'case-2-ENG'
    And I select the value 'Citibank'
    And I select the value 'United Overseas Bank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Samut Prakan' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'Citi' card have the following values
      | Special interest rate                    | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 9.99% - 20.99% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Cash loan          |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section

  @english
  Scenario: TC_043_3_CITIBANK_LONG_EXISTING - Matched criteria - ENG
    When I fill the form with values of test case 'case-3-ENG'
    And I select the value 'Citibank'
    And I select the value 'United Overseas Bank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Lop Buri' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'Citi' card have the following values
      | Special interest rate                    | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 9.99% - 20.99% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Cash loan          |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section

  @english
  Scenario: TC_043_4_CITIBANK_LONG_EXISTING - Matched criteria - ENG
    When I fill the form with values of test case 'case-4-ENG'
    And I select the value 'Citibank'
    And I select the value 'United Overseas Bank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Phuket' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'Citi' card have the following values
      | Special interest rate                    | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 9.99% - 20.99% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Cash loan          |
    When I select 'citi' bank
    And I click the button 'Next' in section 'customer_banks'
    Then expect the choices to be 'Yes' and 'No'
    When I click 'Yes' in citi loan section
    When I click 'Consent' and 'PROCEED' in 'tc' section

  @thai
  Scenario: TC_044_1_CITIBANK_LONG_EXISTING - Matched criteria - THAI
    When I fill the form with values of test case 'case-1-THAI'
    And I select the value 'ธนาคารซิตี้แบงก์'
    And I click the button 'ถัดไป' in section 'customer_banks_loan'
    When I select option 'กรุงเทพมหานคร' at select 'province'
    When I type 'เทส' at the 'name' field
    And I type 'การทดสอบ' at the 'surname' field
    And I click the button 'ถัดไป' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'ถัดไป' in section 'phone'
    Then expect the 'Citi' card have the following values
     | อัตราดอกเบี้ยพิเศษ                   | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด            | ลักษณะสินเชื่อ |
     | 9.99% - 20.99% ต่อปี (ตลอดอายุสัญญา) | -             | ไม่เกิน 5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน         | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | สินเชื่อเงินสด |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section
    Then expect message of 'title' select to be 'ขอบคุณที่ไว้วางใจในแรบบิทแคร์'
    And expect message of 'subtitle' select to be 'ข้อมูลของท่านได้ถูกส่งไปยังสถาบันการเงินที่คุณเลือก และจะได้รับการติดต่อกลับภายใน 1-3 วันทำการหากสงสัยเพิ่มเติม โทร.1438'

 @thai
  Scenario: TC_044_2_CITIBANK_LONG_EXISTING - Matched criteria - THAI
    When I fill the form with values of test case 'case-2-THAI'
    And I select the value 'ธนาคารซิตี้แบงก์'
    And I select the value 'ธนาคารยูโอบี'
    And I click the button 'ถัดไป' in section 'customer_banks_loan'
    When I select option 'ขอนแก่น' at select 'province'
    When I type 'เทส' at the 'name' field
    And I type 'การทดสอบ' at the 'surname' field
    And I click the button 'ถัดไป' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'ถัดไป' in section 'phone'
    Then expect the 'Citi' card have the following values
     | อัตราดอกเบี้ยพิเศษ                   | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด            | ลักษณะสินเชื่อ |
     | 9.99% - 20.99% ต่อปี (ตลอดอายุสัญญา) | -             | ไม่เกิน 5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน         | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | สินเชื่อเงินสด |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section

  @thai
  Scenario: TC_044_3_CITIBANK_LONG_EXISTING - Matched criteria - THAI
    When I fill the form with values of test case 'case-3-THAI'
    And I select the value 'ธนาคารซิตี้แบงก์'
    And I select the value 'ธนาคารแลนด์ แอนด์ เฮ้าส์'
    And I click the button 'ถัดไป' in section 'customer_banks_loan'
    When I select option 'ภูเก็ต' at select 'province'
    When I type 'เทส' at the 'name' field
    And I type 'การทดสอบ' at the 'surname' field
    And I click the button 'ถัดไป' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'ถัดไป' in section 'phone'
    Then expect the 'Citi' card have the following values
     | อัตราดอกเบี้ยพิเศษ                   | อัตราดอกเบี้ยปกติ | วงเงินกู้สูงสุด                                | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด            | ลักษณะสินเชื่อ |
     | 9.99% - 20.99% ต่อปี (ตลอดอายุสัญญา) | -             | ไม่เกิน 5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน         | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | สินเชื่อเงินสด |
    When I select 'citi' bank
    And I click the button 'ถัดไป' in section 'customer_banks'
    Then expect the choices to be 'ใช่' and 'ไม่ใช่'
    When I click 'ใช่' in citi loan section
    When I click 'ฉันยินยอม' and 'ดำเนินการ' in 'tc' section

  @english
  Scenario: TC_045_1_CITIBANK_LONG_EXISTING - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-1-Unmatched-ENG'
    And I select the value 'Citibank'
    And I select the value 'LH Bank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Bangkok' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'Citi' card have the following values
      | Special interest rate                  | Normal interest rate | Max. loan amount                                 | Max. term loan | Exit fee                                       | Type of loans      |
      | 15.99% - 25% per year (over the tenor) | -                    | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Debt consolidation |


  @english
  Scenario: TC_045_2_CITIBANK_LONG_EXISTING - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-2-Unmatched-ENG'
    And I select the value 'Citibank'
    And I select the value 'United Overseas Bank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Bangkok' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'citi' bank card to be 'You are not eligible for this bank'  

 @english
  Scenario: TC_045_3_CITIBANK_LONG_EXISTING - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-3-Unmatched-ENG'
    And I select the value 'Citibank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Bangkok' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'Citi' card have the following values
      | Special interest rate | Normal interest rate                          |  Max. loan amount                                | Max. term loan | Exit fee                                       | Type of loans    |
      | -                     | 15.99% - 25% per year (over the tenor)        | Not over 5 times of average monthly income or 2M | 60 months      | 5% of the outstanding (if exit before 2 years) | Cash loan        |
   
  @english
  Scenario: TC_045_4_CITIBANK_LONG_EXISTING - Unmatched criteria - ENG
    When I fill the form with values of test case 'case-4-Unmatched-ENG'
    And I select the value 'Citibank'
    And I click the button 'Next' in section 'customer_banks_loan'
    When I select option 'Bangkok' at select 'province'
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    And I click the button 'Next' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'Next' in section 'phone'
    Then expect the 'citi' bank card to be 'You are not eligible for this bank'     

  @thai
  Scenario: TC_046_1_CITIBANK_LONG_EXISTING - Unmatched criteria - THAI
    When I fill the form with values of test case 'case-1-Unmatched-THAI'
    And I select the value 'ธนาคารซิตี้แบงก์'
    And I click the button 'ถัดไป' in section 'customer_banks_loan'
    When I select option 'กรุงเทพมหานคร' at select 'province'
    When I type 'เทส' at the 'name' field
    And I type 'การทดสอบ' at the 'surname' field
    And I click the button 'ถัดไป' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'ถัดไป' in section 'phone'  
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ   | อัตราดอกเบี้ยปกติ                    | วงเงินกู้สูงสุด                                  | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด            | ลักษณะสินเชื่อ  |
      | -                | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา)   |ไม่เกิน 1.5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท  | 60 เดือน         | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | สินเชื่อเงินสด  |
   
  @thai
  Scenario: TC_046_2_CITIBANK_LONG_EXISTING - Unmatched criteria - THAI
    When I fill the form with values of test case 'case-2-Unmatched-THAI'
    And I select the value 'ธนาคารซิตี้แบงก์'
    And I select the value 'ธนาคารยูโอบี'
    And I click the button 'ถัดไป' in section 'customer_banks_loan'
    When I select option 'สมุทรปราการ' at select 'province'
    When I type 'เทส' at the 'name' field
    And I type 'การทดสอบ' at the 'surname' field
    And I click the button 'ถัดไป' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'ถัดไป' in section 'phone'  
    Then expect the 'citi' bank card to be 'คุณสมบัติของคุณไม่เข้าเกณฑ์'

  @thai
  Scenario: TC_046_3_CITIBANK_LONG_EXISTING - Unmatched criteria - THAI
    When I fill the form with values of test case 'case-3-Unmatched-THAI'
    And I select the value 'ธนาคารกรุงศรีอยุธยา'
    And I click the button 'ถัดไป' in section 'customer_banks_loan'
    When I select option 'สมุทรปราการ' at select 'province'
    When I type 'เทส' at the 'name' field
    And I type 'การทดสอบ' at the 'surname' field
    And I click the button 'ถัดไป' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'ถัดไป' in section 'phone'    
    Then expect the 'Citi' card have the following values
      | อัตราดอกเบี้ยพิเศษ   | อัตราดอกเบี้ยปกติ                    | วงเงินกู้สูงสุด                                  | ระยะเวลาผ่อนสูงสุด | ค่าธรรมเนียมปิดสินเชื่อก่อนกำหนด            | ลักษณะสินเชื่อ  |
      | -                | 15.99% - 25% ต่อปี (ตลอดอายุสัญญา)   |ไม่เกิน 5 เท่าของรายได้เฉลี่ยต่อเดือนหรือ 2 ล้านบาท | 60 เดือน         | 5% ของเงินต้นคงเหลือ (ถ้าปิดสินเชื่อก่อน 2 ปี) | สินเชื่อเงินสด  |
   
  @thai
  Scenario: TC_046_4_CITIBANK_LONG_EXISTING - Unmatched criteria - THAI
    When I fill the form with values of test case 'case-4-Unmatched-THAI'
    And I select the value 'ธนาคารซิตี้แบงก์'
    And I select the value 'ธนาคารแลนด์ แอนด์ เฮ้าส์'
    And I click the button 'ถัดไป' in section 'customer_banks_loan'
    When I select option 'สมุทรปราการ' at select 'province'
    When I type 'เทส' at the 'name' field
    And I type 'การทดสอบ' at the 'surname' field
    And I click the button 'ถัดไป' in section 'name'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    And I click the button 'ถัดไป' in section 'phone'    
    Then expect the 'citi' bank card to be 'คุณสมบัติของคุณไม่เข้าเกณฑ์'