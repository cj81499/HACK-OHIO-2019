import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../components/Dashboard";
import Map from "../components/Map"

Vue.use(Router);

export default new Router({
    routes: [
        { path: "/", name: "dashboard", component: Dashboard },
        { path: "/map", name: "map", component: Map }
    ]
});
