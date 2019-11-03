<template>
    <div class="map-container">
      <Mapbox
      access-token="pk.eyJ1IjoiY2hlZWJvbGR6IiwiYSI6ImNrMmkzN3NyMTBraTkzbG52ZTlvcWhpd3UifQ.NkY5P6WUwj290eaSOTlH1Q"
      :map-options="{
        style: 'mapbox://styles/cheeboldz/ck2i7gmwn13fd1cme16htwxoc',
        center: [-83.0127, 39.9996],
        zoom: 16,
      }"
      @map-load="loaded"
    ></Mapbox>
    <div class="map-navigation">
        <span>Energy Usage</span>
    </div>
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
     map.addLayer({
        id: 'energy',
        type: 'heatmap',
        paint: {
            "heatmap-weight": [
                "interpolate",
                ["linear"],
                ["get", "reading"],
                0, 0,
                6, 1
            ],
            "heatmap-radius": [
                "interpolate",
                ["linear"],
                ["zoom"],
                0, 10,
                9, 30
            ],
        },
        source: {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.0086, 39.9977],
                },
                properties: {
                    reading: 1000
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.0091, 39.9972],
                },
                properties: {
                    reading: 10
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.0091, 39.9972],
                },
                properties: {
                    reading: 10
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.0091, 39.9972],
                },
                properties: {
                    reading: 10
                }
              }
            ]
          }
        }
      });

      map.resize();
    }
  }
};
</script>

<style lang="scss">
    @import "../styles/constants.scss";

    #map {
        height: 100%;
    }

    .map-container {
        position: relative;
        height: 100%;
        width: 100%;
    }

    .map-navigation {
        display: flex;
        justify-content: center;
        position: absolute;
        top: 1em;
        left: 1em;

        height: 50%;
        width: 20%;
        padding: 1em 1em;

        border-radius: $border-radius;
        background-color: white;

    }
</style>