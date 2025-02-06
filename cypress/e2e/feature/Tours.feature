Feature: Tour Booking and Management

  As a user looking to explore tours,
  I want to book tours, create new tours, and manage bookings and tickets,
  So that I can easily plan my travel and track my bookings and tickets.

  Scenario: Book Tour as Guest
    Given the user is on the home page
    When the user selects a tour and clicks on "Book Tour"
    And the user fills in the booking details as a guest
      | Please enter the number of slots you are booking.|Please enter the ticket holder name.| Email Address      | Total Ksh |
      | 1                                                | Gilbert Byegon                     | gilbyegon@gmail.com| 869.36    |
    And the user clicks on "Book Tour"
    Then the system should generate a booking for the user
    And the user should receive a booking confirmation with booking details
    And the booking should include a unique Ticket Number
    And the user selects confirm option and clicks on "Done"
    And the user should be redirected to a Landing page

  Scenario: Create Tours
    Given the user is logged in as an admin
    And the user clicks "Tours" page
    And the user clicks "Create Tour" page
    When the user enters the tour details
      | Tour name      | Description  | Choose Destination | Price per slot | Slots Available   |
      | Maasai Mara | Seven wonders   | Bali               | 999            |5                  |
    And the user clicks on "Submit"
    Then the system should create the tour successfully
    And the new tour should appear in the list of available tours
    And the available slots should be shown as 5
    And the pricing should be shown as Ksh. 999

  Scenario: View All Bookings
    Given the user is logged in as an admin
    When the user navigates to the "Bookings" page
    Then the system should display a list of all bookings made by users
    And each booking should include:
      | Booked By | Tour Name      | Status	|Ticket Number | Created At|
      | Byegon    |Odit quidem et. |pending |TCKT1738330200| 31 Jan 2025 01:30 pm  |
      | 1         |Odit quidem et. | pending|TCKT1738323436| Jan 31, 2025 11:37 am   |

  Scenario: View All Tickets
    Given the user is logged in as an admin
    When the user navigates to the "View All Tickets" page
    Then the system should display a list of all tickets generated from bookings
    And each ticket should include:
      | Ticket Holder Name | Ticket Email Addres | Ticket Number | Created At | 
      | Byegon             | ggb167@gmail.com    | TCKT1738330200| 31 Jan 2025 01:30 pm  | 
      | 1                  | isaiah@gmail.com    | TCKT1738323436| Jan 31, 2025 11:37 am | 
    And each ticket should have a unique ticket number

