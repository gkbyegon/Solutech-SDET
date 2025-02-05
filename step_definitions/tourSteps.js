// const { Given, When, Then } = require('@cucumber/cucumber');

// Given('the user navigates to the login page', function () {
//   browser.url('http://127.0.0.1:8000/');
// });
// // // Step Definitions for Login
// // Given('the user navigates to the login page', function () {
// //   browser.url('https://yourapp.com/login');
// // });
// // When('I enter invalid credentials', async () => {
// //   await loginPage.login('invalidUser', 'invalidPass');
// // });

// // Then('I should see an error message {string}', async (errorMessage) => {
// //   const message = await loginPage.getErrorMessage();
// //   expect(message).to.equal(errorMessage);
// // });

// // // Step Definitions for Tour Booking
// // Given('I am on the home page of {string}', async (url) => {
// //   await homePage.open(url);
// // });

// // When('I create a tour booking as a guest', async () => {
// //   await homePage.bookTourAsGuest('Paris', 2);
// // });

// // Then('I should see a confirmation message {string}', async (confirmationMessage) => {
// //   const message = await homePage.getConfirmationMessage();
// //   expect(message).to.equal(confirmationMessage);
// // });

// // // Step Definitions for Admin Panel
// // Given('I am on the admin panel', async () => {
// //   await adminPage.open();
// // });

// // When('I create a new tour with the following details:', async (dataTable) => {
// //   const tourDetails = dataTable.rowsHash();
// //   await adminPage.createTour(tourDetails.destination, tourDetails.description, tourDetails.price, tourDetails.slots);
// // });

// // Then('the tour should be available in the list of tours', async () => {
// //   const tourList = await adminPage.getTourList();
// //   expect(tourList).to.include('Paris');
// // });

// // // Step Definitions for Bookings and Tickets
// // Given('I am an authenticated user', async () => {
// //   await bookingPage.login('testUser', 'testPass');
// // });

// // When('I access the list of bookings', async () => {
// //   await bookingPage.viewBookings();
// // });

// // Then('I should see all the bookings made by users', async () => {
// //   const bookings = await bookingPage.getBookings();
// //   expect(bookings.length).to.be.greaterThan(0);
// // });

// // When('I access the list of tickets', async () => {
// //   await ticketPage.viewTickets();
// // });

// // Then('I should see all the tickets generated from bookings', async () => {
// //   const tickets = await ticketPage.getTickets();
// //   expect(tickets.length).to.be.greaterThan(0);
// // });

const { Given, When, Then } = require('@cucumber/cucumber');

// Given steps
Given('the user is on the home page', function () {
  // Navigate to the home page
  browser.url('http://127.0.0.1:8000/');
});

When('the user selects a tour and clicks on {string}', function (tourName) {
  // Simulate selecting a tour and clicking on "Book Tour"
  const tourElement = $(`#tour-${tourName}`);
  tourElement.click();
});

When('the user fills in the booking details as a guest', function (dataTable) {
  // Example of filling booking details
  const bookingDetails = dataTable.hashes()[0]; // Convert dataTable to an array of hashes
  $('#slots').setValue(bookingDetails['Please enter the number of slots you are booking.']);
  $('#name').setValue(bookingDetails['Please enter the ticket holder name.']);
  $('#email').setValue(bookingDetails['Email Address']);
  $('#total').setValue(bookingDetails['Total Ksh']);
});

When('the user clicks on {string}', function (buttonName) {
  // Simulate clicking a button (e.g., "Book Tour")
  const button = $(`#${buttonName}-button`);
  button.click();
});

// Then steps
Then('the system should generate a booking for the user', function () {
  // Verify if the booking was generated successfully
  const bookingConfirmation = $('#booking-confirmation');
  expect(bookingConfirmation).toExist();
});

Then('the user should receive a booking confirmation with booking details', function () {
  // Verify if the confirmation message contains booking details
  const confirmationMessage = $('#confirmation-message');
  expect(confirmationMessage).toContainText('Booking confirmed');
});

Then('the booking should include a unique Ticket Number', function () {
  // Verify if the booking has a unique ticket number
  const ticketNumber = $('#ticket-number');
  expect(ticketNumber).toExist();
  expect(ticketNumber.getText()).not.toBeNull();
});

Then('the user selects confirm option and clicks on {string}', function (confirmOption) {
  // Simulate selecting a confirm option and clicking "Done"
  const confirmButton = $(`#${confirmOption}-button`);
  confirmButton.click();
});

Then('the user should be redirected to a Landing page', function () {
  // Verify that the user is redirected to the Landing page
  const landingPageUrl = 'https://yourapp.com/landing';
  expect(browser.getUrl()).toBe(landingPageUrl);
});
