<script>
import { Line } from "vue-chartjs";
import Axios from "axios";

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted() {
    Axios.get("http://localhost:3000/usages?building=union").then(response =>
      console.log(response)
    );

    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style lang="scss">
</style>
