<template>
  <div id="app">
    <Header />
    <Navbar />
    <div class="grid-container">
      <div class="card">
        <Table />
      </div>
      <div class="card">
        <MapPreview />
      </div>
      <div class="charts">
        <div class="card">
          <Chart :styles="chartStyles" :chartdata="monthData" :options="monthOptions" />
        </div>
        <div class="chart-stats">
          <div>Average Reading: 23.5</div>
          <div>Total Usage: 2.98K</div>
        </div>
        <div class="card">
          <Chart :styles="chartStyles" :chartdata="yearData" :options="yearOptions" />
        </div>
        <div class="chart-stats">
          <div>Average Reading: 23.5</div>
          <div>Total Usage: 2.98K</div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";
import MapPreview from "./components/MapPreview.vue";
import Table from "./components/Table.vue";
import Footer from "./components/Footer.vue";
import Chart from "./components/Chart.vue";

export default {
  name: "app",
  components: {
    Header,
    Navbar,
    MapPreview,
    Table,
    Chart,
    Footer
  },
  computed: {
    chartStyles() {
      return {
        height: "25vh",
        position: "relative"
      };
    }
  },
  data() {
    return {
      monthData: {
        labels: ["January", "February"],
        datasets: [
          {
            backgroundColor: "#f87979",
            data: [40, 20]
          }
        ]
      },
      monthOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Energy Usage for the Month of August"
        }
      },
      yearData: {
        labels: ["January", "February"],
        datasets: [
          {
            backgroundColor: "#00aaff",
            data: [40, 20]
          }
        ]
      },
      yearOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        title: {
          display: true,
          text: "Energy Usage for the Year 2019"
        }
      }
    };
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
@import "./styles/constants.scss";

html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}

.grid-container {
  display: grid;
  grid-column-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  padding: 10px;
  flex-grow: 1;
}

.card {
  $shadow: rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 1px $shadow, 0 2px 2px $shadow, 0 4px 4px $shadow,
    0 8px 8px $shadow, 0 16px 16px $shadow;
  border: 1px solid #ccc;
  border-radius: $border-radius;
  padding: 1rem;
}

.chart-stats {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 100%;
  text-align: left;
  padding: 20px 10px;
  font-weight: bold;

  div:first-child {
    flex-grow: 1;
  }
}

#app {
  display: flex;
  flex-direction: column;
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #606060;
  height: 100%;
}
</style>
