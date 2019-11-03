<template>
  <div>
    <div class="flex-container">
      <div
        class="active tab-indi"
        id="tab-electricity"
        v-on:click="changeTab('electricity')"
      >Electricity</div>
      <div id="tab-cold-water" class="tab-indi" v-on:click="changeTab('cold-water')">Cold Water</div>
      <div id="tab-hot-water" class="tab-indi" v-on:click="changeTab('hot-water')">Hot Water</div>
      <div id="tab-steam" class="tab-indi" v-on:click="changeTab('steam')">Steam</div>
    </div>
    <vue-good-table
      id="vgt-electricity"
      class="table"
      :columns="electricityColumns"
      :rows="electricityRows"
      :pagination-options="pageOptions"
      :sort-options="sortOptions"
      styleClass="vgt-table striped"
    />
    <vue-good-table
      id="vgt-cold-water"
      class="table hidden"
      :columns="coldWaterColumns"
      :rows="coldWaterRows"
      :pagination-options="pageOptions"
      :sort-options="sortOptions"
      styleClass="vgt-table striped"
    />
    <vue-good-table
      id="vgt-hot-water"
      class="table hidden"
      :columns="hotWaterColumns"
      :rows="hotWaterRows"
      :pagination-options="pageOptions"
      :sort-options="sortOptions"
      styleClass="vgt-table striped"
    />
    <vue-good-table
      id="vgt-steam"
      class="table hidden"
      :columns="steamColumns"
      :rows="steamRows"
      :pagination-options="pageOptions"
      :sort-options="sortOptions"
      styleClass="vgt-table striped"
    />
  </div>
</template>

<script>
// import the styles
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import Axios from "axios";

class MeterReading {
  constructor(meterName) {
    this.meterName = meterName;
    this.readings = [];
  }
}

const meterAverages = new Map();

export default {
  // add to component
  components: {
    VueGoodTable
  },
  name: "Table",
  methods: {
    changeTab(tab) {
      console.log("switch to " + tab);
      let tabs = document.getElementsByClassName("table");
      tabs.forEach(elem => {
        if (!elem.classList.contains("hidden")) {
          elem.classList.add("hidden");
        }
      });
      let activeTab = document.getElementById("vgt-" + tab);
      activeTab.classList.remove("hidden");

      let indicators = document.getElementsByClassName("tab-indi");
      indicators.forEach(elem => {
        if (elem.classList.contains("active")) {
          elem.classList.remove("active");
        }
      });
      let activeIndicator = document.getElementById("tab-" + tab);
      activeIndicator.classList.add("active");
    }
  },
  created() {
    var start = new Date(2018, 7, 1, 0, 0, 0, 0);
    var end = new Date(2018, 8, 1, 0, 0, 0, 0);
    var self = this;
    Axios.get(
      "http://localhost:3000/measurements?range=" +
        start.toISOString() +
        "|" +
        end.toISOString()
    ).then(response => {
      response.data.usages.forEach(reading => {
        if (!meterAverages.has(reading.building)) {
          meterAverages.set(
            reading.building,
            new MeterReading(reading.building)
          );
        }
        meterAverages
          .get(reading.building)
          .readings.push({ value: reading.current_value, unit: reading.unit });
      });
      meterAverages.forEach((collection, name) => {
        const units = ["kWh", "KBTU/HR"];
        for (let unit of units) {
          const meterAverage = collection.readings
            .filter(val => {
              return val.unit == unit;
            })
            .reduce((acc, val) => {
              return acc + val.value / collection.readings.length;
            }, 0);
          if (meterAverage > 0) {
            switch (unit) {
              case "kWh":
                self.electricityRows.push({
                  id: 1,
                  meterLocation: name,
                  meterReading: meterAverage
                });
                break;
              case "KBTU/HR":
                self.hotWaterRows.push({
                  id: 1,
                  meterLocation: name,
                  meterReading: meterAverage
                });
                self.coldWaterRows.push({
                  id: 1,
                  meterLocation: name,
                  meterReading: meterAverage
                });
                self.steamRows.push({
                  id: 1,
                  meterLocation: name,
                  meterReading: meterAverage
                });
                break;
            }
          }
        }
      });
    });
  },
  data() {
    return {
      sortOptions: {
        initialSortBy: { field: "meterReading", type: "desc" }
      },
      pageOptions: {
        enabled: true,
        perPage: 10,
        perPageDropdown: [10],
        mode: "pages",
        nextLabel: "",
        prevLabel: "",
        rowsPerPageLabel: "Rows per page",
        ofLabel: "of",
        pageLabel: "",
        allLabel: "All"
      },
      electricityColumns: [
        {
          label: "Meter Location",
          field: "meterLocation",
          sortable: false,
          type: "text"
        },
        {
          label: "Meter Reading (kWh)",
          field: "meterReading",
          sortable: true,
          type: "number",
          formatFn: value => {
            return value.toFixed(3);
          }
        }
      ],
      hotWaterColumns: [
        {
          label: "Meter Location",
          field: "meterLocation",
          sortable: false,
          type: "text"
        },
        {
          label: "Meter Reading (KBTU/HR)",
          field: "meterReading",
          sortable: true,
          type: "number",
          formatFn: value => {
            return value.toFixed(3);
          }
        }
      ],
      coldWaterColumns: [
        {
          label: "Meter Location",
          field: "meterLocation",
          sortable: false,
          type: "text"
        },
        {
          label: "Meter Reading (KBTU/HR)",
          field: "meterReading",
          sortable: true,
          type: "number",
          formatFn: value => {
            return value.toFixed(3);
          }
        }
      ],
      steamColumns: [
        {
          label: "Meter Location",
          field: "meterLocation",
          sortable: false,
          type: "text"
        },
        {
          label: "Meter Reading (KBTU/HR)",
          field: "meterReading",
          sortable: true,
          type: "number",
          formatFn: value => {
            return value.toFixed(3);
          }
        }
      ],
      electricityRows: [],
      coldWaterRows: [],
      hotWaterRows: [],
      steamRows: []
    };
  }
};
</script>

<style scoped lang="scss">
.flex-container {
  display: flex;
  justify-content: space-evenly;
}

.flex-container > div {
  background-color: #00aaff;
  color: white;
  padding: 4px 20px;
  font-size: 1.1rem;
  width: 25%;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
}

.hidden {
  display: none;
}

div.active {
  background-color: #1376a8;
}
</style>
