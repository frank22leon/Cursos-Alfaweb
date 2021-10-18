<template>
  <div>
    <v-alert outlined icon="mdi-account-group" color="purple">
      Cantidad total de alumnos permitidos:
      <strong>{{ $store.getters.totalNumberOfStudentsAllowed }}</strong>
      alumnos
    </v-alert>
    <v-alert outlined icon="mdi-account-multiple-check" color="cyan">
      Cantidad total de alumnos inscritos:
      <strong>{{ $store.getters.totalNumberOfStudentsEnrolled }}</strong>
      alumnos
    </v-alert>

    <v-alert outlined icon="mdi-account-clock" color="deep-orange"
      >Cantidad total de cupos restantes:
      <strong>{{ $store.getters.totalNumberOfSeatsRemaining }}</strong>
      alumnos</v-alert
    >
    <v-alert outlined icon="mdi-cancel" color="error"
      >Cantidad total de cursos terminados:
      <strong>{{ $store.getters.cantidadTotalCursosTerminados }}</strong>
      cursos.</v-alert
    >
    <v-alert outlined icon="mdi-bell-ring" color="brown"
      >Cantidad total de cursos activos:
      <strong>{{ $store.getters.cantidadTotalCursosActivos }}</strong>
      cursos.</v-alert
    >
    <v-alert outlined icon="mdi-bell-ring" color="success"
      >Cantidad total de cursos:
      <strong>{{ $store.state.grades.length }}</strong> cursos.</v-alert
    >
  </div>
</template>

<script>
export default {}
</script>

<style></style>
