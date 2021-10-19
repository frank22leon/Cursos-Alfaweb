<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="$store.state.grades"
      :items-per-page="10"
      class="elevation-3"
    >
      <template v-slot:[`item.costo`]="{ item }">
        <v-chip color="success">${{ item.costo.toLocaleString() }}</v-chip>
      </template>
      <template v-slot:[`item.estado`]="{ item }">
        <v-chip :color="item.estado ? 'info' : 'grey'">
          {{ item.estado ? 'Si' : 'No' }}
        </v-chip>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <div>
          <v-btn icon @click="editGrade(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon @click="deleteGrade(item.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import Firebase from 'firebase'
export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: 'Curso', value: 'nombre' },
        { text: 'Cupos', value: 'cupos' },
        { text: 'Inscritos', value: 'inscritos' },
        { text: 'Duración', value: 'duracion' },
        { text: 'Costo', value: 'costo' },
        { text: 'Terminado', value: 'estado' },
        { text: 'Acciones', value: 'actions' }
      ]
    }
  },
  methods: {
    deleteGrade(id) {
      this.$swal({
        title: 'Estás seguro de borrar el curso?',
        text: 'No Podrás revertir los cambios!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, quiero borrarlo!',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          Firebase.firestore()
            .collection('cursos')
            .doc(id)
            .delete()
            .then(() => {
              this.$swal('El curso se ha borrado exitosamente').then(() => {
                this.$store.dispatch('getGrades')
              })
            })
        }
      })
    },
    editGrade(item) {
      this.$router.push(`/curso/${item.id}`)
    }
  }
}
</script>

<style></style>
