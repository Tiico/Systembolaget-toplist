<template>
  <v-expansion-panels v-if="isLoaded" hover>
    <v-expansion-panel v-for="(item, i) in ListItems" :key="i">
      <ExpansionPanelHeaderComponent :index=i :producer=ListItems[i].ProductNameBold :product=ListItems[i].ProductNameThin></ExpansionPanelHeaderComponent>
      <ExpansionPanelBodyComponent :index=i :ListItems=ListItems></ExpansionPanelBodyComponent>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
  import ToplistService from '../services/ToplistService'
  import ExpansionPanelHeaderComponent from '../components/ExpansionPanelHeaderComponent'
  import ExpansionPanelBodyComponent from '../components/ExpansionPanelBodyComponent'
  export default {
    name: "ToplistComponent",
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