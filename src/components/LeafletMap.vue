<template>
  aaaaaaaaaaaaa
  <div id="myMap" style="width: 100%; height: 500px"></div>
</template>

<script>
import { defineComponent } from "vue";
import "leaflet/dist/leaflet.css";
import * as L from "leaflet";
import { onMounted } from "vue";

export default defineComponent({
  name: "LeafletMap",
  setup() {},
});

onMounted(() => {
  initMap();
});

function initMap() {
  var map = L.Map("myMap").setView([51.505, -0.09], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
}
</script>
