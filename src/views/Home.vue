<template>
  <div>
    <h1 class="pt-5 text-center font-weight-light display-2">
      Lista de Cursos
    </h1>

    <v-container>
      <v-row>
        <v-col cols="4" sm="6" lg="4">
         
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch('getGrades')
  }
}
</script>

<style></style>
