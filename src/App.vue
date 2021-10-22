<template>
  <v-container>
    <Toolbar />
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>
    <Footer />
  </v-container>
</template>

<script>
import Footer from './components/Footer.vue'
import Toolbar from './components/Toolbar.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    Toolbar,
    Footer
  }
}
</script>
<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
  transition: translateX(2em);
}

.fade-enter-active,
.fade-leave-active-active {
  transition: all 1s ease;
}
</style>
