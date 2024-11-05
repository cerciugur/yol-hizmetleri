<template>
  <LeafletMap></LeafletMap>
</template>

<script>
import { defineComponent } from "vue";
import LeafletMap from "src/components/LeafletMap.vue";

export default defineComponent({
  name: "BatteryPage",

  components: {
    LeafletMap,
  },
  setup() {},
});
</script>