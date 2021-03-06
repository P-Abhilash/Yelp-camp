mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaWxhc2gxMjg5IiwiYSI6ImNrcTR4em8zNTExdm4yb2xuazE5MDNmMjQifQ.8iB6SUpZiA8oYJp6SWSKUQ';
var map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)