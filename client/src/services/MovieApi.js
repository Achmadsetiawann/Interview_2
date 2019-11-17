import axios from "axios";

export default {
  // Get Movie Collection
  fetchMovieCollection(name) {
    return axios.get("&s=" + name).then(response => {
      return response.data;
    });
  },

  // Fetch Data From detail Movie
  fetchSingleMovie(id) {
    return axios.get("&i=" + id).then(response => {
      return response.data;
    });
  }
};
