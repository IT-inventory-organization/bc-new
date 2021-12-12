<template>
  <div>
    <v-row no-gutters align="center">
      <div @click="back">
        <v-icon right>
          mdi-chevron-left
        </v-icon>
      </div>
      <v-col cols="11" md="">
        <h2 class="font-weight-bold">Edit User</h2>
      </v-col>
      <v-col cols="1" class="mr-3">
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
          @click="cancel"
        >
          Batal
        </button>
      </v-col>
      <v-col cols="1">
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
          @click="save"
        >
          Simpan
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'EditUser',
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
  methods: {
    cancel() {
      console.log("cancel")
    },
    save() {
      console.log("save")
    },
    back() {
      this.$router.push({ name: "UserList" })
    }
  }
};
</script>

<style lang="scss" scoped></style>
