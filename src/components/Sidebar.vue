<template>
  <div>
    <v-navigation-drawer :value="value" @input="$emit('input')" app>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ['value']
}
</script>

<style></style>
