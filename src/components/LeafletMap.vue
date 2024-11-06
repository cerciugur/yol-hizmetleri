<template>
  <div id="myMap" style="width: 100%; height: 890px"></div>
</template>

<script>
import { onMounted, watch } from "vue";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
  setup() {
    onMounted(() => initMap());

    function initMap() {
      var map = new L.Map("myMap").setView([39.94, 32.802], 11);
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 20,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      map.locate({ setView: true, maxZoom: 40, watch: true, timeout: 6000 });

      function getCurrentLocation(e) {
        var radius = e.accuracy / 2;
        L.marker(e.latlng)
          .addTo(map)
          .bindPopup("You are within " + radius + " meters").openPopup;

        L.circle(e.latlng, radius).addTo(map);
      }

      map.on("locationFound", getCurrentLocation);
    }
  },
};
</script>
