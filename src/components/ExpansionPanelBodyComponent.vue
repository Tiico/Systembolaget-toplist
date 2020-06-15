<template>
  <v-expansion-panel-content>
    <v-row>
      <v-col cols="4">{{SystembolagetProduct[index].Category + ' - ' + SystembolagetProduct[index].Style}}</v-col>
      <v-col cols="4">{{SystembolagetProduct[index].AlcoholPercentage}} %</v-col>
      <v-col cols="4"><font-awesome-icon icon="globe"/> <a :href="'//' + 'www.systembolaget.se/' + SystembolagetProduct[index].ProductNumber" target="_blank"> Systembolaget Link</a></v-col>
    </v-row>
    <v-row>
      <v-col cols="4">{{SystembolagetProduct[index].Volume}} ml</v-col>
      <v-col cols="4">{{SystembolagetProduct[index].Price}} kr</v-col>
      <v-col cols="4" v-if="SystembolagetProduct[index].IsCompletelyOutOfStock && SystembolagetProduct[index].IsTemporarelyOutOFStock"><font-awesome-icon style="color: red" icon="circle"/> Out of stock</v-col>
      <v-col cols="4" v-else><font-awesome-icon style="color: green" icon="circle"/> In Stock</v-col>
    </v-row>
    <v-row>
      <v-col cols="6">{{SystembolagetProduct[index].Usage}}</v-col>
      <v-col cols="6">{{SystembolagetProduct[index].Taste}}</v-col>
    </v-row>
    <v-row>
      <v-col cols="6"><v-btn color="secondary" v-on:click="getUntappdRating(SystembolagetProduct[index].ProductNameBold, SystembolagetProduct[index].ProductNameThin)">Get untappd score</v-btn></v-col>
      <v-col cols="6" v-if="untappdScore"><v-rating v-model="untappdScore"></v-rating></v-col>
    </v-row>
  </v-expansion-panel-content>
</template>

<script>
  import ApiService from '../services/ApiService'
  export default {
    name: "ExpansionPanelBodyComponent",
    props: [
      'SystembolagetProduct',
      'index'
    ],
    data() {
      return {
        untappdScore: 0,
      };
    },

    computed: {},
    methods: {
      getUntappdRating: function(producer, name) {
        const fullProductName = producer.concat(' ' + name);
        ApiService.fetchUntappdRating(fullProductName)
          .then((response) => {
            this.untappdScore = response.data.rating_score;
          })
          // eslint-disable-next-line no-console
          .catch(console.log)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>