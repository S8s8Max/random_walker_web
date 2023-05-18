<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col>
        index.vue
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <ChartsLineChart />
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6">
        <ChartsPieChart />
      </v-col>
      <v-col cols="3">
        <ChartsPieChart />
      </v-col>
      <v-col cols="3">
        <Card />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
</script>