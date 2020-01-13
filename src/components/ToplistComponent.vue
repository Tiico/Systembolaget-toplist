<template>
  <v-app-bar app dark>
    <router-link id="header-title" to="/">
      <v-toolbar-title>Systembolaget Toplist</v-toolbar-title>
    </router-link>

    <!-- Fills in navbar which moves icons to the right -->
    <div class="flex-grow-1"></div>

<!--     <v-btn class="navbutton" light to="/recipes">Recipes</v-btn> -->

  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderComponent",
  data() {
    return {};
  },
  mounted() {
  },
  computed: {
  },
  methods: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbutton {
  margin-right: 0.5%;
}
#header-title {
  text-decoration: none;
  color: white;
}
</style>