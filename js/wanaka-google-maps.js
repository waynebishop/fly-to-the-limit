var wanakaMap;

function initMap() {
	console.log('test');

	// Get a reference to map container
	var mapContainer = document.querySelector('#map');

	// Set up some options for the map
	var mapOptions = {
		center: {
			lat: -44.7248973,
			lng: 169.2436469
		},
		zoom: 17
	};

	// Create the map
	wanakaMap = new google.maps.Map(mapContainer, mapOptions);

	// Prepare some markers
	var wanaka = new google.maps.Marker({
	    position: {
			lat: -44.7248973,
			lng: 169.2436469
		},
	    map: wanakaMap
	  });
}

