<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="750px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            AGREGAR CURSO
          </v-btn>
        </template>
        <!--Titulo Dialog-->
        <v-card>
          <v-card-title>
            <span class="text-h5">Agregando Curso</span>
          </v-card-title>
          <v-container>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="nombre"
                :counter="40"
                label="Nombre"
                required
              ></v-text-field>

              <v-text-field
                v-model="imagen"
                label="URL de la Imagen del curso"
                required
              ></v-text-field>

              <v-text-field
                type="number"
                v-model.number="cupos"
                label="Cupos del Curso"
                required
              ></v-text-field>

              <v-text-field
                type="number"
                v-model.number="inscritos"
                label="Inscritos en el curso"
                required
              ></v-text-field>

              <v-text-field
                v-model="duracion"
                label="Duración del curso"
                required
              ></v-text-field>

              <v-text-field
                type="number"
                v-model.number="costo"
                label="Costo del curso"
                required
              ></v-text-field>

              <v-text-field
                v-model="codigo"
                label="Código del curso"
                required
              ></v-text-field>

              <v-textarea
                outlined
                v-model="descripcion"
                label="Descripcion del curso"
                required
              ></v-textarea>

              <v-layout justify-center class="pt-5">
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="addGrade"
                >
                  REGISTRAR
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
                <v-btn color="blue white--text" @click="dialog = false"> Cerrar </v-btn>
              </v-layout>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data: () => ({
    dialog: false,
    nombre: '',
    imagen: '',
    cupos: null,
    inscritos: null,
    duracion: '',
    costo: null,
    codigo: '',
    descripcion: '',
    estado: false
  }),

  methods: {
    addGrade() {
      if (this.inscritos > this.cupos) {
        this.$swal('Los alumnos inscritos son mayores a los cupos disponibles')
      } else {
        Firebase.firestore()
          .collection('cursos')
          .add({
            nombre: this.nombre,
            imagen: this.imagen,
            cupos: this.cupos,
            inscritos: this.inscritos,
            duracion: this.duracion,
            costo: this.costo,
            codigo: this.codigo,
            descripcion: this.descripcion,
            estado: this.estado
          })
          .then(() => this.$router.push('/home'))
      }
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
