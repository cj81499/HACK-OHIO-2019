<template>
  <div class="map-container">
    <router-link class="back-button" id="map-link" :to="'/'">
      <img src="../assets/back.svg" id="back-button" />
    </router-link>
    <Mapbox
      access-token="pk.eyJ1IjoiY2hlZWJvbGR6IiwiYSI6ImNrMmkzN3NyMTBraTkzbG52ZTlvcWhpd3UifQ.NkY5P6WUwj290eaSOTlH1Q"
      :map-options="{
        style: 'mapbox://styles/cheeboldz/ck2i7gmwn13fd1cme16htwxoc',
        center: [-83.0127, 39.9996],
        zoom: 16,
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
      map.addLayer({
        id: "energy",
        type: "heatmap",
        paint: {
          "heatmap-weight": [
            "interpolate",
            ["linear"],
            ["get", "reading"],
            0,
            0,
            6,
            1
          ],
          "heatmap-radius": ["interpolate", ["linear"], ["zoom"], 0, 10, 9, 30]
        },
        source: {
          type: "geojson",
          data: {
            type: "FeatureCollection",
            features: [
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-83.0086, 39.9977]
                },
                properties: {
                    reading: 200
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: "Point",
                  coordinates: [-83.0091, 39.9972]
                },
                properties: {
                    reading: 200
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: 'Point',
                  coordinates: [-83.010170, 39.996303],
                },
                properties: {
                    reading: 1150
                }
              },
              {
                type: "Feature",
                geometry: {
                  type: 'Point',
                  coordinates: [-83.010642, 39.995777],
                },
                properties: {
                    reading: 150
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.009697, 40.000807],
                },
                properties: {
                    reading: 150
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.009697, 40.000807],
                },
                properties: {
                    reading: 150
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.014810, 39.999196],
                },
                properties: {
                    reading: 1150
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.014810, 39.999196],
                },
                properties: {
                    reading: 1150
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.014810, 39.999196],
                },
                properties: {
                    reading: 1150
                }
                },
                {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: [-83.014810, 39.999196],
                },
                properties: {
                    reading: 1150
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

.back-button {
  position: fixed;
  top: 0;
  left: 0;

  padding: 7px;
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