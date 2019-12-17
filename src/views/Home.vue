<template>
  <div class="home container-fluid">
    <div class="row">
      <div class="col">
        <h1>Mo<img src="../assets/logo.png" />ies</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <search-movies />
      </div>
    </div>
    <div class="row">
      <div class="col">
        <results />
      </div>
      <div class="col">
        <movie-details />
      </div>
    </div>
  </div>
</template>

<script>
import SearchMovies from "@/components/Search";
import MovieDetails from "@/components/Details";
import Results from "@/components/Results";

export default {
  name: "home",
  components: {
    SearchMovies,
    MovieDetails,
    Results
  }
};
</script>

<style>
h1 img {
  height: 1.2rem;
}
</style>
