import Vue from "vue";
import VueRouter from "vue-router";
import PLB from "@/views/Plb"
import Inventory from "@/views/Inventory"
import ApprovalRequest from "@/views/Approval"
import ApprovalReview from "@/views/Approval/review.vue"
import UserList from "@/views/User/list.vue"
import NewUser from "@/views/User/create.vue"

Vue.use(VueRouter);

/**
 * requiresAuth: true, berfungsi untuk hanya user yang sudah login yang bisa akses
 * reportId: true, berfungsi untuk hanya user yang sudah membuat report yang boleh mengakses halaman selanjutnya
 */

const routes = [
  {
    path: "/",
  },
  {
    path: "/plb",
    name: "PLB",
    component: PLB,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/inventory",
    name: "Inventory",
    component: Inventory,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/approval-request",
    name: "ApprovalRequest",
    component: ApprovalRequest,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/approval-review",
    name: "ApprovalReview",
    component: ApprovalReview,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-list",
    name: "UserList",
    component: UserList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/user-new",
    name: "NewUser",
    component: NewUser,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem("token_it_inventory");
//   const reportId = localStorage.getItem("reportId");
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!token) {
//       next({
//         path: "/login",
//         query: { redirect: to.fullPath },
//       });
//     } else {
//       next();
//     }

//     if (to.matched.some((record) => record.meta.reportId)) {
//       if (!reportId) {
//         next({
//           path: "/plb",
//           query: { redirect: to.fullPath },
//         });
//       } else {
//         next();
//       }
//     }
//   } else {
//     next();
//   }
// });

export default router;
