  Feature: Login with invalid credetials
  As a user looking to explore tours,
  I want to book tours, create new tours, and manage bookings and tickets,
  So that I can easily plan my travel and track my bookings and tickets.
  
Scenario: User navigates to login page and enters invalid credentials
      Given the user navigates to the login page
      When the user enters invalid credentials
        | E-mai   | password   |
        | Test1@gmail.com | Iamgood@4 |
      And the user clicks on "Login"
      Then the system should display an error message saying "These credentials do not match our records."
      And the user should not be redirected to the ticket generation page
