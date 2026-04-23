const MAPBOX_ACCESS_TOKEN = config.MAPBOX_API;
mapboxgl.accessToken = "";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-74.5, 40],
	zoom: 9
});