// Importing necessary Cucumber functions
const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

// In-memory data storage for simplicity
let bookings = [];
let tours = [];
let currentBookingNumber = 1000;

// Step 1: Given the user is on the home page
Given('the user is on the home page', function () {
  // This represents the user navigating to the home page.
  // In a real app, this would trigger a UI action like a button click.
  console.log('User is on the home page');
});

// Step 2: When the user selects a tour and clicks on "Book Now"
When('the user selects a tour and clicks on "Book Now"', function () {
  // Simulate the user selecting a tour and initiating the booking process.
  // We are assuming that the selected tour is "Adventure Trip" with some data.
  this.selectedTour = {
    tourName: 'Adventure Trip',
    pricing: 500,
    availableSlots: 20
  };
  console.log('User selected the Adventure Trip tour');
});

// Step 3: When the user fills in the booking details as a guest
When('the user fills in the booking details as a guest', function (dataTable) {
  // Here we extract the booking details (name, email, phone, number of people)
  const bookingDetails = dataTable.rowsHash();
  
  // Save the booking details to `this.bookingDetails` for further use.
  this.bookingDetails = {
    name: bookingDetails.name,
    email: bookingDetails.email,
    phone: bookingDetails.phone,
    numberOfPeople: parseInt(bookingDetails.number_of_people, 10)
  };
  
  console.log('Booking details entered:', this.bookingDetails);
});

// Step 4: When the user selects the payment option and clicks on "Confirm Booking"
When('the user selects payment option and clicks on "Confirm Booking"', function () {
  // Here, we simulate confirming the booking by generating a unique booking number
  // and saving the booking information in memory.
  this.bookingNumber = ++currentBookingNumber;
  
  // Save the booking details, including a unique booking number.
  const booking = {
    bookingNumber: this.bookingNumber,
    tourName: this.selectedTour.tourName,
    name: this.bookingDetails.name,
    status: 'Confirmed',
    numberOfPeople: this.bookingDetails.numberOfPeople
  };
  
  // Add the booking to the bookings array
  bookings.push(booking);
  console.log(`Booking confirmed with booking number: ${this.bookingNumber}`);
});

// Step 5: Then the system should generate a booking for the user
Then('the system should generate a booking for the user', function () {
  // Assert that a booking has been created
  assert.strictEqual(bookings.length, 1, 'No booking was generated');
});

// Step 6: Then the user should receive a booking confirmation with booking details
Then('the user should receive a booking confirmation with booking details', function () {
  // Assert that the booking status is "Confirmed"
  const booking = bookings[0];
  assert.strictEqual(booking.status, 'Confirmed', 'Booking status should be confirmed');
  
  console.log('Booking confirmed:', booking);
});

// Step 7: Then the booking should include a unique booking number
Then('the booking should include a unique booking number', function () {
  // Ensure that the booking has a valid booking number
  assert.ok(this.bookingNumber, 'Booking number should be generated');
});

// Step 8: Then the user should be redirected to a "Thank You" page
Then('the user should be redirected to a "Thank You" page', function () {
  // Simulating the user being redirected after a successful booking.
  console.log('User is redirected to the Thank You page');
});
