// Find the form
var enquiryForm = document.querySelector('#enquiry');

// get references to the input fields
	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message");
	var emailInput = document.querySelector("#email");
	var emailMessage = document.querySelector("#email-message");
	var phoneInput = document.querySelector("#phone");
	var phoneMessage = document.querySelector("#phone-message");
	var depDateInput = document.querySelector("#dep-date");
	var depDateMessage = document.querySelector("#dep-date-message");
	var depTimeInput = document.querySelector("#dep-time");
	var depTimeMessage = document.querySelector("#dep-time-message");
	var passengersInput = document.querySelector("#passengers")
	var passengersMessage = document.querySelector("#passengers-message")
	var packageInput = document.querySelector("#package")
	var packageMessage = document.querySelector("#packageMessage")










	var messageInput = document.querySelector('#comments');
	var messageMessage = document.querySelector('#message-message')

// Listen for the blur event on full-name inout field
nameInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 3 ) {
		nameMessage.innerHTML = 'Name must be at least 3 characters';

	} else if ( this.value.length > 50 ) {
		nameMessage.innerHTML = 'Name must be at most 50 characters';

	} else if ( namePattern.test( this.value ) ) {

		nameMessage.innerHTML = '';

	} else {

		nameMessage.innerHTML = 'Invalid name'
	}

}


emailInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 5 ) {
		emailMessage.innerHTML = 'Email must be at least 5 characters';

	} else if ( this.value.length > 50 ) {
		emailMessage.innerHTML = 'Email must be at most 50 characters';

	} else if ( emailPattern.test( this.value ) ) {

		emailMessage.innerHTML = '';

	} else {

		emailMessage.innerHTML = 'Invalid email address'
	}

}


phoneInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 7 ) {
		phoneMessage.innerHTML = 'Phone must be at least 7 characters';

	} else if ( this.value.length > 25 ) {
		phoneMessage.innerHTML = 'Phone must be at most 25 characters';

	} else if ( phonePattern.test( this.value ) ) {

		phoneMessage.innerHTML = '';

	} else {

		phoneMessage.innerHTML = 'Invalid number';
	}

}

depDateInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 10 ) {
		depDateMessage.innerHTML = 'Departure date must be at least 10 characters';

	} else if ( this.value.length > 15 ) {
		depDateMessage.innerHTML = 'Departure date must be at most 15 characters';

	} else if ( datePattern.test( this.value ) ) {

		depDateMessage.innerHTML = '';

	} else {

		depDateMessage.innerHTML = 'Invalid number. Please use format dd/mm/yyyy';
	}

}


depTimeInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 12 ) {
		depTimeMessage.innerHTML = 'Departure time must be at least 12 characters';

	} else if ( this.value.length > 30 ) {
		depTimeMessage.innerHTML = 'Departure time must be at most 30 characters';

	} else if ( timePattern.test( this.value ) ) {

		depTimeMessage.innerHTML = '';

	} else {

		depTimeMessage.innerHTML = 'Invalid option. Please use selector';
	}

}

passengersInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 1 ) {
		passengersMessage.innerHTML = 'Passengers must be at least 1 characters';

	} else if ( this.value.length > 2 ) {
		passengersMessage.innerHTML = 'Passengers must be at most 2 characters';

	} else if ( passengersPattern.test( this.value ) ) {

		passengersMessage.innerHTML = '';

	} else {

		passengersMessage.innerHTML = 'Invalid number. Please choose insert 1 or 2 digit number only';
	}

}


packageInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 10 ) {
		packageMessage.innerHTML = 'Too few characters. Please choose using the selector';

	} else if ( this.value.length > 50) {
		packageMessage.innerHTML = 'Too many characters. Please choose using the selector';

	} else if ( packagePattern.test( this.value ) ) {

		packageMessage.innerHTML = '';

	} else {

		packageMessage.innerHTML = 'Invalid option. Please use selector';
	}

}

















messageInput.onkeyup = function() {

	var totalLetters = this.value.length;

	messageMessage.innerHTML = totalLetters + '/240';

}

