<template>
  <div>
    <v-list-item
      v-for="(itemLogin, index) in itemsLogin"
      :key="index"
      :to="itemLogin.path"
    >
      <v-list-item-icon>
        <v-icon>{{ itemLogin.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>{{ itemLogin.title }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemsLogin: [
        { title: 'Inicio', icon: 'mdi-home', path: '/home' },
        {
          title: 'Administration',
          icon: 'mdi-badge-account-horizontal',
          path: '/administration'
        },
        { title: 'Edición', icon: 'mdi-square-edit-outline', path: '/edition' }
      ]
    }
  }
}
</script>

<style></style>
