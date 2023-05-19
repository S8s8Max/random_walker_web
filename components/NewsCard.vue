<script setup lang="ts">
interface Props {
  newsTitle: string
  newsInfo: string
  newsContent: string
  newsImage: string,
  flag: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <v-card
    color="primary"
    class="mx-auto"
    max-width="100%"
    max-height="100%"
  >
    <v-img
      class="align-end text-white"
      height="120"
      :src="newsImage"
      cover
    >
      <v-card-title>
        {{ newsTitle }}
      </v-card-title>
    </v-img>
    <v-card-subtitle class="pt-4">
      {{ newsInfo }}
    </v-card-subtitle>
    <v-spacer></v-spacer>
    
    <v-card-actions>
      <v-btn variant="text">
        Explore
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        :icon="flag ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="flag = !flag"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="flag">
        <v-divider></v-divider>
        <v-card-text >
          <p>
            {{ newsContent }}
          </p>
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>