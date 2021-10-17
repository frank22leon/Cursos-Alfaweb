<template>
  <div>
    <v-toolbar app class="deep-purple" dark>
      <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
      <v-list-item-title class="ml-3"> Cursos AlfaWeb </v-list-item-title>
      <v-spacer></v-spacer>
      <ButtonUserLoginActive v-show="$store.state.currentUser" />
      <ButtonUserLoginDisable v-show="!$store.state.currentUser" />
    </v-toolbar>

    <v-navigation-drawer v-model="menu" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <NavigationDrawerUserLogin v-show="$store.state.currentUser"/>
          <NavigationDrawerUserUnLogin v-show="!$store.state.currentUser"/>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import ButtonUserLoginActive from '../components/Login/ButtonUserLoginActive.vue'
import ButtonUserLoginDisable from '../components/Login/ButtonUserLoginDisable.vue'
import NavigationDrawerUserLogin from '../components/NavigationDrawer/NavigationDragerUserLogin.vue'
import NavigationDrawerUserUnLogin from '../components/NavigationDrawer/NavigationDraweUserUnLogin.vue'
export default {
  name: 'Toolbar',
  data() {
    return {
      menu: false
    }
  },
  components: {
    ButtonUserLoginActive,
    ButtonUserLoginDisable,
    NavigationDrawerUserLogin,
    NavigationDrawerUserUnLogin
  }
}
</script>

<style></style>
