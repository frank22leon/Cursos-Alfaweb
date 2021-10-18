<template>
  <div>
    <v-container>
      <div class="d-flex justify-center">
        <h1 class="text-center py-5 font-weight-light display-2">
          Administración
        </h1>
        <DialogCreateGrade class="pt-5 mt-5 ml-5" />
      </div>
      <Table class="pb-5"/>
      <InfoAlertSection />
    </v-container>
  </div>
</template>
<script>
import InfoAlertSection from '../components/Grades/InfoAlertSection.vue'
import Table from '../components/Grades/TableGrades.vue'
import DialogCreateGrade from '../components/Grades/DialogCreateGrade.vue'
export default {
  components: {
    Table,
    DialogCreateGrade,
    InfoAlertSection
  }
}
</script>

<style></style>
