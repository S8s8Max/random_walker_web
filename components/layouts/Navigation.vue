<template>
  <v-navigation-drawer
    expand-on-hover
    rail
    app
  >
    <v-list>
      <v-list-item
        prepend-avatar="https://source.unsplash.com/featured/300x201"
        title="RandomWalkerWeb"
        subtitle="Be calm, then trade."
        to="/"
        color="primary"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav>
      <v-list-item 
        color="primary"
        prepend-icon="mdi-view-dashboard" 
        title="Dash Board" 
        value="Dash Board" 
        to="/dashboard"></v-list-item>
      <v-list-item 
        color="primary"
        prepend-icon="mdi-finance" 
        title="Strategy" 
        value="Strategy"
        to="/strategy"></v-list-item>
      <v-list-item 
        color="primary"
        prepend-icon="mdi-database-check-outline" 
        title="Back Test" 
        value="Back Test"
        to="/backtest"></v-list-item>
      <v-list-item 
        color="primary"
        prepend-icon="mdi-search-web" 
        title="Info" 
        value="Info"
        to="/info"></v-list-item>
      <v-list-item
        color="primary"
        prepend-icon="mdi-account" 
        title="Account" 
        value="Account"
        to="account"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  component: "Navigation"
}
</script>