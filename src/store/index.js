import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

let _api = axios.create({
  baseURL: "https://api.themoviedb.org/3/search",
  timeout: 3000
});

const apiQuery =
  "movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query=";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchResults: [],
    activeMovie: {}
  },
  mutations: {
    setSearchResults(state, searchResults) {
      state.searchResults = searchResults;
    },
    setActiveMovie(state, movie) {
      state.activeMovie = movie;
    }
  },
  actions: {
    //service methods go in actions
    async searchMovieApi({ commit, dispatch }, query) {
      let res = await _api.get(apiQuery + query);
      commit("setSearchResults", res.data.results);
    },
    setActiveMovie({ commit, dispatch }, movie) {
      commit("setActiveMovie", movie);
    }
  }
});
