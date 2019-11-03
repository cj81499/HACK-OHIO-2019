<template>
  <div class="container">
    <Mapbox
      access-token="pk.eyJ1IjoiY2hlZWJvbGR6IiwiYSI6ImNrMmkzN3NyMTBraTkzbG52ZTlvcWhpd3UifQ.NkY5P6WUwj290eaSOTlH1Q"
      :map-options="{
        style: 'mapbox://styles/cheeboldz/ck2i7gmwn13fd1cme16htwxoc',
        center: [-83.0127, 39.9996],
        zoom: 15,
      }"
      @map-load="loaded"
    ></Mapbox>
    <router-link id="map-link" :to="'map'">
      <img src="../assets/fullscreen.svg" alt="Fullscreen">
    </router-link>
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
            0,0,
            6,1
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

<style scoped lang="scss">
@import "../styles/constants.scss";

.container {
  position: relative;
  width: 100%;
  height: 100%;
}

#map {
  height: 100%;
  border-radius: $border-radius;
}

#map-link {
  position: absolute;
  bottom: 0;
  right: 2.5em;
}
</style>
