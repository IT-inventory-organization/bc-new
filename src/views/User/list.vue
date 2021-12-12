<template>
  <div>
    <!-- Page subtitle and create new button -->
    <v-row no-gutters align="center">
      <v-col cols="11">
        <h2 class="font-weight-bold">User Lists</h2>
      </v-col>
      <v-col cols="1">
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__blue"
          @click="createNewUser"
        >
          Buat Baru
        </button>
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
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="it-inventory-actions-btn" outlined v-bind="attrs" v-on="on">
                Actions
                <v-icon right> mdi-chevron-down </v-icon>
              </v-btn>
            </template>

            <v-list class="it-inventory-actions-list">
              <v-list-item @click="viewUser">
                <v-list-item-title>
                  <Icon
                    icon="fluent:apps-list-detail-20-regular"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  View
                </v-list-item-title>
              </v-list-item>
              <v-list-item @click="editUser">
                <v-list-item-title>
                  <Icon
                    icon="fluent:apps-list-detail-20-regular"
                    class="v-icon--left it-inventory-action-list__icon"
                  />
                  Edit
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
import { Icon } from '@iconify/vue2'
export default {
  name: 'UserList',
  components: {
    Icon
  },
  data() {
    return {
      headers: [
        {
          text: 'Id.',
          value: 'id',
        },
        {
          text: 'Username',
          value: 'username',
        },
        {
          text: 'Nama',
          value: 'nama',
        },
        {
          text: 'Aktifitas Terakhir',
          value: 'lastActivity',
        },
        {
          text: 'Role',
          value: 'role',
        },
        {
          text: 'Status',
          value: 'status',
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
    createNewUser() {
      this.$router.push({ name: "NewUser"})
    },
    viewUser() {
      this.$router.push({ name: "ViewUser"})
    },
    editUser() {
      this.$router.push({ name: "EditUser"})
    },
  },
};
</script>

<style lang="scss" scoped></style>
