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
        no-data-text="Data not available"
        no-results-text="Data not available"
        class="it-inventory-simple-table"
      >
        <template v-slot:[`item.no`]="props">
          {{ props.index + 1 }}
        </template>
        <template v-slot:[`item.action`]>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="it-inventory-actions-btn" outlined v-bind="attrs" v-on="on">
                Actions
                <v-icon right> mdi-chevron-down </v-icon>
              </v-btn>
            </template>

            <v-list class="it-inventory-actions-list">
              <v-list-item @click="handleViewApproval">
                <v-list-item-title>
                  <Icon
                    icon="fluent:apps-list-detail-20-regular"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  View
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
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
  computed: {},
  methods: {
    handleViewApproval() {
      this.$router.push({ name: 'ApprovalReview' });
    },
  },
};
</script>

<style lang="scss" scoped></style>
