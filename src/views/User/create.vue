<template>
  <div>
    <v-row no-gutters align="center">
      <div @click="back">
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

    <v-row no-gutters width="100%" class="mt-5">
      <v-col lg="5">
        <v-row no-gutters>
          <v-col cols="4">
            <div class="mt-2">UserName</div>
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
          <v-col cols="7">
            <v-text-field
              outlined
              dense
              v-model="name"
              placeholder="Status"
            ></v-text-field>
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
          <v-col cols="7">
            <v-text-field
              outlined
              dense
              v-model="name"
              placeholder="Status"
            ></v-text-field>
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
</template>

<script>
export default {
  name: 'NewUser',
  components: {},
  data() {
    return {};
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
      console.log('cancel');
    },
    save() {
      console.log('save');
    },
    back() {
      this.$router.push({ name: 'UserList' });
    },
  },
};
</script>

<style lang="scss" scoped></style>
