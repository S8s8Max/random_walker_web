<template>
  <div>
    <Navigation />
    <v-card 
      width="auto"
    >
      <v-card-item>
      <Chart />
      </v-card-item>
    </v-card>
    <v-card
      width="auto"
    >
      <v-card-item>
      <Chart />
      </v-card-item>
    </v-card>
    <v-card
      width="auto"
    >
      <v-card-item>
      <Chart />
      </v-card-item>
    </v-card>
    <v-card
      width="auto"
    >
      <v-card-item>
      <Chart />
      </v-card-item>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import Navigation from "./components/Navigation.vue";
import Chart from "./components/Chart.vue";
</script>