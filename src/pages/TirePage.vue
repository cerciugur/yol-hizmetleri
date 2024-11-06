<template>
  Lastikçi sayfa
  <LeafletMap></LeafletMap>
</template>

<script>
import { defineComponent } from "vue";
import LeafletMap from "components/LeafletMap.vue";

export default defineComponent({
  name: "TowTruck",

  components: {
    LeafletMap,
  },
  setup() {},
});
</script>
