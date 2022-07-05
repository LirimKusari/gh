"use strict";

var startlat = 40.75637123;
var startlon = -73.98545321;
let options = {
  center: [startlat, startlon],
  zoom: 9,
};
const map = L.map("map", options);

let button = document.querySelector(".button");
let nzoom = 12;

document.querySelector(".lat").innerText = startlat;
document.querySelector(".lon").innerText = startlon;

// Event listeners ---------------------------------------------------------------------

button.addEventListener("click", (e) => {
  navigator.geolocation.getCurrentPosition(success, fail);
});

map.on("click", (e) => {
  let lat = e.latlng.lat.toFixed(8);
  let lon = e.latlng.lng.toFixed(8);

  myMarker.setLatLng([lat, lon]);
  map.setView([lat, lon], 9);

  setData(lat, lon);
});

// Map ---------------------------------------------------------------------------------

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

let myMarker = L.marker([startlat, startlon], {
  title: "Coordinates",
  alt: "Coordinates",
  draggable: true,
})
  .addTo(map)
  .on("dragend", function () {
    let lat = myMarker.getLatLng().lat.toFixed(8);
    let lon = myMarker.getLatLng().lng.toFixed(8);
  });

// IP location response ----------------------------------------------------------------

let success = (location) => {
  let coords = location.coords;

  startlat = coords.latitude;
  startlon = coords.longitude;

  myMarker.setLatLng([startlat, startlon]);
  map.setView([startlat, startlon], 9);

  // map.flyTo(new L.LatLng(startlat, startlon));
  // map.setView(new L.LatLng(startlat, startlon));

  setData(startlat, startlon);
};

let fail = (location) => {
  console.log(location.coords);
};

// Utility -----------------------------------------------------------------------------

let setData = (lat, lon) => {
  let hash = geohash.encode(lat, lon);
  let rev = geohash.decode(hash);
  let kujshit = geohash.neighbors(hash);

  document.querySelector(".lat").innerText = lat;
  document.querySelector(".lon").innerText = lon;
  document.querySelector(".hash0").innerText = hash;
  document.querySelector(".lat2").innerText = rev.latitude;
  document.querySelector(".lon2").innerText = rev.longitude;

  let elements = [];
  for (let step = 1; step <= 8; step++) {
    elements.push(
      (document.querySelector(".hash" + step).innerText = kujshit[step - 1])
    );
  }
};
