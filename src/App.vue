<template>
  <div>
    <v-app>
      <core-app-bar></core-app-bar>

      <v-main>
        <v-container fluid class="it-inventory-container">
          <router-view />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
    components: {
    CoreAppBar: () => import("@/components/base/AppBar"),
  },


  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./assets/styles/index.scss";
</style>
