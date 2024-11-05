<template>
  <q-parallax :height="861" src="~assets/b.jpg">
    <q-page class="flex flex-center">
      <!--<img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >-->
      <font-awesome-icon icon="fa-solid fa-truck-pickup" />
      <!-- <q-btn-group push>
      <q-btn
        push
        label="Çekici"
        icon="fa-solid fa-truck-pickup"
        color="red-5"
      />
      <q-btn push label="Akü" icon="battery_charging_full" color="green-5" />
      <q-btn push label="Lastikçi" icon="tire_repair" color="grey" />
    </q-btn-group> -->
      <!--<div id="youmap" style="width: 100%;height: 500px;"></div>-->

      <q-tabs
        class="text-grey-10"
        active-color="primary"
        indicator-color="transparent"
      >
        <q-route-tab
          to="/towtruck"
          icon="fa-solid fa-truck-pickup"
          label="Çekici"
        />
        <q-route-tab to="/battery" icon="battery_charging_full" label="Akü" />
        <q-route-tab to="/tire" icon="tire_repair" label="Lastikçi" />
      </q-tabs>
    </q-page>
  </q-parallax>
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
