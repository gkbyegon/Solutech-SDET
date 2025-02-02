Feature: Tour Booking

  Scenario: Book a tour as a guest
    Given the user is on the home page
    When the user books a tour
    Then the booking confirmation should be displayed

  Scenario: Admin creates a new tour
    Given the admin is logged in
    When the admin adds a new tour
    Then the new tour should appear on the homepage

  Scenario: View all bookings
    Given the admin is logged in
    When the admin views all bookings
    Then a list of all bookings should be displayed

  Scenario: View all tickets
    Given the admin is logged in
    When the admin views all tickets
    Then a list of all tickets should be displayed
