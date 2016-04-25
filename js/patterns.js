// Patterns to use in validation
	var usernamePattern = new RegExp("^[a-zA-Z0-9._-]{3,20}$");
	var namePattern = new RegExp("^[a-zA-Z' .-]{3,50}$");
	var emailPattern = new RegExp("^[a-zA-Z._@-]{5,50}$");
	var phonePattern = new RegExp("^[0-9 ]{7,25}$");
	var datePattern = new RegExp("^[0-9 /]{5,25}$")
	var timePattern = new RegExp("^[a-zA-Z ()]{12,20}$")
	var passengersPattern = new RegExp("[0-9]{1,2}")
	var packagePattern = new RegExp("az-A-Z :]{10,50}")