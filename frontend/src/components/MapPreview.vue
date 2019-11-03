<template>
  <div class="container">
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
  name: "MapPreview",
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

<style scoped lang="scss">
@import "../styles/constants.scss";

.container {
  width: 100%;
  height: 100%;
}

#map {
  height: 100%;
  border-radius: $border-radius;
}
</style>
