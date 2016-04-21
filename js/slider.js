// Get the link of the images
var allImages = document.querySelectorAll('#gallery img');

var imageSources = [];

for( var i=0; i<allImages.length; i++ ) {
	imageSources.push( allImages[i].src );
}

// Delete all the images on the page
var galleryContainer = document.querySelector('#gallery');

galleryContainer.innerHTML = '';

// Create the slider container

var slider = document.createElement('div');

// Attach an ID to the slider
slider.id = 'slider';

// Add the slider to the browser
galleryContainer.appendChild( slider );

// Create some buttons
var next = document.createElement('button');
var prev = document.createElement('button');

// Add some IDs to the buttons
next.id = 'next';
prev.id = 'prev';
next.innerHTML = 'Next';
prev.innerHTML = 'Prev';

// Add the buttons to the slider
slider.appendChild(prev);
slider.appendChild(next);

// Show the first image to the visitor
slider.style.backgroundImage = 'url('+ imageSources[0] +')';

//  Listen for clicks on the buttons
next.onclick = changePicture;
prev.onclick = changePicture;

function changePicture() {

    //Which image is in use?
    var imageInUse = slider.style.backgroundImage;

    // extract the URL
    var bits = imageInUse.split('"');

        console.log(bits);

    // Save the link inside a variable
    var url = bits[1];

    // Find what index is in use in the image sources
    var index = imageSources.indexOf( url )



    // if the next button is clicked 
    if( this.id == 'next' ) {
    	index++;

    	// If index is beyond the last image
    	if ( index == imageSources.length ) {
    		index= 0;
    		console.log('You have reached the end');
    	}
    
    } else {
    	index--;

    	// if you have gone before the first image then replace with the last image ie length -1 as we count from 0
    	if( index == -1 ) {
    		index = imageSources.length -1;
    	}
    }

    console.log(index);

    // Get the new URL
    var newUrl = imageSources[index];

    // Change the picture in the slider
    slider.style.backgroundImage = 'url('+ newUrl +')';
}





