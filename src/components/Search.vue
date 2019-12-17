<template>
  <div class="search">
    <form @submit.prevent="search">
      <input type="text" placeholder="Search..." v-model="query" />
      <button type="submit">Search</button>
    </form>
    <h2>Found: {{ results }}</h2>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: ""
    };
  },
  methods: {
    search() {
      debugger;
      this.$store.dispatch("searchMovieApi", this.query);
    }
  },
  computed: {
    results() {
      return this.$store.state.searchResults.length;
    }
  }
};
</script>

<style>
.search {
  background-color: rgb(226, 245, 228);
}
</style>
