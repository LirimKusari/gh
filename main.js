"use strict";

var startlat = 40.75637123;
var startlon = -73.98545321;

let get_location = () => {
  navigator.geolocation.getCurrentPosition(function (position) {
    let currlat = position.coords.latitude;
    let currlong = position.coords.longitude;
    if (currlat != null && currlong != null) {
      startlat = currlat;
      startlon = currlong;
    }
  });
};

console.log(startlat, " ", startlon);
get_location();
console.log(startlat, " ", startlon);
let options = {
  center: [startlat, startlon],
  zoom: 9,
};

// document.querySelector(".lat").innerText = startlat;
// document.querySelector(".lon").innerText = startlon;

// // const map = L.map("map").setView([51.505, -0.09], 13);
// const map = L.map("map", options);

// L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//   maxZoom: 19,
//   attribution: "© OpenStreetMap",
// }).addTo(map);

// let nzoom = 12;

// let myMarker = L.marker([startlat, startlon], {
//   title: "Coordinates",
//   alt: "Coordinates",
//   draggable: true,
// })
//   .addTo(map)
//   .on("dragend", function () {
//     let lat = myMarker.getLatLng().lat.toFixed(8);
//     let lon = myMarker.getLatLng().lng.toFixed(8);
//     console.log(lat);
//     console.log(lon);

//     document.querySelector(".lat").innerText = lat;
//     document.querySelector(".lon").innerText = lon;
//     latlongSearch(lat, lon);
//   });

// map.on("click", (e) => {
//   let lat = e.latlng.lat.toFixed(8);
//   let long = e.latlng.lng.toFixed(8);
//   let hash = geohash.encode(lat, long);
//   let rev = geohash.decode(hash);

//   let kujshit = geohash.neighbors(hash);
//   console.log(kujshit);

//   myMarker.setLatLng([lat, long]);
//   map.setView([lat, long], 9);
//   // latlongSearch(lat, long);
//   elements = [];
//   for (let step = 1; step <= 8; step++) {
//     elements.push(
//       (document.querySelector(".hash" + step).innerText = kojshit[step - 1])
//     );
//   }

//   document.querySelector(".lat").innerText = lat;
//   document.querySelector(".lon").innerText = long;
//   document.querySelector(".hash0").innerText = hash;
//   document.querySelector(".lat2").innerText = rev.latitude;
//   document.querySelector(".lon2").innerText = rev.longitude;
// });
