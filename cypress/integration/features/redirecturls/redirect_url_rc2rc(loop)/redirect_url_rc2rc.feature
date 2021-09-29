Feature: Test for Rabbit Care can working

 JIRA Reference: QAA-008

 reference urls:
 https://docs.google.com/spreadsheets/d/1fCfQpTYCVTOHF78YlI_UAhkWDPrxPfjQnTEvGpjNQXg/edit#gid=0
  
  Scenario: Check urls Rabbit Care can working
    Given input Rabbit Care website 'RC_baseUrl'
    When noredirect from Rabbit Care website 'RC_baseUrl'
    Then expect displayed Rabbit Care website correctly 'RC_baseUrl'

  
 