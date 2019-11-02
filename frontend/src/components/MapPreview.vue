<template>
  <div id="map"></div>
</template>

<script>
export default {
  name: "MapPreview",
  mounted: () => {
    var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

    mapboxgl.accessToken =
      "pk.eyJ1IjoiZGlkZ2VyaWRvb21oIiwiYSI6ImNqbnJ5M2xldTAyeW8za28ybm43NzA4aHIifQ.7Cz8hPXu178_FltdCwp9Xw";

    new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9
    });
  }
};
</script>

<style scoped lang="scss">
#map {
  width: 100%;
}
</style>
