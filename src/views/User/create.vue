<template>
  <div>
    <v-row no-gutters align="center">
      <div @click="back" class="mr-2 ml-0">
        <v-icon right> mdi-chevron-left </v-icon>
      </div>
      <v-col cols="11" md="">
        <h2 class="font-weight-bold">New User</h2>
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
        <button class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__green" @click="save">
          Simpan
        </button>
      </v-col>
    </v-row>

    <div class="user-create">
      <v-row no-gutters width="100%" class="mt-5" align="center">
        <v-col lg="5">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Username</div>
            </v-col>
            <v-col cols="7">
              <v-text-field
                outlined
                dense
                v-model="name"
                placeholder="Nama"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>

        <v-col lg="5">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Role</div>
            </v-col>
            <v-col
              class="d-flex"
              cols="7"
              sm="7"
            >
              <v-select
                :items="roles"
                label="Role"
                dense
                append-icon="mdi-chevron-down"
                outlined
                solo
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row no-gutters width="100%">
        <v-col lg="5">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Name</div>
            </v-col>
            <v-col cols="7">
              <v-text-field
                outlined
                dense
                v-model="name"
                placeholder="Nama"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>

        <v-col lg="5">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Status</div>
            </v-col>
            <v-col
              class="d-flex"
              cols="7"
              sm="7"
            >
              <v-select
                :items="status"
                label="Status"
                append-icon="mdi-chevron-down"
                dense
                solo
                outlined
              ></v-select>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row no-gutters width="100%">
        <v-col lg="5">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Password</div>
            </v-col>
            <v-col cols="7">
              <v-text-field
                outlined
                dense
                v-model="name"
                placeholder="Password"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>

        <v-col lg="5">
          <v-row no-gutters>
            <v-col cols="4">
              <div class="mt-2">Company</div>
            </v-col>
            <v-col cols="7">
              <v-text-field
                outlined
                dense
                v-model="name"
                placeholder="Company"
              ></v-text-field>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'NewUser',
  components: {},
  data() {
    return {
      roles: ["PLB", "BC"],
      status: ["Active", "Inactive"]
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
    name: {
      get() {
        return this.$store.state.user.user.email;
      },
      set(value) {
        this.$store.commit("SET_USER", {
          key: "email",
          value,
        });
      },
    },
  },
  methods: {
    cancel() {
      this.$router.push({ name: 'UserList' });
    },
    save() {
      this.$router.push({ name: 'UserList' });
    },
    back() {
      this.$router.push({ name: 'UserList' });
    },
  },
};
</script>

<style lang="scss">
.user {
  &-create {
    margin-top: 2rem;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 1rem 0rem 1rem 2rem;
  }
}

.v-input__slot {
  box-shadow: none !important;
}
</style>
