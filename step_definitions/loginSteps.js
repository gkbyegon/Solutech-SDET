const { Given, When, Then } = require('@cucumber/cucumber');
const loginPage = require('../page_objects/loginPage');
const homePage = require('../page_objects/homePage');
const adminPage = require('../page_objects/adminPage');

Given('the user is on the login page', async () => {
  await loginPage.visit();
});

When('the user enters invalid credentials', async () => {
  await loginPage.enterCredentials('invalidUser', 'invalidPass');
  await loginPage.submit();
});

Then('an error message should be displayed', async () => {
  const message = await loginPage.getErrorMessage();
  expect(message).toBe('Invalid credentials');
});

// Tour Booking Scenario
Given('the user is on the home page', async () => {
  await homePage.visit();
});

When('the user books a tour', async () => {
  await homePage.bookTour();
});

Then('the booking confirmation should be displayed', async () => {
  const confirmationMessage = await homePage.getBookingConfirmation();
  expect(confirmationMessage).toBe('Your booking was successful!');
});
