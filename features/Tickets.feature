# Feature: Generating Tickets for a User Seeking to Travel

#   As a user looking to travel
#   I want to be able to log in and generate a ticket
#   So that I can receive a valid travel ticket for my journey

#   Scenario: User navigates to login page and enters invalid credentials
#     # Given the user navigates to the login page
#     # When the user enters invalid credentials
#     #   | E-mai   | password   |
#     #   | Test1@gmail.com | Iamgood@4 |
#     # And the user clicks on "Login"
#     # Then the system should display an error message saying "These credentials do not match our records."
#     # And the user should not be redirected to the ticket generation page

# #   Scenario: User successfully logs in and generates a valid travel ticket
# #     Given the user is logged in with valid credentials
# #       | username   | password |
# #       | validUser  | correctPass |
# #     And the user navigates to the ticket booking page
# #     And the user enters valid travel details
# #       | departure_city | arrival_city | departure_date | return_date | passenger_name |
# #       | New York       | Los Angeles  | 2025-03-15     | 2025-03-20  | John Doe       |
# #     When the user clicks on "Generate Ticket"
# #     Then the system should generate a valid ticket for the user
# #     And the ticket should include the following details:
# #       | departure_city | arrival_city | departure_date | return_date | passenger_name |
# #       | New York       | Los Angeles  | 2025-03-15     | 2025-03-20  | John Doe       |
# #     And the ticket should have a unique ticket number
# #     And the ticket should display a QR code for easy access
