
const map = new maplibregl.Map({
    container: 'map',
    style: `https://api.maptiler.com/maps/streets/style.json?key=${mapTilerApiKey}`,
    center: listing.geometry.coordinates, // Using DYNAMIC coordinate
    zoom: 10
});

const marker = new maplibregl.Marker({ color: '#FF385C' })
    .setLngLat(listing.geometry.coordinates) // Using DYNAMIC coordinate
    .setPopup(new maplibregl.Popup({ offset: 25 })
        .setHTML(`<h5>${listing.title}</h5><p>${listing.location}</p>`))
    .addTo(map);

map.addControl(new maplibregl.NavigationControl());