<template>
  <div>
    <header class="header_app">
      <img
        class="header_app_img"
        src="@/assets/img/logo_kuadran.png"
        alt="logo_kuadran"
      />
      <div class="header_app_title">IT Inventory</div>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <div class="header_app_menu_user" v-bind="attrs" v-on="on">
            <v-avatar color="#312E68" size="40">
              <v-icon dark>
                mdi-account-circle-outline
              </v-icon>
            </v-avatar>
            <span>User</span>
            <v-icon light>
              mdi-chevron-down
            </v-icon>
          </div>
        </template>

        <v-list>
          <v-list-item @click.prevent="handleLogout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </header>
    <nav-menu v-if="!isShowMenu" />
  </div>
</template>
<script>
import NavMenu from './NavMenu'
export default {
  props: ['isShowMenu'],
  name: 'AppBar',
  components: {
    NavMenu
  },
  data: () => ({}),
  methods: {
    handleLogout () {
      localStorage.clear()
      this.$store.commit('SET_TOKEN', '')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../../assets/styles/header.scss";
</style>
