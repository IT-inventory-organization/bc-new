<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <h2 class="font-weight-bold">New User</h2>
      </v-col>
      <v-col cols="1" class="mr-3">
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
          @click="a"
        >
          Batal
        </button>
      </v-col>
      <v-col cols="1">
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
          @click="a"
        >
          Simpan
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'NewUser',
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
