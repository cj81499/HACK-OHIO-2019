<template>
  <div>
    <div class="flex-container">
      <div>Cold Water</div>
      <div>Hot Water</div>
      <div>Steam</div>
      <div>Electricity</div>
    </div>
    <vue-good-table
      class="table"
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        perPage: 11,
        perPageDropdown: [11],
        mode: 'pages',
        nextLabel: '',
        prevLabel: '',
        rowsPerPageLabel: 'Rows per page',
        ofLabel: 'of',
        pageLabel: '',
        allLabel: 'All',
      }"
      :sort-options="{
        initialSortBy: {field: 'meterReading', type: 'desc'}
      }"
      styleClass="vgt-table striped"
    />
  </div>
</template>

<script>
// import the styles
import "vue-good-table/dist/vue-good-table.css";
import { VueGoodTable } from "vue-good-table";
import Axios from "axios";

export default {
  // add to component
  components: {
    VueGoodTable
  },
  name: "Table",
  data() {
    return {
      columns: [
        {
          label: "Meter Location",
          field: "meterLocation",
          sortable: false,
          type: "text"
        },
        {
          label: "Meter Reading",
          field: "meterReading",
          sortable: true,
          type: "number"
        }
      ],
      rows: [
        {
          id: 1,
          meterLocation: "Alex",
          meterReading: 23.45
        },
        {
          id: 2,
          meterLocation: "Cal",
          meterReading: 2.45
        },
        {
          id: 3,
          meterLocation: "danny",
          meterReading: 2345
        },
        {
          id: 4,
          meterLocation: "Devin",
          meterReading: 234.5
        },
        {
          id: 5,
          meterLocation: "John",
          meterReading: 0.2345
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 6,
          meterLocation: "John",
          meterReading: 23.45
        }
      ]
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
  font-size: 1.5rem;
  border-radius: 10px 10px 0px 0px;
}
</style>
