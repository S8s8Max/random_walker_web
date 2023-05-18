<template>
  <v-app>
    <Navigation />
    <AppBar />
    <v-main>
      <slot />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Navigation from "../components/layouts/Navigation.vue";
import AppBar from "../components/layouts/AppBar.vue";
</script>