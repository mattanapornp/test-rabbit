Feature: Test for redirect url for RF to RC

  JIRA Reference: QAA-008

 reference urls:
 https://docs.google.com/spreadsheets/d/1fCfQpTYCVTOHF78YlI_UAhkWDPrxPfjQnTEvGpjNQXg/edit#gid=0

  Background: Testing
    Given I intercept the post request

  
  Scenario: TC_001
    Given input Rabbit Finnance website 'RF_paths'
    When redirect from Rabbit Finnance website 'RF_paths'
    Then expect redirect to Rabbit Care website correctly point 'RC_paths'

  
