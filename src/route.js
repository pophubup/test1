import DateGrid from "./components/pages/DateGrid.vue";
import Assemble from "./components/pages/AssembleBars.vue";
import NotFound from "./components/NotFound.vue";
export const routes = [
  { path: "/", redirect: "/DateGrid" },
  { path: "/DateGrid", component: DateGrid },
  { path: "/Assemble", component: Assemble },
  { path: "/:notFound(.*)", component: NotFound },
];
