<template>
  <v-navigation-drawer
    expand-on-hover
    rail
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://source.unsplash.com/featured/300x201"
        title="RandomWalkerWeb"
        subtitle="Be calm, then trade."
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item prepend-icon="mdi-view-dashboard" title="Dash Board" value="Dash Board"></v-list-item>
      <v-list-item prepend-icon="mdi-finance" title="Strategy" value="Strategy"></v-list-item>
      <v-list-item prepend-icon="mdi-database-check-outline" title="Back Test" value="Back Test"></v-list-item>
      <v-list-item prepend-icon="mdi-search-web" title="Info" value="Info"></v-list-item>
      <v-list-item prepend-icon="mdi-account" title="Account" value="Account"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  component: "Navigation"
}
</script>