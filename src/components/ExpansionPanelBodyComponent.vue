<template>
  <v-expansion-panel-content>
    <v-row>
      <v-col cols="4">{{ListItems[index].Category + ' - ' + ListItems[index].Style}}</v-col>
      <v-col cols="4">{{ListItems[index].AlcoholPercentage}} %</v-col>
      <v-col cols="4"><a :href="'//' + 'www.systembolaget.se/' + ListItems[index].ProductNumber" target="_blank">Systembolaget Link</a></v-col>
    </v-row>
    <v-row>
      <v-col cols="4">{{ListItems[index].Volume}} ml</v-col>
      <v-col cols="4">{{ListItems[index].Price}} kr</v-col>
      <v-col cols="4" v-if="ListItems[index].IsCompletelyOutOfStock && ListItems[index].IsTemporarelyOutOFStock">Out of stock</v-col>
      <v-col cols="4" v-else>In Stock</v-col>
    </v-row>
    <v-row>
      <v-col cols="6">{{ListItems[index].Usage}}</v-col>
      <v-col cols="6">{{ListItems[index].Taste}}</v-col>
    </v-row>
  </v-expansion-panel-content>
</template>

<script>
  export default {
    name: "ExpansionPanelBodyComponent",
    props: [
      'ListItems',
      'index'
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