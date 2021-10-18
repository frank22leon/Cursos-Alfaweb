<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="grade in $store.state.grades" :key="grade.id">
          <v-card max-width="350" class="mx-auto mb-4 elevation-2">
            <v-img height="250px" :src="grade.imagen"> </v-img>

            <v-card-text class="grey lighten-2 pb-0">
              <div class="font-weight-bold ml-8 mb-2">
                <h2 class="my-6">{{ grade.nombre }}</h2>
                <p>Información</p>
              </div>

              <v-timeline align-top dense>
                <v-timeline-item color="deep-purple lighten-1" small>
                  <div>
                    <div class="font-weight-normal">
                      <span
                        >Costo: <strong>{{ grade.costo }}</strong></span
                      >
                    </div>
                    <span
                      >Duración: <strong>{{ grade.duracion }}</strong></span
                    >
                  </div>
                </v-timeline-item>

                <v-timeline-item color="green" small>
                  <div>
                    <div class="font-weight-normal">
                      <span
                        >Cupos: <strong>{{ grade.cupos }}</strong></span
                      >
                    </div>
                    <span
                      >Completado:
                      {{ grade.estado === true ? 'Si' : 'No' }}</span
                    >
                  </div>
                </v-timeline-item>

                <v-timeline-item color="deep-purple lighten-1" small>
                  <div>
                    <div class="font-weight-normal">
                      <span>Fecha de registro:</span>
                    </div>
                    <span></span>
                  </div>
                </v-timeline-item>

                <v-timeline-item color="green" small>
                  <div>
                    <div class="font-weight-normal">
                      <span>Descripción: </span>
                    </div>
                    <span>{{ grade.descripcion }}</span>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
