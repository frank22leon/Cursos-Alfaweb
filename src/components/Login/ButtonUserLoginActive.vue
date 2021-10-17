<template>
  <div>
    <v-btn rounded class="deep-purple" elevation="0" @click="buttonUnlogin">
      {{ $store.state.currentUser.email }}
      <v-icon class="pl-2"> mdi-logout</v-icon>
    </v-btn>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  methods: {
    buttonUnlogin() {
      Firebase.auth()
        .signOut()
        .then(() => {
          this.$store.dispatch('unlogCurrentUser')
          this.$router.push('/login')
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style></style>
