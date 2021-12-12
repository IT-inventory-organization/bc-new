<template>
  <div>
    <v-row no-gutters align="center">
      <v-col cols="11" md="">
        <div class="display-1 font-weight-bold">PLB</div>
      </v-col>
    </v-row>

    <v-row no-gutters class="mt-2">
      <v-col lg="3">
        <v-text-field placeholder="Cari" class="it-inventory-search-list-kapal">
          <template slot="prepend-inner">
            <Icon icon="akar-icons:search" class="mr-2" style="font-size: 1.5rem" />
          </template>
        </v-text-field>
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
          <v-btn class="it-inventory-actions-btn" outlined @click="viewDocPlb">
            View
          </v-btn>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
  name: 'PLB',
  components: {
    Icon,
  },
  data() {
    return {
      headers: [
        {
          text: 'No.',
          value: 'nomor',
        },
        {
          text: 'Exportir/Pengusaha PLB/PDPLB',
          value: 'exportir',
        },
        {
          text: 'Tanggal',
          value: 'tanggal',
        },
        {
          text: 'Jenis Pemberitahuan',
          value: 'jenisPemberitahuan',
        },
        {
          text: 'Jenis Dokumen',
          value: 'jenisDokumen',
        },
        {
          text: 'Nomor Dokumen',
          value: 'nomorDokumen',
        },
        {
          text: 'Voyage Kapal',
          value: 'voyageKapal',
        },
        {
          text: 'Nama Kapal',
          value: 'namaKapal',
        },
        {
          text: 'Bendera',
          value: 'bendera',
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
      return this.$store.state.plb.reports;
    },
    optionsTableReports: {
      get() {
        return this.$store.state.plb.optionsTableReports;
      },
      set(val) {
        this.$store.commit("SET_OPTIONS_TABLE_REPORTS", val);
      },
    },
  },
  methods: {
    viewDocPlb() {
      this.$router.push({ name: "PLBView" })
    }
  }
};
</script>

<style lang="scss" scoped></style>
