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
              <v-list-item @click="handleViewPurchaseOrder">
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
          value: 'jenis_pemberitahuan',
        },
        {
          text: 'Jenis Dokumen',
          value: 'jenis_dokumen',
        },
        {
          text: 'Nomor Dokumen',
          value: 'nomor_dokumen',
        },
        {
          text: 'Voyage Kapal',
          value: 'voyage',
        },
        {
          text: 'Nama Kapal',
          value: 'nama_kapal',
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
  computed: {},
};
</script>

<style lang="scss" scoped></style>
