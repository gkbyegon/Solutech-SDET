const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

Given('the user navigates to the login page', async function () {
  // Navigate to the login page
  await browser.url('http://127.0.0.1:8000/login'); // Replace with your login page URL
});

When('the user enters invalid credentials', async function () {
  // Find username and password fields and enter invalid credentials
  const usernameField = await $('#email'); // Selector for the username field
  const passwordField = await $('#password'); // Selector for the password field
  
  // Enter invalid credentials
  await usernameField.setValue('invalidUser');
  await passwordField.setValue('invalidPassword');
});

When('the user clicks on "Login"', async function () {
  // Click on the login button
  const loginButton = await $('#button[type="submit"]'); // Selector for the login button
  await loginButton.click();
});

Then('the system should display an error message saying {string}', async function (expectedErrorMessage) {
  // Get the error message displayed on the page
  const errorMessage = await $('#error-message'); // Selector for the error message element
  const actualErrorMessage = await errorMessage.getText();
  
  // Assert that the error message is as expected
  assert.strictEqual(actualErrorMessage, expectedErrorMessage, `Expected error message to be "${expectedErrorMessage}" but got "${actualErrorMessage}"`);
});
