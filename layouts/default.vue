<template>
  <v-app>
    <Navigation />
    <AppBar />
    <slot />
  </v-app>
</template>

<script setup lang="ts">
import Navigation from "../components/Navigation.vue";
import AppBar from "../components/AppBar.vue";
</script>