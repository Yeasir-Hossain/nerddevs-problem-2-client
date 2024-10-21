import LogIn from "@/components/Log-in.vue";
import SignUp from "@/components/Sign-up.vue";
import Success from "@/components/Success.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/signup", name: "Signup", component: SignUp },
    { path: "/login", name: "Login", component: LogIn },
    { path: "/success", name: "Success", component: Success },
    { path: "/", redirect: "/signup" },
  ],
});

export default router;