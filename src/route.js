import DateGrid from "./components/pages/DateGrid.vue";
import NotFound from "./components/NotFound.vue";
export const routes = [
    { path: "/", redirect: "/DateGrid" },
    { path: "/DateGrid", component: DateGrid },
    { path: "/:notFound(.*)", component: NotFound },
];