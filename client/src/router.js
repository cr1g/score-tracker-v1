import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/show-matches",
            name: "showMatches",
            component: () =>
                import("./views/ShowMatches.vue")
        },
        {
            path: "/add-match",
            name: "addMatch",
            component: () =>
                import("./views/AddMatch.vue")
        },
        {
            path: "*",
            component: () =>
                import("./views/ShowMatches.vue")
        }
    ]
});
