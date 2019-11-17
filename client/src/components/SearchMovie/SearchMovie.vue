<template>
  <!-- This Layout Landing Page Search Movie -->
  <v-container grid-list-xl>
    <v-layout wrap>
      <v-flex
        xs4
        v-for="(item, index) in movieResponse"
        :key="index"
        mb-2
      >
        <!-- This Layout Landing Page Search Movie Image -->
        <v-card class="primary">
          <v-img
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>

          <!-- This Layout Landing Page Search Movie Detail -->
          <v-card-title primary-title>
            <div>
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </v-card-title>

          <!-- This Layout Landing Page Search Movie Back to Movie Page-->
          <v-card-actions class="justify-center">
            <v-btn
              flat
              color="green"
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
  props: ["name"],
  data() {
    return {
      movieResponse: []
    };
  },
  methods: {
    // Methods Get Data From ID
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    },
    // Result Data ID
    fetchResult(value) {
      movieApi
        .fetchMovieCollection(value)
        .then(response => {
          if (response.Response === "True") {
            this.movieResponse = response.Search;
            this.loading = false;
            this.noData = false;
          } else {
            this.noData = true;
            this.loading = false;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  // Mount Fresh Data From Result
  mounted() {
    this.fetchResult(this.name);
  },
  watch: {
    name(value) {
      this.fetchResult(value);
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
  font-size: 0.8rem;
}
</style>
