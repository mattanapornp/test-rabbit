Feature: Test for the Question page

  In this feature all the fields of the question page will be tested. For all fields the question will be validated.
  If there is a select field, both the options and the default option will be validated.
  Furthermore, for the text input fields the validations will be checked.

  JIRA Reference: QAA-276

  The testcases are defined in the following file:
  https://docs.google.com/spreadsheets/d/1YfZb_A1ChA_u8VxcVLdQrHDNlStNrlwJayhMiCLKRwM/edit#gid=0

  Background: Testing
    Given I intercept the post request

  @english
  Scenario: TC_001_QUESTION_PAGE - purpose field - ENG
    Then expect options of 'purpose' select to be correct in 'english'
    And expect question of 'purpose' select to be 'Please state your loan request purpose'
    And expect default option of 'purpose' to be 'Select loan request purpose'

  @thai
  Scenario: TC_002_QUESTION_PAGE - purpose field - THAI
    Then expect options of 'purpose' select to be correct in 'thai'
    And expect question of 'purpose' select to be 'จุดประสงค์ในการขอกู้'
    And expect default option of 'purpose' to be 'เลือกจุดประสงค์ในการขอกู้'

  @english
  Scenario: TC_003_QUESTION_PAGE - howlong field - ENG
    Given the form is filled until 'howlong' in 'english'
    Then expect options of 'howlong' select to be correct in 'english'
    And expect question of 'howlong' select to be 'How long would you like to repay the debt?'
    And expect default option of 'howlong' to be 'Select period'

  @thai
  Scenario: TC_004_QUESTION_PAGE - howlong field - THAI
    Given the form is filled until 'howlong' in 'thai'
    Then expect options of 'howlong' select to be correct in 'thai'
    And expect question of 'howlong' select to be 'ระยะเวลาที่คุณประสงค์ขอกู้'
    And expect default option of 'howlong' to be 'เลือกระยะเวลาที่ประสงค์จะกู้'

  @english
  Scenario: TC_005_QUESTION_PAGE - income field - ENG
    Given the form is filled until 'income' in 'english'
    Then expect options of 'income' select to be correct in 'english'
    And expect question of 'income' select to be 'What is your income shown in slip?'
    And expect default option of 'income' to be 'Select your income'

  @thai
  Scenario: TC_006_QUESTION_PAGE - income field - THAI
    Given the form is filled until 'income' in 'thai'
    Then expect options of 'income' select to be correct in 'thai'
    And expect question of 'income' select to be 'ฐานเงินเดือนของคุณ'
    And expect default option of 'income' to be 'เลือกฐานเงินเดือนของคุณ'

  @english
  Scenario: TC_007_QUESTION_PAGE - hmloan field - ENG
    Given the form is filled until 'income' in 'english'
    When I select option 'Less than THB 15,000' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'visible'

    When I select option 'THB 15,000 - 19,999' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'visible'

    When I select option 'THB 20,000 - 29,999' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'visible'

    Then expect options of 'hmloan' select to be correct in 'english'
    And expect question of 'hmloan' select to be 'How many loans do you have at the moment?'
    And expect default option of 'hmloan' to be 'Select loan amount'

    When I select option 'THB 30,000 - 39,999' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option 'THB 40,000 - 49,999' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option 'THB 50,000 - 59,999' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option 'THB 60,000 - 100,000' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option 'THB 100,001 - 199,999' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option 'More than THB 200,000' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

  @thai
  Scenario: TC_008_QUESTION_PAGE - hmloan field - THAI
    Given the form is filled until 'income' in 'thai'
    When I select option 'น้อยกว่า 15,000 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'visible'

    When I select option '15,000 - 19,999 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'visible'

    When I select option '20,000 - 29,999 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'visible'

    Then expect options of 'hmloan' select to be correct in 'thai'
    And expect question of 'hmloan' select to be 'คุณมีสินเชื่ออยู่กี่รายการในขณะนี้'
    And expect default option of 'hmloan' to be 'เลือกจำนวนสินเชื่อ'

    When I select option '30,000 - 39,999 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option '40,000 - 49,999 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option '50,000 - 59,999 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option '60,000 - 100,000 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option '100,001 - 199,999 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

    When I select option 'มากกว่า 200,000 บาท' at select 'income'
    Then expect 'select' with text 'hmloan' to be 'not.visible'

  @english
  Scenario: TC_009_QUESTION_PAGE - occupation field - ENG
    Given the form is filled until 'occupation' in 'english'
    Then expect options of 'occupation' select to be correct in 'english'
    And expect question of 'occupation' select to be 'What is your occupation?'
    And expect default option of 'occupation' to be 'Select your occupation'

  @thai
  Scenario: TC_010_QUESTION_PAGE - occupation field - THAI
    Given the form is filled until 'occupation' in 'thai'
    Then expect options of 'occupation' select to be correct in 'thai'
    And expect question of 'occupation' select to be 'อาชีพของคุณ'
    And expect default option of 'occupation' to be 'เลือกอาชีพของคุณ'

  @english
  Scenario: TC_0011_QUESTION_PAGE - experience field - ENG
    Given the form is filled until 'occupation' in 'english'
    When I select option 'Full-time employee' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'
    And expect options of 'experience' select to be correct in 'english'
    And expect question of 'experience' select to be 'How long have you been working at your current job?'
    And expect default option of 'experience' to be 'Select period'

    When I select option 'Officer with commission' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Temporary employee' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Government officer/Public servant' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Business owner - no company registered' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Online seller - no company registered' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Freelancer' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Housewife' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Military/Police' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'Other (include worker)' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

  @thai
  Scenario: TC_0012_QUESTION_PAGE - experience field - THAI
    Given the form is filled until 'occupation' in 'thai'
    When I select option 'พนักงานเอกชน (ประจำ)' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'
    And expect options of 'experience' select to be correct in 'thai'
    And expect question of 'experience' select to be 'อายุงานปัจจุบันของคุณ'
    And expect default option of 'experience' to be 'เลือกอายุงานปัจจุบัน'

    When I select option 'ผู้มีรายได้หลักจากคอมมิชชั่น' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'ลูกจ้างชั่วคราว' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'ราชการ/รัฐวิสาหกิจ' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'เจ้าของกิจการ - ไม่มีทะเบียนการค้า' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'ขายของออนไลน์และไม่ได้จดทะเบียนการค้า' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'อาชีพอิสระ' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'แม่บ้าน' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'ทหาร/ตำราจ' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

    When I select option 'อื่นๆ (รวมลูกจ้างทั่วไป)' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'visible'

  @english
  Scenario: TC_0013_QUESTION_PAGE - experience field - ENG
    Given the form is filled until 'occupation' in 'english'
    When I select option 'Business owner - company registered' at select 'occupation'
    Then expect 'select' with text 'registered' to be 'visible'
    And expect options of 'registered' select equal to 'Select period, Less than a year, More than a year but less than 2 years, More than 2 years'
    And expect question of 'registered' select to be 'How long have your company been registered?'
    And expect default option of 'registered' to be 'Select period'

  @thai
  Scenario: TC_0014_QUESTION_PAGE - experience field - THAI
    Given the form is filled until 'occupation' in 'thai'
    When I select option 'เจ้าของกิจการ - มีทะเบียนการค้า' at select 'occupation'
    Then expect 'select' with text 'registered' to be 'visible'
    And expect options of 'registered' select equal to 'เลือกระยะเวลา, จดทะเบียนบริษัทน้อยกว่า 1 ปี, จดทะเบียนบริษัทตั้งแต่ 1 ปีขึ้นไป (แต่ไม่เกิน 2 ปี), จดทะเบียนบริษัทตั้งแต่ 2 ปีขึ้นไป'
    And expect question of 'registered' select to be 'บริษัทของคุณจดทะเบียนมานานเท่าไหร่แล้ว'
    And expect default option of 'registered' to be 'เลือกระยะเวลา'

  @english
  Scenario: TC_0015_QUESTION_PAGE - experience field - ENG
    Given the form is filled until 'occupation' in 'english'
    When I select option 'Unemployed' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'not.visible'

  @thai
  Scenario: TC_0016_QUESTION_PAGE - experience field - THAI
    Given the form is filled until 'occupation' in 'thai'
    When I select option 'ไม่มีอาชีพ' at select 'occupation'
    Then expect 'select' with text 'experience' to be 'not.visible'

  @english
  Scenario: TC_0017_QUESTION_PAGE - customer_banks_loan field - ENG
    Given the form is filled until 'customer_banks_loan' in 'english'
    And expect options of 'customer_banks_loan' select to be correct in 'english'
    And expect question of 'customer_banks_loan' select to be 'Are you already a customers of one of these banks?'
    When I select the value 'TMBThanachart Bank'
    And I select the value 'Kiatnakin Phatra Bank'
    And I select the value 'Citibank'
    And I select the value 'Siam Commercial Bank'
    Then expect following fields to be 'checked'
      | field name            |
      | TMBThanachart Bank    |
      | Kiatnakin Phatra Bank |
      | Citibank              |
      | Siam Commercial Bank  |
    When I select the value "No, I don't"
    Then expect following fields to be 'unchecked'
      | field name            |
      | TMBThanachart Bank    |
      | Kiatnakin Phatra Bank |
      | Citibank              |
      | Siam Commercial Bank  |
    And expect following fields to be 'checked'
      | field name  |
      | No, I don't |
    And expect button 'Next' in section 'customer_banks_loan' to be 'enabled'

  @thai
  Scenario: TC_0018_QUESTION_PAGE - customer_banks_loan field - THAI
    Given the form is filled until 'customer_banks_loan' in 'thai'
    And expect options of 'customer_banks_loan' select to be correct in 'thai'
    And expect question of 'customer_banks_loan' select to be 'แบงค์ใดต่อไปนี้ที่คุณเป็นลูกค้าอยู่'
    When I select the value 'ธนาคารทหารไทยธนชาต'
    And I select the value 'ธนาคารเกียรตินาคินภัทร'
    And I select the value 'ธนาคารซิตี้แบงก์'
    And I select the value 'ธนาคารไทยพาณิชย์'
    Then expect following fields to be 'checked'
      | field name             |
      | ธนาคารทหารไทยธนชาต     |
      | ธนาคารเกียรตินาคินภัทร |
      | ธนาคารซิตี้แบงก์       |
      | ธนาคารไทยพาณิชย์       |
    When I select the value "ไม่ใช่"
    Then expect following fields to be 'unchecked'
      | field name             |
      | ธนาคารทหารไทยธนชาต     |
      | ธนาคารเกียรตินาคินภัทร |
      | ธนาคารซิตี้แบงก์       |
      | ธนาคารไทยพาณิชย์       |
    And expect following fields to be 'checked'
      | field name |
      | ไม่ใช่     |
    And expect button 'ถัดไป' in section 'customer_banks_loan' to be 'enabled'

  @english
  Scenario: TC_0019_QUESTION_PAGE - province field - ENG
    Given the form is filled until 'province' in 'english'
    Then expect options of 'province' select to be correct in 'english'
    And expect question of 'province' select to be 'Please select your province'
    And expect default option of 'province' to be 'Select other provinces'
    When I select option 'Kalasin' at select 'province'
    Then expect 'input' with text 'name' to be 'visible'
    Then expect 'input' with text 'surname' to be 'visible'

  @thai
  Scenario: TC_0020_QUESTION_PAGE - province field - THAI
    Given the form is filled until 'province' in 'thai'
    Then expect options of 'province' select to be correct in 'thai'
    And expect question of 'province' select to be 'ระบุจังหวัดของคุณ'
    And expect default option of 'province' to be 'เลือกจังหวัดอื่น ๆ'
    When I select option 'ลำปาง' at select 'province'
    Then expect 'input' with text 'name' to be 'visible'
    Then expect 'input' with text 'surname' to be 'visible'

  @english
  Scenario: TC_0021_QUESTION_PAGE - name and surname field - ENG
    Given the form is filled until 'name' in 'english'
    Then expect question of 'name' select to be 'What is your first name? '
    And expect question of 'surname' select to be 'What is your last name? '
    When I type 'Cypress' at the 'name' field
    And I type 'Test' at the 'surname' field
    Then expect button 'Next' in section 'name' to be 'enabled'

  @thai
  Scenario: TC_0022_QUESTION_PAGE - name and surname field - THAI
    Given the form is filled until 'name' in 'thai'
    Then expect question of 'name' select to be 'ระบุชื่อจริงของคุณ (ภาษาไทย)'
    And expect question of 'surname' select to be 'ระบุนามสกุลของคุณ (ภาษาไทย)'
    When I type 'มีเดียร์' at the 'name' field
    And I type 'คิวเอ' at the 'surname' field
    Then expect button 'ถัดไป' in section 'name' to be 'enabled'

  @english
  Scenario: TC_0023_QUESTION_PAGE - name and surname field - ENG
    Given the form is filled until 'name' in 'english'
    When I type '12345689' at the 'name' field
    And I type '12345689' at the 'surname' field
    Then expect button 'Next' in section 'name' to be 'disabled'
    Then expect error message 'Please enter a valid name' is displayed at 'name' field
    Then expect error message 'Please enter a valid name' is displayed at 'surname' field

    When I type '' at the 'name' field
    And I type '' at the 'surname' field
    Then expect error message 'This field is required.' is displayed at 'name' field
    Then expect error message 'This field is required.' is displayed at 'surname' field
    Then expect button 'Next' in section 'name' to be 'disabled'

  @thai
  Scenario: TC_0024_QUESTION_PAGE - name and surname field - THAI
    Given the form is filled until 'name' in 'thai'
    When I type '12345689' at the 'name' field
    And I type '12345689' at the 'surname' field
    Then expect button 'ถัดไป' in section 'name' to be 'disabled'
    Then expect error message 'โปรดระบุชื่อที่ถูกต้อง' is displayed at 'name' field
    Then expect error message 'โปรดระบุชื่อที่ถูกต้อง' is displayed at 'surname' field

    When I type '' at the 'name' field
    And I type '' at the 'surname' field
    Then expect error message 'กรุณากรอกข้อมูลในช่องนี้' is displayed at 'name' field
    Then expect error message 'กรุณากรอกข้อมูลในช่องนี้' is displayed at 'surname' field
    Then expect button 'ถัดไป' in section 'name' to be 'disabled'

  @english
  Scenario: TC_0025_QUESTION_PAGE - phone and email field - ENG
    Given the form is filled until 'phone' in 'english'
    Then expect question of 'name' select to be 'What is your first name? '
    And expect question of 'surname' select to be 'What is your last name? '
    And expect the 'phone' field to have value 'Example: 086-000-0000'
    And expect the 'email' field to have value 'Ex: example@gmail.com'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    Then expect button 'Next' in section 'name' to be 'enabled'

  @thai
  Scenario: TC_0026_QUESTION_PAGE - phone and email field - THAI
    Given the form is filled until 'phone' in 'thai'
    Then expect question of 'name' select to be 'ระบุชื่อจริงของคุณ (ภาษาไทย)'
    And expect question of 'surname' select to be 'ระบุนามสกุลของคุณ (ภาษาไทย)'
    And expect the 'phone' field to have value 'ตัวอย่าง: 086-000-0000'
    And expect the 'email' field to have value 'ตย: example@gmail.com'
    When I type '0999999999' at the 'phone' field
    And I type 'cypres@test.co.th' at the 'email' field
    Then expect button 'ถัดไป' in section 'name' to be 'enabled'

  @english
  Scenario: TC_0027_QUESTION_PAGE - phone and email field - ENG
    Given the form is filled until 'phone' in 'english'
    When I type '12345689' at the 'phone' field
    And I type '12345689' at the 'email' field
    Then expect button 'Next' in section 'phone' to be 'disabled'
    Then expect error message 'Please enter a valid phone number' is displayed at 'phone' field
    Then expect error message 'Please enter a valid email address' is displayed at 'email' field

    When I type '' at the 'phone' field
    And I type '' at the 'email' field
    Then expect error message 'This field is required.' is displayed at 'phone' field
    Then expect error message 'This field is required.' is displayed at 'email' field
    Then expect button 'Next' in section 'phone' to be 'disabled'

  @thai
  Scenario: TC_0028_QUESTION_PAGE - phone and email field - THAI
    Given the form is filled until 'phone' in 'thai'
    When I type '12345689' at the 'phone' field
    And I type '12345689' at the 'email' field
    Then expect button 'ถัดไป' in section 'phone' to be 'disabled'
    Then expect error message 'โปรดกรอกเบอร์โทรศัพท์ที่ถูกต้อง' is displayed at 'phone' field
    Then expect error message 'โปรดกรอกอีเมลที่ถูกต้อง' is displayed at 'email' field

    When I type '' at the 'phone' field
    And I type '' at the 'email' field
    Then expect error message 'กรุณากรอกข้อมูลในช่องนี้' is displayed at 'phone' field
    Then expect error message 'กรุณากรอกข้อมูลในช่องนี้' is displayed at 'email' field
    Then expect button 'ถัดไป' in section 'phone' to be 'disabled'
