<template>
  <div class="details">
    <img
      height="50%"
      :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
      alt=""
    />
  </div>
</template>

<script>
export default {
  name: "Details",
  computed: {
    movie() {
      return this.$store.state.activeMovie;
    }
  }
};
</script>

<style>
.details {
  background-color: rgb(245, 226, 226);
}
</style>
