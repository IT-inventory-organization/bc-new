<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <div class="display-1 font-weight-bold">Approval Request</div>
      </v-col>
    </v-row>

    <!-- Data Tables  -->
    <div class="it-inventory-box mt-2">
      <v-data-table
        :headers="headers"
        :items="reports.data"
        :options.sync="optionsTableReports"
        :server-items-length="reports.data_size"
        no-data-text="Data not available"
        no-results-text="Data not available"
        class="it-inventory-simple-table"
      >
        <template v-slot:[`item.no`]="props">
          {{ props.index + 1 }}
        </template>
        <template v-slot:[`item.action`]>
          <v-btn class="it-inventory-actions-btn" outlined @click="handleViewApproval">
            View
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ApprovalRequest',
  components: {},
  data() {
    return {
      headers: [
        {
          text: 'Exportir/Pengusaha PLB/PDPLB',
          value: 'exportir',
        },
        {
          text: 'Nomor PO',
          value: 'nomor_po',
        },
        {
          text: 'Tanggal',
          value: 'tanggal',
        },
        {
          text: 'Nomor',
          value: 'nomor',
        },
        {
          text: 'Actions',
          value: 'action',
        },
      ],
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
  computed: {
    reports() {
      return this.$store.state.approval.reports;
    },
    optionsTableReports: {
      get() {
        return this.$store.state.approval.optionsTableReports;
      },
      set(val) {
        this.$store.commit("SET_OPTIONS_TABLE_REPORTS", val);
      },
    },
  },
  methods: {
    handleViewApproval() {
      this.$router.push({ name: 'ApprovalReview' });
    }
  },
};
</script>

<style lang="scss" scoped></style>
