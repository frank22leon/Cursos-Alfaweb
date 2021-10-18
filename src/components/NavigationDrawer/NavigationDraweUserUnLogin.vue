<template>
  <div>
    <v-list-item
      v-for="(itemUnLogin, index) in itemsUnLogin"
      :key="index"
      :to="itemUnLogin.path"
    >
      <v-list-item-icon>
        <v-icon>{{ itemUnLogin.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ itemUnLogin.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsUnLogin: [
        {
          title: 'Registrarse',
          icon: 'mdi-account-box',
          path: '/registration'
        },
        { title: 'Login', icon: 'mdi-login', path: '/login' }
      ]
    }
  }
}
</script>

<style></style>
