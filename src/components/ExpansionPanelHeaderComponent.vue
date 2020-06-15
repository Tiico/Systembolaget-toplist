<template>
  <v-expansion-panel-header>
    <b> {{index+1 + '. ' + producer + ' '  }} {{(product || '')}} </b>
  </v-expansion-panel-header>
</template>

<script>
  export default {
    name: "ExpansionPanelHeaderComponent",
    props: [
      'index',
      'producer',
      'product' 
    ],
    data() {
      return {

      };
    },

    computed: {},
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>