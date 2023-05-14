<template lang="pug">
v-app
  v-main(app)
    v-container
      v-card.pa-5(:color='color')
        v-card-title Hello Nuxt3
        v-card-subtitle work with Vuetify 3
        v-card-subtitle {{ color }}
        v-card-text
          v-color-picker(v-model='color')

    v-alert(color="info" value="true" icon="check_circle" dismissible) This is an alert
    v-alert(color="error" dismissible icon="warning" value="true") Something else
    v-btn(color="secondary") Click me
</template>

<script setup lang="ts">
const color = ref('#FF0000')
</script>