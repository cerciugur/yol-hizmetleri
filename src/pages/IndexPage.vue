<template>
  <q-page class="flex flex-center">
    <!--<img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >-->
    <font-awesome-icon icon="fa-solid fa-truck-pickup" />
    <q-btn-group push>
      <q-btn push label="Çekici" icon="fa-solid fa-truck-pickup" />
      <q-btn push label="Akü" icon="battery_charging_full" />
      <q-btn push label="Lastikçi" icon="tire_repair" />
    </q-btn-group>
    <!--<div id="youmap" style="width: 100%;height: 500px;"></div>-->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { onMounted } from "vue";

export default defineComponent({
  name: "PageIndex",
});

onMounted(() => {
  //locationYou()
  redirectTowTruck();
});

function redirectTowTruck() {
  window.location = "/towtruck";
}
</script>
