Feature: Login functionality

  Scenario: User enters invalid credentials
    Given the user is on the login page
    When the user enters invalid credentials
    Then an error message should be displayed