<template>
  <div>
    <HorziontalBar />
    <VerticalBarChart />
    <CompareBarChart />
  </div>
</template>

<script>
import HorziontalBar from "./HorziontalBar";
import VerticalBarChart from "./VerticalBarChart";
import CompareBarChart from "./CompareCharts.vue";
export default {
  components: {
    HorziontalBar,
    VerticalBarChart,
    CompareBarChart,
  },
};
</script>

<style></style>
