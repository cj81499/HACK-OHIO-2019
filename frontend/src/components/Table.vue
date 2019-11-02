<template>
  <div>
    <vue-good-table class="table" :columns="columns" :rows="rows" />
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
          field: "meterLocation"
        },
        {
          label: "Meter Reading",
          field: "meterReading",
          type: "number"
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
  padding: 20px;
}
</style>
