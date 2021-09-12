<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  mounted() {
    this.renderChart(
      {
        labels: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
        datasets: [
          {
            label: `${new Date().getFullYear()}每月毛收統計表`,
            backgroundColor: "#f87979",
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>

<style></style>
