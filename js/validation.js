// Find the form
var enquiryForm = document.querySelector('#enquiry');

// get references to the input fields
	var nameInput = document.querySelector("#full-name");
	var nameMessage = document.querySelector("#full-name-message");
	var emailInput = document.querySelector("#email");
	var emailMessage = document.querySelector("#email-message");
	var phoneInput = document.querySelector("#phone");
	var phoneMessage = document.querySelector("#phone-message");

	var messageInput = document.querySelector('#message');
	var messageMessage = document.querySelector('#message-message')

// Listen for the blur event on full-name inout field
nameInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 3 ) {
		nameMessage.innerHTML = 'Name must be at least 3 characters';

	} else if ( this.value.length > 20 ) {
		nameMessage.innerHTML = 'Name must be at most 50 characters';

	} else if ( namePattern.test( this.value ) ) {

		nameMessage.innerHTML = '';

	} else {

		nameMessage.innerHTML = 'Invalid name'
	}

}

phoneInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 3 ) {
		phoneMessage.innerHTML = 'Phone must be at least 7 characters';

	} else if ( this.value.length > 20 ) {
		phoneMessage.innerHTML = 'Phone must be at most 25 characters';

	} else if ( phonePattern.test( this.value ) ) {

		phoneMessage.innerHTML = '';

	} else {

		phoneMessage.innerHTML = 'Invalid number';
	}

}

emailInput.onblur = function() {

	// Check if meets criteria per pattern
	if ( this.value.length < 3 ) {
		emailMessage.innerHTML = 'Email must be at least 3 characters';

	} else if ( this.value.length > 20 ) {
		emailMessage.innerHTML = 'Email must be at most 50 characters';

	} else if ( emailPattern.test( this.value ) ) {

		emailMessage.innerHTML = '';

	} else {

		emailMessage.innerHTML = 'Invalid email address'
	}

}

messageInput.onkeyup = function() {

	var totalLetters = this.value.length;

	messageMessage.innerHTML = totalLetters + '/240';

}

