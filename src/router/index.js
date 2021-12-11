import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

/**
 * requiresAuth: true, berfungsi untuk hanya user yang sudah login yang bisa akses
 * reportId: true, berfungsi untuk hanya user yang sudah membuat report yang boleh mengakses halaman selanjutnya
 */

const routes = [
  {
    path: "/",
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
