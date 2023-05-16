
<template v-slot:append>
  <v-switch
    v-model="darkTheme"
    @update:model-value="changeTheme"
    :prepend-icon="darkTheme ? 'mdi-weather-night' : 'mdi-weather-sunny'"
    hide-details
    inset
    class="mr-auto"
  />
</template>

<script setup>
import { ref } from 'vue'
import { useTheme } from 'vuetify'

const darkTheme = ref(true)
const theme = useTheme()
theme.global.name.value = 'dark';

const changeTheme = () => {
  theme.global.name.value = darkTheme.value ? 'dark' : 'light'
}
</script>