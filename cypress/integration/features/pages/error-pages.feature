#Feature file with Gherkin scenario's

Feature: Test for the Error Pages

  This feature file the error pages will be tested

  Scenario: TC_001_ERROR-PAGE - Page not found 404
    When I navigate to an invalid url
    Then expect the '404' page to be visible
