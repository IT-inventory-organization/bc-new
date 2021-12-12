<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <h3 class="font-weight-bold">User Lists</h3>
      </v-col>
      <v-col cols="1">
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__blue"
          @click="a"
        >
          Buat Baru
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  components: {},
  data() {
    return {};
  },
  watch: {
    optionsTableReports: {
      handler() {
        console.log('trigger change options table reports');
      },
      deep: true,
    },
  },
  computed: {},
};
</script>

<style lang="scss" scoped></style>
