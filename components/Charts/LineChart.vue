<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  RadialLinearScale,
  Filler,
  LineElement,
  LineController
} from 'chart.js'

import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale, LinearScale, BarElement,PointElement ,RadialLinearScale, LineElement, Filler, Title, Tooltip, Legend, LineController)

const data:ChartData<'line'> = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  datasets: [
    {
      label: 'Data One',
      data: [40, 39, 105, 60, 39, 110, 140, 50, 275, 167, 172, 192]
    }
  ]
};

const options:ChartOptions<'line'> = {
  responsive: true,
  maintainAspectRatio: false,
  borderColor: '#8338fc'
};
</script>

<template>
  <v-card >
    <v-card-title>
      Line Chart
    </v-card-title>
    <v-card-text class="chart-container">
      <Line :data="data" :options="options"/>
    </v-card-text>
  </v-card>
</template>