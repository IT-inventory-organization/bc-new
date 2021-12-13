<template>
  <div>
    <v-row no-gutters align="center">
      <div @click="back">
        <v-icon right>
          mdi-chevron-left
        </v-icon>
      </div>
      <v-col cols="11" md="">
        <h2 class="font-weight-bold">View User</h2>
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
        <button
          class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__green"
          @click="save"
        >
          Simpan
        </button>
      </v-col>
    </v-row>

    <div class="user-view">
      <div class="d-flex flex-row justify-space-between mb-5">
        <div>
          <h4>Afton Huels Ltd.</h4>
          <p>afton.huels</p>
        </div>
        <v-col cols="1" class="pa-0 mr-5">
          <button
            class="it-inventory-btn it-inventory-btn__fw it-inventory-btn__grey"
            @click="edit"
          >
            Edit
          </button>
        </v-col>
      </div>
      <v-row>
        <v-col cols="2">
          <p>Username</p>
          <p>Password</p>
          <p>Name</p>
        </v-col>
        <v-col cols="2">
          <p>afton.huels</p>
          <p>******</p>
          <p>Afton Huels Ltd.</p>
        </v-col>
      </v-row>
    </div>

    <div class="user-view">
      <div class="mb-2">
        <div class="mb-5">
          <p>Id Info</p>
        </div>
        <v-row>
          <v-col cols="2">
            <p>Terdaftar</p>
            <p>Aktifitas Terakhir</p>
            <p>Role</p>
            <p>Status</p>
          </v-col>
          <v-col cols="2">
            <p>01-01-2021</p>
            <p>01-01-2021</p>
            <p>PLB</p>
            <p>Active</p>
          </v-col>
        </v-row>
      </div>

      <div class="mt-5">
        <div class="mb-2">
          <p>Info Perusahaan</p>
        </div>
        <v-row>
          <v-col cols="2">
            <p>Nama Perusahaan</p>
            <p>Bidang Usaha</p>
            <p>NPWP</p>
            <p>Alamat</p>
            <p>No Telp</p>
            <p>Fax</p>
          </v-col>
          <v-col cols="10">
            <p>Afton Huels Ltd.</p>
            <p>Oil and Gas</p>
            <p>1234567890</p>
            <p>Menara Kadin Indonesia, Lt.28. Jl.H.R.Rasuna Said Blok X-5 Kav. 02/03 Jakarta 12950 PO BOX 5032 JKTM Jakarta 12700</p>
            <p>021 527 4208</p>
            <p>021 527 4208</p>
          </v-col>
        </v-row>
      </div>

      <div class="mt-5">
        <div class="mb-2">
          <p>Info Pemilik</p>
        </div>
        <v-row>
          <v-col cols="2">
            <p>Nama Pemilik/Penganggung Jawab</p>
            <p>Alamat Pemilik</p>
          </v-col>
          <v-col cols="10">
            <p>Fletcher Lindgren</p>
            <p>Menara Kadin Indonesia, Lt.28. Jl.H.R.Rasuna Said Blok X-5 Kav. 02/03 Jakarta 12950 PO BOX 5032 JKTM Jakarta 12700</p>
          </v-col>
        </v-row>
      </div>

    </div>


  </div>
</template>

<script>
export default {
  name: 'ViewUser',
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
  computed: {},
  methods: {
    edit() {
      this.$router.push({ name: "EditUser" })
    },
    back() {
      this.$router.push({ name: "UserList" })
    }
  }
};
</script>

<style lang="scss" scoped>
.user {
  &-view {
    margin-top: 2rem;
    border: 1px solid #EAEAEA;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 1rem 0rem 1rem 2rem;
    p {
      padding: 0;
      margin: 0;
    }
  }
}
</style>
