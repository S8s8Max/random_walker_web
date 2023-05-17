<template>
  <v-app-bar
    elevation="2"
    color="primary"
    density="compact"
  >
    <v-app-bar-title>Random Walker Web</v-app-bar-title>
    <template v-slot:append>
      <ThemeChanger />
    </template>
  </v-app-bar>
</template>

<script>
import ThemeChanger from './ThemeChanger.vue';
export default {
  component: "AppBar"
}

</script>