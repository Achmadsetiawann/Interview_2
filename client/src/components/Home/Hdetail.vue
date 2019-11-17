<template>
  <v-container>
    <!-- This Layout Landing Page Home Detail / Hdetail -->
    <v-layout wrap>
      <v-flex
        xs12
        mr-1
        ml-1
      >
        <!-- This Component Image Home Detail / Hdetail -->
        <v-card class="primary">
          <v-img
            :src="singleMovie.Poster"
            aspect-ratio="2"
            width="100vw"
            height="50vh"
          ></v-img>
          <!-- This Component Detail Home Detail / Hdetail -->
          <div class="ml-2">
            <h2 class="headline mb-0">{{singleMovie.Title}}-{{singleMovie.Year}}</h2>
            <p>{{ singleMovie.Plot}} </p>
            <h3>Actors:</h3>{{singleMovie.Actors}}
            <h4>Awards:</h4> {{singleMovie.Awards}}
            <p>Genre: {{singleMovie.Genre}}</p>
          </div>
          <!-- This Button to Back Home Landing Page -->
          <v-btn
            flat
            color="success"
            @click="back"
            class="ml-2 mb-2"
          >back</v-btn>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import movieApi from "@/services/MovieApi";
export default {
  props: ["id"],

  data() {
    return {
      singleMovie: ""
    };
  },

  mounted() {
    //this function for get fetch collection on base id
    movieApi
      .fetchSingleMovie(this.id)
      .then(response => {
        this.singleMovie = response;
        this.ratings = this.singleMovie.Ratings;
        this.ratings.forEach(function(element) {
          element.Value = parseFloat(element.Value.split(/\/|%/)[0]);
          element.Value =
            element.Value <= 10 ? element.Value / 2 : element.Value / 20;
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    back() {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  color: white;
  font-size: 0.8rem;
}
</style>
