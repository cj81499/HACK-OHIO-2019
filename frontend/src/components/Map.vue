<template>
    <div class="map-container">
      <Mapbox
      access-token="pk.eyJ1IjoiY2hlZWJvbGR6IiwiYSI6ImNrMmkzN3NyMTBraTkzbG52ZTlvcWhpd3UifQ.NkY5P6WUwj290eaSOTlH1Q"
      :map-options="{
        style: 'mapbox://styles/cheeboldz/ck2i7gmwn13fd1cme16htwxoc',
        center: [-83.0127, 39.9996],
        zoom: 14,
      }"
      @map-load="loaded"
    ></Mapbox>
    </div>
</template>

<script>
import Mapbox from "mapbox-gl-vue";

export default {
  name: "Map",
  components: {
    Mapbox
  },
  methods: {
    loaded(map) {
      map.resize();
    }
  }
};
</script>

<style lang="scss">
    .map-container {
        height: 100%;
        width: 100%;
    }

    #map {
        height: 100%;
    }
</style>