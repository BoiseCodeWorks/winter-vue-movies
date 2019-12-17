<template>
  <div class="results">
    RESULTS HERE
    <ol>
      <li v-for="movie in movies" :key="movie.id" @click="setActive(movie)">
        {{ movie.title }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Results",
  methods: {
    setActive(movie) {
      this.$store.dispatch("setActiveMovie", movie);
    }
  },
  computed: {
    movies() {
      return this.$store.state.searchResults;
    }
  }
};
</script>

<style>
.results {
  background-color: rgb(212, 220, 235);
}
</style>
