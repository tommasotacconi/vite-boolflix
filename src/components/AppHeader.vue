<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <header>
    <!--     <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
          Bootstrap
        </a>
      </div>
    </nav>
    -->
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <a href="#" class="navbar-brand">
          <img src="" alt="">
          BOOLFLIX
        </a>
        <search>
          <form action="" class="d-flex" @submit.prevent="store.searchedString = ''">
            <input class="form-control w-100" type="text" v-model="store.searchedString" placeholder="Search here films or series">
            <button class="btn btn-info btn-sm ms-2" @click="$emit('startSearch')">Cerca</button>
          </form>
        </search>
      </div>  
    </nav>
  </header>
</template>

<style scoped>
  a {
    color: var(--bs-info);
    font-size: 1.6rem;
    font-weight: 600;
  }
</style>