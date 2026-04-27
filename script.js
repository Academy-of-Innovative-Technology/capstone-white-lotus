mapboxgl.accessToken = config.MAPBOX_API;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.006, 40.7128],
    zoom: 11
});

map.addControl(new mapboxgl.NavigationControl());

const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl,
    placeholder: "Search for a location (NYC)..."
});

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));