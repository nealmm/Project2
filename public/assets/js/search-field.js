// socket
const socket = io();

const searchField = document.getElementById('search-field');

let autocomplete;

function initAutocomplete() {
    let circle = new google.maps.Circle({ center: new google.maps.LatLng(38.9072, -77.0369), radius: 16000 });

    let params = {
        types: ['restaurant'],
        bounds: circle.getBounds(),
        strictBounds: true,
        fields: ['place_id', 'name']
    };

    autocomplete = new google.maps.places.Autocomplete(searchField, params);
    autocomplete.addListener('place_changed', onPlaceChanged);
}

function onPlaceChanged() {
    let place = autocomplete.getPlace();

    if (!place) {
        searchField.placeholder = 'Look up restaurants';
    } else {
        console.log(place);
    }
}



// socket.on('message', (message) => {
//     console.log(message)
// });

// document.querySelector('#message-form').addEventListener('submit', (e) => {
//     e.preventDefault();

//     const message = e.target.elements.review_comment.value

//     // from client to server
//     socket.emit('sendMessage', message)
// });