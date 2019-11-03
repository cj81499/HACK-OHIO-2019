<template>
    <div class="grid-container">
      <div class="grid-items">
        <Table />
      </div>
      <div class="grid-items">
        <MapPreview />
      </div>
      <div class="grid-items"></div>
    </div>
</template>

<script>
import MapPreview from "./MapPreview.vue";
import Table from "./Table.vue";

export default {
  name: "Dashboard",
  components: {
    MapPreview,
    Table,
  }
};
</script>

<style lang="scss">
    @import "../styles/constants.scss";
    
    .grid-container {
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px;
    flex-grow: 1;
    }

    .grid-items {
    $shadow: rgba(0, 0, 0, 0.12);
    box-shadow: 0 1px 1px $shadow, 0 2px 2px $shadow,
        0 4px 4px $shadow, 0 8px 8px $shadow,
        0 16px 16px $shadow;
    border: 1px solid #ccc;
    border-radius: $border-radius;
    padding: 1rem;
    }
</style>