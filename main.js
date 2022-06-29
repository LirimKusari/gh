var startlat = 40.75637123;
var startlon = -73.98545321;

var options = {
  center: [startlat, startlon],
  zoom: 9,
};

document.querySelector(".lat").innerText = startlat;
document.querySelector(".lon").innerText = startlon;

// const map = L.map("map").setView([51.505, -0.09], 13);
const map = L.map("map", options);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap",
}).addTo(map);

var nzoom = 12;

var myMarker = L.marker([startlat, startlon], {
  title: "Coordinates",
  alt: "Coordinates",
  draggable: true,
})
  .addTo(map)
  .on("dragend", function () {
    var lat = myMarker.getLatLng().lat.toFixed(8);
    var lon = myMarker.getLatLng().lng.toFixed(8);
    console.log(lat);
    console.log(lon);

    document.querySelector(".lat").innerText = lat;
    document.querySelector(".lon").innerText = lon;
    latlongSearch(lat, lon);
  });

map.on("click", (e) => {
  let lat = e.latlng.lat.toFixed(8);
  let long = e.latlng.lng.toFixed(8);
  let hash = geohash.encode(lat, long);
  let rev = geohash.decode(hash);

  let kujshit = geohash.neighbors(hash);
  console.log(kujshit);

  myMarker.setLatLng([lat, long]);
  map.setView([lat, long], 9);
  // latlongSearch(lat, long);

  document.querySelector(".lat").innerText = lat;
  document.querySelector(".lon").innerText = long;
  document.querySelector(".hash").innerText = hash;
  document.querySelector(".lat2").innerText = rev.latitude;
  document.querySelector(".lon2").innerText = rev.longitude;
});

// function latlongSearch(lat, long) {
//   fetch(
//     "https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=" +
//       lat +
//       "&lon=" +
//       long
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       //document.getElementById('currAddress').textContent = data.display_name;
//       document.getElementById("city").value =
//         data.address.city != null ? data.address.city : "";
//       document.getElementById("state").value =
//         data.address.country != null ? data.address.country : "";
//       //document.getElementById('neighbourhood').value = data.address.neighbourhood != null ? data.address.neighbourhood : "";
//       //document.getElementById('road').value = data.address.road != null ? data.address.road : "";
//       //document.getElementById('state').value = data.address.state != null ? data.address.state : "";
//       //document.getElementById('housenumber').value = data.address.house_number != null ? +data.address.house_number : "";
//       document.getElementById("postalcode").value =
//         data.address.postcode != null ? +data.address.postcode : "";
//       console.log(data);
//     });
// }

// function chooseAddr(lat1, lng1) {
//   myMarker.closePopup();
//   map.setView([lat1, lng1], 18);
//   myMarker.setLatLng([lat1, lng1]);
//   lat = lat1.toFixed(8);
//   lon = lng1.toFixed(8);
//   document.getElementById("latitude").value = lat;
//   document.getElementById("longitute").value = lon;
//   myMarker.bindPopup("Lat " + lat + "<br />Lon " + lon).openPopup();
// }

// function myFunction(arr) {
//   var out = "<br />";
//   var i;

//   if (arr.length > 0) {
//     for (i = 0; i < arr.length; i++) {
//       out +=
//         "<div class='address' title='Show Location and Coordinates' onclick='chooseAddr(" +
//         arr[i].lat +
//         ", " +
//         arr[i].lon +
//         ");return false;'>" +
//         arr[i].display_name +
//         "</div>";
//     }
//     document.getElementById("results").innerHTML = out;
//   } else {
//     document.getElementById("results").innerHTML = "Sorry, no results...";
//   }
// }

// //search on map function
// function addr_search() {
//   var inp = document.getElementById("addr");
//   var xmlhttp = new XMLHttpRequest();
//   var url =
//     "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
//     inp.value;
//   xmlhttp.onreadystatechange = function () {
//     if (this.readyState == 4 && this.status == 200) {
//       var myArr = JSON.parse(this.responseText);
//       myFunction(myArr);
//     }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }

// $(document).ready(function () {
//   if (window.File && window.FileList && window.FileReader) {
//     $("#multiple_files").on("change", function (e) {
//       var multiple_files = e.target.files,
//         filesLength = multiple_files.length;
//       for (var i = 0; i < filesLength; i++) {
//         var f = multiple_files[i];
//         var fileReader = new FileReader();
//         fileReader.onload = function (e) {
//           var file = e.target;
//           $(
//             '<span class="pip">' +
//               '<img class="imageThumb" src="' +
//               e.target.result +
//               '" title="' +
//               file.name +
//               '"/>' +
//               '<br/><span class="img-delete">Remove</span>' +
//               "</span>"
//           ).insertAfter("#multiple_files");
//           $(".img-delete").click(function () {
//             $(this).parent(".pip").remove();
//           });
//         };
//         fileReader.readAsDataURL(f);
//       }
//     });
//   } else {
//     alert("|Sorry, | Your browser doesn't support to File API");
//   }
// });
