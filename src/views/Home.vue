<template>
  <div>
    <h1 class="py-5 text-center font-weight-light display-2">
      Lista de Cursos
    </h1>
        <CardGrades />
  </div>
</template>

<script>
import CardGrades from '../components/Grades/CardGrades.vue'
export default {
  mounted() {
    this.$store.dispatch('getGrades')
  },
  components: {
    CardGrades
  }
}
</script>

<style></style>
