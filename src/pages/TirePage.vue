<template>
  <leaflet-map></leaflet-map>
</template>

<script>
import LeafletMap from "src/components/LeafletMap.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "TirePage",

  components: {
    LeafletMap,
  },
  setup() {},
});
</script>