<script>
import { Bar } from "vue-chartjs";

export default {
  extends: Bar,
  data() {
    return {
      gradient: null,
      gradient2: null,
    };
  },
  mounted() {
    // this.gradient = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);
    // this.gradient2 = this.$refs.canvas
    //   .getContext("2d")
    //   .createLinearGradient(0, 0, 0, 450);

    // this.gradient.addColorStop(0, "rgba(255, 0,0, 0.5)");
    // this.gradient.addColorStop(0.5, "rgba(255, 0, 0, 0.25)");
    // this.gradient.addColorStop(1, "rgba(255, 0, 0, 0)");

    // this.gradient2.addColorStop(0, "rgba(0, 231, 255, 0.9)");
    // this.gradient2.addColorStop(0.5, "rgba(0, 231, 255, 0.25)");
    // this.gradient2.addColorStop(1, "rgba(0, 231, 255, 0)");

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
            backgroundColor: "#FF5733",
            // pointBackgroundColor: "white",
            // borderWidth: 1,
            // pointBorderColor: "white",
            // backgroundColor: this.gradient,
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11],
          },
          {
            label: `${new Date().getFullYear() - 1}每月毛收統計表`,
            backgroundColor: "#3399FF",
            // pointBackgroundColor: "white",
            // pointBorderColor: "white",
            // borderWidth: 1,
            // backgroundColor: this.gradient2,
            data: [40, 20, 12, 39, 10, 40, 39, 66, 40, 55, 142, 33],
          },
        ],
      },
      { responsive: true, maintainAspectRatio: false }
    );
  },
};
</script>
