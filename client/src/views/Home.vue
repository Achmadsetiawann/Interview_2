<template>
  <v-container grid-list-xl>

    <!-- This Layout Landing Page Home -->
    <v-layout wrap>
      <v-flex
        md4
        v-for="(item, index) in homeResponse"
        :key="index"
        mb-2
      >

        <!-- This Component Page Home Card -->
        <v-card
          class="primary"
          height="65vh"
        >

          <!-- This Component Card Image Home -->
          <v-img
            :src="item.Poster"
            height="30vh"
          ></v-img>

          <!-- This Component Card Detail Home -->
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
      homeResponse: []
    };
  },
  mounted() {
    //this function for get fecth collection on axios
    movieApi
      .fetchMovieCollection("batman")
      .then(response => {
        this.homeResponse = response.Search;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    //this function push for get fecth single movie on axios
    singleMovie(id) {
      this.$router.push("/movie/" + id);
    }
  }
};
</script>

<style lang="stylus" scoped>
* {
  color: white;
  font-size: 0.9rem;
}
</style>
