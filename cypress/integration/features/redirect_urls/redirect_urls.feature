Feature: Tests for the redirect URLs

  This feature file the redirect urls from rebbitfinance to rebbitcare will be tested.

  JIRA Reference: QAA-147

  The URLs are defined in the following file:
  https://docs.google.com/spreadsheets/d/1DMrzCaCxsPQQghqTHGoprCsUs6QvPF_g63NEJpPnmZY/edit#gid=1509032198

      
    Scenario: TC_001_check redirect to RC URLs homepage
        When I access the old RF urls in homepage category then it should redirect to new RC urls

    Scenario: TC_002_check redirect to RC URLs in about-us
        When I access the old RF urls in about-us category then it should redirect to new RC urls
           

    Scenario: TC_003_check redirect to RC URLs in corporate-insurance
        When I access the old RF urls in corporate-insurance category then it should redirect to new RC urls


    Scenario: TC_004_check redirect to RC URLs in car-insurances
        When I access the old RF urls in car-insurances-brand category then it should redirect to new RC urls
        When I access the old RF urls in car-insurances-model category then it should redirect to new RC urls
        When I access the old RF urls in car-insurances-suppliers category then it should redirect to new RC urls   

    Scenario: TC_005_check redirect to RC URLs in motobike-insurances
        When I access the old RF urls in motorbike-insurance-brand category then it should redirect to new RC urls

    Scenario: TC_006_check redirect to RC URLs in por-ror-bor
        When I access the old RF urls in por-ror-bor category then it should redirect to new RC urls

    Scenario: TC_007_check redirect to RC URLs in cash-card
        When I access the old RF urls in cash-card category then it should redirect to new RC urls

    Scenario: TC_008_check redirect to RC URLs in credit-card
        When I access the old RF urls in credit-card category then it should redirect to new RC urls


    Scenario: TC_009_check redirect to RC URLs in loan
        When I access the old RF urls in loan category then it should redirect to new RC urls
        
    Scenario: TC_010_check redirect to RC URLs in health-insurence
        When I access the old RF urls in health-insurance category then it should redirect to new RC urls