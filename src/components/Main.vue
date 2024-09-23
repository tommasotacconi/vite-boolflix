<script>
export default {
  data() {
    return {
      
    }
  }
}
</script>

<template>
  <main>
    <div class="container-lg mt-4 pt-1">
      <div class="row">
        <!-- Col with a card -->
        <div class="col-4" v-for="film in 3">
          <div class="card" style="width: 18rem;">
            <div class="card-header">
              Featured
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
  
</style>