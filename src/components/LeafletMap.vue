<template>
  <div id="myMap" style="width: 100%; height: 890px"></div>
</template>

<script>
import { handleError, onMounted } from "vue";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

export default {
  setup() {
    function initMap() {
      var map = new L.Map("myMap").setView([39.94, 32.802], 13);

      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      /* marker denemesi, marker geliyor ancak image yüklenmiyor. Kendi eklediğim bir icon ile de denedim yine gelmedi.
      var myIcon = L.icon({
        iconUrl: "src/assets/red-marker-32px.png",
        //iconSize: [38, 95],
        //iconAnchor: [22, 94],
        //popupAnchor: [-3, -76],
        //shadowUrl: "my-icon-shadow.png",
        //shadowSize: [68, 95],
        //shadowAnchor: [22, 94],
      });
      var marker = L.marker([39.945, 32.802], { icon: myIcon }).addTo(map);
      marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

      //circle denemesi, çalıştı
      var circle = L.circle([39.955, 32.822], {
        color: "red",
        fillColor: "#f03",
        fillOpacity: 0.5,
        radius: 500,
      }).addTo(map);
      */

      map.locate({
        setView: true,
        maxZoom: 40,
        watch: true,
        enableHighAccuracy: true,
      });
      map.on("locationfound", getCurrentLocation);
      map.on("locationerror", handleError);

      function getCurrentLocation(e) {
        var radius = e.accuracy / 4;
        alert("Accuracy is " + e.accuracy + " circle radius is " + radius);
        alert("Location tracking continues. New location:" + e.latlng);
        /*var myIcon = L.icon({
          iconUrl: "src/assets/red-marker-32px.png",
        });
        var marker = L.marker(e.latlng, { icon: myIcon }).addTo(map);
        marker
          .bindPopup(
            "You are  at " +
              e.latlng.lat +
              " latitude " +
              e.latlng.lng +
              " longitude"
          )
          .openPopup();
        map.stopLocate();*/
        L.circle(e.latlng, {
          color: "red",
          fillColor: "#f03",
          fillOpacity: 0.5,
          radius: radius,
        }).addTo(map);
      }

      function handleError(ex) {
        alert(e.message);
      }
    }

    onMounted(() => initMap());
  },
};
</script>
