<template>
  <div class="charts">
    <div class="card">
      <Chart ref="monthChart" :styles="chartStyles" :chartdata="monthData" :options="monthOptions" />
    </div>
    <div class="chart-stats">
      <div>Average Reading: {{monthAverage.toFixed(2)}} gWh</div>
      <div>Total Usage: {{monthTotal.toFixed(2)}} gWh</div>
    </div>
    <div class="card">
      <Chart ref="yearChart" :styles="chartStyles" :chartdata="yearData" :options="yearOptions" />
    </div>
    <div class="chart-stats">
      <div>Average Reading: {{yearAverage.toFixed(2)}} gWh</div>
      <div>
        Total Usage:
        {{yearTotal.toFixed(2)}} gWh
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "./Chart.vue";
import Axios from "axios";

const timeMap = new Map();

export default {
  name: "Charts",
  components: {
    Chart
  },
  created() {
    var start = new Date(2018, 7, 1, 0, 0, 0, 0);
    var end = new Date(2018, 8, 1, 0, 0, 0, 0);
    var self = this;
    for (let day = 0; day < 32; day++) {
      this.monthData.labels.push("8/" + day);
    }

    Axios.get(
      "http://localhost:3000/measurements?range=" +
        start.toISOString() +
        "|" +
        end.toISOString()
    ).then(response => {
      response.data.usages.forEach(reading => {
        if (!timeMap.has(reading.time.substr(0, 10))) {
          timeMap.set(reading.time.substr(0, 10), new Array());
        }
        timeMap.get(reading.time.substr(0, 10)).push(reading.current_value);
      });
      timeMap.forEach(data => {
        self.monthData.datasets[0].data.push(
          data.reduce((acc, val) => {
            return acc + val / 1000;
          }, 0)
        );
      });
      self.monthData.datasets[0].data.forEach(elem => {
        self.monthTotal += elem / 1000;
        self.monthAverage +=
          elem / 1000 / self.monthData.datasets[0].data.length;
      });
      this.$refs.monthChart.refresh();
    });

    for (let i = 0; i < 12; i++) {
      let m_start = new Date(2018, i, 1, 0, 0, 0, 0);
      let m_end = new Date(2018, i + 1, 1, 0, 0, 0, 0);
      let currentTime = new Map();
      Axios.get(
        "http://localhost:3000/measurements?range=" +
          m_start.toISOString() +
          "|" +
          m_end.toISOString()
      ).then(response => {
        response.data.usages.forEach(reading => {
          if (!currentTime.has(reading.time.substr(0, 10))) {
            currentTime.set(reading.time.substr(0, 10), new Array());
          }
          currentTime
            .get(reading.time.substr(0, 10))
            .push(reading.current_value);
        });
        currentTime.forEach(data => {
          self.yearData.datasets[0].data[i] = data.reduce((acc, val) => {
            return acc + val / 1000;
          }, 0);
        });
        self.yearData.datasets[0].data.forEach(elem => {
          self.yearTotal += elem / 1000;
          self.yearAverage += elem / 1000 / 12;
        });
        this.$refs.yearChart.refresh();
      });
    }
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
      monthAverage: 0,
      monthTotal: 0,
      monthData: {
        labels: [],
        datasets: [
          {
            backgroundColor: "#f87979",
            data: []
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
      yearTotal: 0,
      yearAverage: 0,
      yearData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            backgroundColor: "#00aaff",
            data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
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
          text: "Energy Usage for the Year 2018"
        }
      }
    };
  }
};
</script>

<style scoped lang="scss">
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
</style>