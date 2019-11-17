<template>
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex
        md4
        v-for="(item, index) in wholeResponse"
        :key="index"
        mb-2
      >
        <v-card
          class="secondary"
          height="65vh"
        >
          <v-img
            :src="item.Poster"
            height="30vh"
          ></v-img>

          <v-card-title primary-title>
            <div>
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </v-card-title>

          <v-card-actions class="justify-center">
            <v-btn
              flat
              color="success"
              @click="singleMovie(item.imdbID)"
            >View</v-btn>
          </v-card-actions>

        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";

export default {
  name: "home",
  data() {
    return {
      wholeResponse: []
    };
  },
  mounted() {
    movieApi
      .fetchMovieCollection("indiana")
      .then(response => {
        this.wholeResponse = response.Search;
        this.loading = false;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  }
};
</script>

<style lang="stylus" scoped>
.v-progress-circular {
  margin: 1rem;
}

* {
  color: white;
  font-size: 0.7rem;
}
</style>
