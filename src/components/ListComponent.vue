<template>
  <v-expansion-panels v-if="isLoaded" hover>
    <v-expansion-panel v-for="(item, i) in ListItems" :key="i">
      <ExpansionPanelHeaderComponent :index=i :producer=ListItems[i].ProductNameBold :product=ListItems[i].ProductNameThin></ExpansionPanelHeaderComponent>
      <ExpansionPanelBodyComponent :index=i :SystembolagetProduct=ListItems></ExpansionPanelBodyComponent>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  import ApiService from '../services/ApiService'
  import ExpansionPanelHeaderComponent from '../components/ExpansionPanelHeaderComponent'
  import ExpansionPanelBodyComponent from '../components/ExpansionPanelBodyComponent'
  export default {
    name: "ListComponent",
    data() {
      return {
        ListItems: Array,
        isLoaded: false,
      };
    },
    components: {
      ExpansionPanelHeaderComponent,
      ExpansionPanelBodyComponent
    },
    mounted() {
      ApiService.getAllBeers()
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