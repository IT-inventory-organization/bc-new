<template>
  <div>
    <v-row no-gutters align="center">
      <div @click="back">
        <v-icon right>
          mdi-chevron-left
        </v-icon>
      </div>
      <v-col cols="9" md="">
        <h2 class="font-weight-bold">Approval Reviews</h2>
      </v-col>
      <v-col cols="1" class="mr-3">
        <button
          class="it-inventory-btn-rounded it-inventory-btn__fw it-inventory-btn__dark-green"
          @click="cancel"
        >
          Disetujui
        </button>
      </v-col>
      <v-col cols="1">
        <button class="it-inventory-btn-rounded it-inventory-btn__fw it-inventory-btn__orange" @click="save">
          Perbaikan
        </button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'ApprovalReview',
  components: {},
  data() {
    return {
    };
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
    back() {
      this.$router.push({ name: "ApprovalRequest" })
    }
  }
};
</script>

<style lang="scss" scoped></style>
