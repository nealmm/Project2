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
        searchField.placeholder = 'Search for local restaurants';
    } else {
        let place_name = encodeURIComponent(place.name);
        let place_id = encodeURIComponent(place.place_id);

        window.location.href = `/reviews/${place_name}/${place_id}`;
    }
}