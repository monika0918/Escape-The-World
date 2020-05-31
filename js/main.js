/**
* GLOBAL JAVASCRIPT
*/

function callToAction() {
    alert("Click on the region that you would like to visit!")
}

mapboxgl.accessToken = 'pk.eyJ1IjoibmluYXciLCJhIjoiY2thcG1qNGUzMWg1YTJzbXZwbzZxOGo2OCJ9.n6XD2y4Qeee-V2qC4NSfPQ';

var map = new mapboxgl.Map({
    container: 'map', 
    style: 'mapbox://styles/mapbox/light-v10', 
    renderWorldCopies: false, 
    center: [0, 20],  
    zoom: 1 
});

map.scrollZoom.disable();

// Markers
var northAmerica = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([-96, 37]) // longitude and latitude of marker location
.setHTML('<a href="./pages/northamerica.html"><img src="https://res.cloudinary.com/dvfa68qn3/image/upload/c_scale,w_800/q_auto,f_auto/fl_lossy/v1590325139/North_America_banner_m3onit.jpg" class="popup-img"><br><span>North America</span></a>')
.addTo(map);

var Asia = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([105, 10]) // longitude and latitude of marker location
.setHTML('<a href="./pages/asia.html"><img src="https://res.cloudinary.com/dvfa68qn3/image/upload/c_scale,w_800/q_auto,f_auto/fl_lossy/v1590875353/david-edelstein-N4DbvTUDikw-unsplash_xyadki.jpg" class="popup-img"><br><span>Asia</span></a>')
.addTo(map);

var Europe = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([5, 50]) // longitude and latitude of marker location
.setHTML('<a href="./pages/europe.html"><img src="https://res.cloudinary.com/dvfa68qn3/image/upload/c_scale,w_800/q_auto,f_auto/fl_lossy/v1590325147/Europe_banner_wg1h8m.jpg" class="popup-img"><br><span>Europe</span></a>')
.addTo(map);

var Oceania = new mapboxgl.Popup({ closeOnClick: false })
.setLngLat([135, -15]) // longitude and latitude of marker location
.setHTML('<a href="./pages/oceania.html"><img src="https://res.cloudinary.com/dvfa68qn3/image/upload/c_scale,w_800/q_auto,f_auto/fl_lossy/v1590874925/Australia_wgbvdh.jpg" class="popup-img"><br><span>Oceania</span></a>')
.addTo(map);
