<template>
  <div>
    <h1 class="text-center py-5">Editar curso: {{ grade.nombre }}</h1>
    <v-container>
      <v-form
        @submit.prevent="guardarCambios"
        ref="formulario"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="grade.nombre"
          :counter="40"
          label="Nombre"
          required
        ></v-text-field>
        <v-text-field
          type="number"
          v-model.number="grade.cupos"
          label="Cupos del Curso"
          required
        ></v-text-field>
        <v-text-field
          type="number"
          v-model.number="grade.inscritos"
          label="Inscritos en el curso"
          required
        ></v-text-field>
        <v-text-field
          v-model="grade.duracion"
          label="Duración del curso"
          required
        ></v-text-field>
        <v-text-field
          type="number"
          v-model.number="grade.costo"
          label="Costo del curso"
          required
        ></v-text-field>
        <v-switch v-model="grade.estado" label="Estado"></v-switch>
        <v-layout justify-center class="pt-5">
          <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="saveChanges"
          >
            MODIFICAR
          </v-btn>
          <div class="px-4">
            <v-btn color="error" class="mr-4 px-5" @click="reset">
              LIMPIAR FORMULARIO
            </v-btn>
          </div>
          <div class="pr-5 mr-2">
            <v-btn color="warning" @click="resetValidation">
              LIMPIAR VALIDACION
            </v-btn>
          </div>
          <v-btn color="blue" @click="returnPage"> Regresar </v-btn>
        </v-layout>
      </v-form>
    </v-container>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data() {
    return {
      grade: {}
    }
  },
  beforeRouteEnter(to, from, next) {
    Firebase.firestore()
      .collection('cursos')
      .doc(to.params.id)
      .get()
      .then((document) => {
        next((vm) => {
          vm.grade = { id: document.id, ...document.data() }
        })
      })
  },
  methods: {
    saveChanges() {
      if (this.grade.inscritos > this.grade.cupos) {
        this.$swal('Los alumnos inscritos son mayores a los cupos disponibles')
      } else {
        if (this.$refs.formulario.validate()) {
          Firebase.firestore()
            .collection('cursos')
            .doc(this.grade.id)
            .update(this.grade)
            .then(() => {
              this.$router.push('/home')
            })
            .catch((error) => {
              console.error(error)
            })
        }
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    returnPage() {
      this.$router.push('/administracion')
    }
  }
}
</script>

<style></style>
