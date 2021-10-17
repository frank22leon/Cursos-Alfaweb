<template>
  <div>
    <h1 class="py-3">Login de Usuario</h1>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="Correo Electrónico"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :counter="20"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.min]"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Contraseña"
        @click:append="show1 = !show1"
        required
      ></v-text-field>
      <v-layout justify-center class="pt-5">
        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="buttonLogin"
        >
          INICIAR
        </v-btn>
        <div class="px-4">
          <v-btn color="error" class="mr-4 px-5" @click="reset">
            LIMPIAR FORMULARIO
          </v-btn>
        </div>

        <v-btn color="warning" @click="resetValidation">
          LIMPIAR VALIDACION
        </v-btn>
      </v-layout>
    </v-form>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data: () => ({
    valid: true,
    password: '',
    show1: false,
    rules: { required: (v) => !!v || 'Ingresa una contraseña correcta' },
    email: '',
    emailRules: [
      (v) => !!v || 'Ingresa un correo correcto',
      (v) => /.+@.+\..+/.test(v) || 'El correo ingresado no es valido'
    ]
  }),

  methods: {
    buttonLogin() {
      Firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((response) => {
          this.$store.dispatch('defineCurrentUser', {
            email: response.user.email
          })
          this.$router.push('/home')
        })
        .catch((error) => {
          console.error(error)
        })
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style></style>
