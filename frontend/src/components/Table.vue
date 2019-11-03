<template>
  <div>
    <vue-good-table
      class="table"
      :columns="columns"
      :rows="rows"
      :pagination-options="{
        enabled: true,
        perPage: 10,
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
          sortable: false
        },
        {
          label: "Meter Reading",
          field: "meterReading",
          sortable: true
        }
      ],
      rows: [
        {
          id: 1,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 2,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 3,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 4,
          meterLocation: "John",
          meterReading: 23.45
        },
        {
          id: 5,
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

<style scoped>
.table {
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
}
.vgt-wrap,
.vgt-wrap__footer {
  border-radius: 0px 0px 10px 10px;
}
</style>
