<template>
  <v-expansion-panels v-if="isLoaded" hover="true">
    <v-expansion-panel v-for="(item, i) in ListItems" :key="i">
      <v-expansion-panel-header>
        {{i+1 + '. ' + ListItems[i].ProductNameBold + ' ' + (ListItems[i].ProductNameThin || '')}}
      </v-expansion-panel-header>
      <v-expansion-panel-content>
          <v-row>
            <v-col cols="4">{{ListItems[i].Category + ' - ' + ListItems[i].Style}}</v-col>
            <v-col cols="4">{{ListItems[i].AlcoholPercentage}} %</v-col>
            <v-col cols="4"><a :href="'//' + 'www.systembolaget.se/' + ListItems[i].ProductNumber" target="_blank">Systembolaget Link</a></v-col>
          </v-row>
          <v-row>
            <v-col cols="4">{{ListItems[i].Volume}} ml</v-col>
            <v-col cols="4">{{ListItems[i].Price}} kr</v-col>
            <v-col cols="4" v-if="ListItems[i].IsCompletelyOutOfStock && ListItems[i].IsTemporarelyOutOFStock">Out of stock</v-col>
            <v-col cols="4" v-else>In Stock</v-col>
          </v-row>
          <v-row>
            <v-col cols="6">{{ListItems[i].Usage}}</v-col>
            <v-col cols="6">{{ListItems[i].Taste}}</v-col>
          </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  import ToplistService from '../services/ToplistService'
  export default {
    name: "ToplistComponent",
    data() {
      return {
        ListItems: Array,
        isLoaded: false,
        date: null,
        trip: {
          name: '',
          location: null,
          start: null,
          end: null,
        },
        locations: ['Australia', 'Barbados', 'Chile', 'Denmark', 'Equador', 'France'],
      };
    },
    mounted() {
      ToplistService.getToplist()
        .then((response) => {
          this.ListItems = response.data
          this.isLoaded = true
        })
        // eslint-disable-next-line no-console
        .catch(console.log)
    },
    computed: {},
    methods: {}
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