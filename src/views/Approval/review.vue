<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <div class="font-weight-bold">Approval Request</div>
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
};
</script>

<style lang="scss" scoped></style>
