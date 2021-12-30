<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <div class="display-1 font-weight-bold">Approval Request</div>
      </v-col>
    </v-row>

    <div class="request">
      <p class="req">Request List <span>120</span></p>
      <p class="sub">Disetujui <span>43</span></p>
      <p class="sub">Perbaikan <span>22</span></p>
    </div>

    <!-- Data Tables  -->
    <div class="it-inventory-box mt-2">
      <v-data-table
        :headers="headers"
        :items="reports"
        :options.sync="optionsTableReports"
        :server-items-length="reports.length"
        no-data-text="Data not available"
        no-results-text="Data not available"
        class="it-inventory-simple-table"
      >
        <template v-slot:[`item.no`]="props">
          {{ props.index + 1 }}
        </template>
        <template v-slot:[`item.action`]>
          <v-btn
            class="it-inventory-actions-btn"
            outlined
            @click="handleViewApproval"
          >
            View
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ApprovalRequest",
  components: {},
  data() {
    return {
      headers: [
        {
          text: "Exportir/Pengusaha PLB/PDPLB",
          value: "nama",
        },
        {
          text: "Nomor PO",
          value: "nomorPO",
        },
        {
          text: "Tanggal",
          value: "tanggal",
        },
        {
          text: "Nomor",
          value: "nomorFormBcf3315",
        },
        {
          text: "Actions",
          value: "action",
        },
      ],
    };
  },
  watch: {
    optionsTableReports: {
      handler() {
        console.log("trigger change options table reports");
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
      this.$router.push({ name: "ApprovalReview" });
    },
  },
  created() {
    this.$store.dispatch("getAllApproval");
  },
};
</script>

<style lang="scss" scoped>
.request {
  display: flex;
  margin: 2rem 0;
  p {
    margin-right: 1rem;
    font-size: 1rem;
    display: flex;
    align-items: center;
  }
  .req {
    color: #0c66cf;
    font-weight: 600;

    span {
      color: #fff;
      background: #0c66cf;
      font-size: 0.6em;
      padding: 0.5em 0.7em;
      margin-left: 0.5rem;
      border-radius: 10px;
    }
  }
  .sub {
    color: #b3b3b3;
    font-weight: 400;

    span {
      color: #fff;
      background: #b3b3b3;
      font-size: 0.6em;
      padding: 0.5em 0.7em;
      margin-left: 0.5rem;
      border-radius: 10px;
    }
  }
}
</style>
