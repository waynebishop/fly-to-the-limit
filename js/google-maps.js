var queenstownMap;

function initMap() {
	console.log('test');

	// Get a reference to map container
	var mapContainer = document.querySelector('#map');

	// Set up some options for the map
	var mapOptions = {
		center: {
			lat: -45.0244763,
			lng: 168.6568355
		},
		zoom: 15
	};

	// Create the map
	queenstownMap = new google.maps.Map(mapContainer, mapOptions);

	// Prepare some markers
	var queenstown = new google.maps.Marker({
	    position: {
			lat: -45.0244763,
			lng: 168.6568355
		},
	    map: queenstownMap
	  });
}

