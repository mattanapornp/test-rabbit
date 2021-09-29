Feature: Test for redirect url for RF to RC

 JIRA Reference: QAA-008

 reference urls:
 https://docs.google.com/spreadsheets/d/1fCfQpTYCVTOHF78YlI_UAhkWDPrxPfjQnTEvGpjNQXg/edit#gid=0
  
  Scenario: Check Redirect urls from Rabbit Finance to Rabbit Care
    Given input Rabbit Finnance website 'RF_baseUrl'
    When redirect from Rabbit Finnance website 'RF_baseUrl'
    Then expect redirect to Rabbit Care website correctly point 'RC_baseUrl'

  