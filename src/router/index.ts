import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import WeeklyPlan from "@/views/WeeklyPlan.vue";
import DailyPlan from "@/views/DailyPlan.vue";
import DailyReview from "@/views/DailyReview.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "homeView",
    component: Home,
  },
  {
    path: "/weekly-plan",
    name: "weeklyPlanView",
    component: WeeklyPlan,
  },
  {
    path: "/daily-plan",
    name: "dailyPlanView",
    component: DailyPlan,
  },
  {
    path: "/daily-review",
    name: "dailyReviewView",
    component: DailyReview,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
