<template>
  <div>
    <v-row no-gutters align="center">
      <div @click="back">
        <v-icon right>
          mdi-chevron-left
        </v-icon>
      </div>
      <v-col cols="11" md="">
        <div class="font-weight-bold">View</div>
      </v-col>
    </v-row>
    <v-container class="d-flex justify-center">
      <div class="my-3">
        <preview-document />
      </div>
    </v-container>

  </div>
</template>

<script>
export default {
  name: 'PLBView',
  components: {
    PreviewDocument: () =>
      import("@/components/Document/PreviewDocument/index"),
  },
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
      this.$router.push({ name: "PLB" })
    }
  }
};
</script>

<style lang="scss" scoped></style>
