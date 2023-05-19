<template>
  <v-app-bar
    app
    elevation="2"
    color="primary"
    density="compact"
  >
    <StreamNews />
    <template v-slot:append>
      <ThemeChanger />
    </template>
  </v-app-bar>
</template>

<script>
import ThemeChanger from '../ThemeChanger.vue';
import StreamNews from './StreamNews.vue';
export default {
    component: "AppBar",
    components: { StreamNews }
}

</script>