<template>
  çekici sayfa
  <leaflet-map></leaflet-map>
</template>

<script>
import { defineComponent } from "vue";
import LeafletMap from "src/components/LeafletMap.vue";

export default defineComponent({
  name: "TowTruck",

  components: {
    LeafletMap,
  },
  setup() {},
});
</script>
