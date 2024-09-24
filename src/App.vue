<script>
import Header from './components/AppHeader.vue';
import Main from './components/AppMain.vue';
import { store } from './store.js';
import axios from 'axios';
import '/node_modules/flag-icons/css/flag-icons.min.css';
import '/node_modules/flag-icons/css/revisioned-flag-icons/gb-flag.scss';

export default {
  data() {
    return {
      store,
      isUserSearching: false
    }
  },
  components: {
    Header,
    Main
  },
  methods: {
    triggerIsUserSearching() {
      this.isUserSearching = true;
    },
    getFilms(searchedString) {
      const searchedStringParsed = searchedString.trim().split(' ').join('+');
      axios({
        method: 'get',
        url: `https://api.themoviedb.org/3/search/movie?api_key=1fd566793335f9588cc7777244224c41&query=${searchedStringParsed}`,
        responseType: ''
        })
        .then(response => {
          console.dir(response);
          store.filmsCorrespondances = response.data.results;
          this.triggerIsUserSearching();
        });
    }
  }
}
</script>

<template>
  <Header @start-search="getFilms(store.searchedString)"/>
  <Main :userStatus="isUserSearching" />
</template>

<style lang="scss">
@use 'bootstrap/scss/bootstrap.scss';
@use 'style/general.scss';
</style>
