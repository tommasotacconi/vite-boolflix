<script>
import { store } from '../store.js';
import MainCard from './MainCard.vue'

export default {
  data() {
    return {
      store,
    }
  },
  components: {
    MainCard,
  },
  methods: {
  },
  props: {
    userStatus: {
      type: Boolean,
      required: true,
    },
    apiImg: {
      type: String,
      required: true,
    }
  }
}
</script>

<template>
  <main>
    <div class="container-lg mt-4 pt-1">    
      <!-- Results for films -->
      <div class="films-wrapper card text-center">
        <div class="card-header">
          Films
        </div>
        <div class="card-body">
          <div class="row row-gap-5">
            <!-- Col with a card -->
            <div class="col-4" v-if="this.userStatus" v-for="film in store.filmsCorrespondances">
              <MainCard :operaInfo="film" :apiImg="apiImg" />
            </div>
          </div>          
        </div>
        <div class="card-footer text-body-secondary">
          Found {{ store.filmsCorrespondances.length }} films
        </div>
      </div>
      <!-- Results for tv-series -->
      <div class="series-wrapper card text-center">
        <div class="card-header">
          TV series
        </div>
        <div class="card-body">
          <div class="row row-gap-5">
            <!-- Col with a card -->
            <div class="col-4" v-if="this.userStatus" v-for="series in store.seriesCorrespondances">
              <MainCard :operaInfo="series" :apiImg="apiImg" />
            </div>
          </div>
        </div>
        <div class="card-footer text-body-secondary">
          Found  {{ store.seriesCorrespondances.length }} TV series
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .films-wrapper,
  .series-wrapper {
    margin-bottom: 60px;
  }  
</style>