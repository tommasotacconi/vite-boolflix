<script>
import axios from 'axios';
import { store } from '../store.js'
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
  data() {
    return {
      store,
    }
  },
  methods: {
  },
  props: {
    userStatus: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<template>
  <main>
    <div class="container-lg mt-4 pt-1">
      <div class="row row-gap-5">
        <!-- Col with a card -->
        <div class="col-4" v-if="this.userStatus" v-for="film in store.filmsCorrespondances">
          <div class="card h-100" style="width: 18rem;">
            <div class="card-header">
              {{ film.title }}
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <span>Original title:</span>
                {{ film.original_title }}
              </li>
              <li class="list-group-item">
                <span>Original language:</span> 
                {{ film.original_language}}
              </li>
              <li class="list-group-item">
                <span>Vote:</span> 
                {{ film.vote_average }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
  .card-header {
    font-size: 1.2rem;
    font-weight: 700;
  }

  .card ul span {
    filter: invert(0.3);
  }
  
</style>