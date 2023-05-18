<script setup lang="ts">
import type { ChartData, ChartOptions } from 'chart.js';

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  PointElement,
  Filler
} from 'chart.js'

import { Pie } from 'vue-chartjs'

ChartJS.register(CategoryScale, PointElement, Filler, Title, Tooltip, Legend, ArcElement)

const data:ChartData<'pie'> = {
  labels: ['A', 'B', 'C', 'D', 'E'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [33, 5, 25, 17, 20],
      backgroundColor: [
        '#fc8338',
        '#d6baf5',
        '#b279f8',
        '#ffbf47',
        '#8a38fc'
      ],
    }
  ]
};

const options:ChartOptions<'pie'> = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
      legend: {
        position: 'left',
      },
      title: {
        display: true,
        text: 'Sample Chart'
      }
    }
};
</script>

<template>
  <v-card >
    <v-card-title>
      Pie Chart
    </v-card-title>
    <v-card-text class="chart-container">
      <Pie :data="data" :options="options"/>
    </v-card-text>
  </v-card>
</template>