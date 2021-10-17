<template>
  <div>
    <v-container >
      <LoginForm class="pt-4" />
    </v-container>
  </div>
</template>

<script>
import LoginForm from '../components/Login/LoginForm.vue'
export default {
  name: 'Login',
  components: {
    LoginForm
  }
}
</script>

<style></style>
