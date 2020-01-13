<template>
  <v-card class="mx-auto" max-width="85%">
    <v-list v-if="isLoaded">
      <v-list-item-group mandatory color="indigo">
        <v-list-item v-for="(item, i) in ListItems" :key="i">
          <v-list-item-icon>
            <v-icon v-text="i + 1"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="ListItems[i].ProductNameBold + ' ' + (ListItems[i].ProductNameThin || '')"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
  import ToplistService from '../services/ToplistService'
  export default {
    name: "ToplistComponent",
    data() {
      return {
        ListItems: Array,
        isLoaded: false,
      };
    },
    mounted() {
      ToplistService.getToplist()
      .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response)
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