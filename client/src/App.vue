<template>
  <v-app>

    <!-- Navbar item -->
    <v-app-bar
      app
      color="black"
      permanent
    >

      <!-- Navbar item logo & Font Setiawan -->
      <div class="d-flex align-center">
        <v-icon
          large
          color="orange darken-2"
          class="shrink ml-3 mr-3"
          style="cursor: pointer"
          contain
          link="/"
        >
          mdi-atlassian
        </v-icon>
        <h2 class="nav hidden-xs-only">Setiawan
        </h2>
      </div>

      <v-spacer></v-spacer>

      <!-- Navbar Search Item Navbar -->
      <v-text-field
        hide-details
        label="Movie Name"
        solo-inverted
        v-model='searchString'
        class="secondary mt-2"
      >
      </v-text-field>
      <v-btn
        :disabled="!dataAvailable"
        @click="searchMovie"
      >
        <span class="mr-2">Search</span>
      </v-btn>

      <!-- Navbar item Github -->
      <v-btn
        href="https://github.com/Achmadsetiawann/Interview_2"
        target="_blank"
        text
      >
        <v-icon
          large
          color="orange darken-2"
          class="shrink ml-3 mr-3 "
          style="cursor: pointer"
          contain
          link="/"
        >mdi-github-face</v-icon>
        <h3 class="nav mr-2 hidden-xs-only">Github</h3>

      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      searchString: ""
    };
  },
  methods: {
    searchMovie() {
      this.$router.push("/search/" + this.searchString);
      this.searchString = "";
    }
  },
  computed: {
    dataAvailable() {
      return this.searchString !== null && this.searchString !== "";
    }
  }
};
</script>
>


<style lang="stylus" scoped>
.nav {
  font-family: 'Dancing Script', cursive;
}

* {
  background-color: black;
  color: white;
}
</style>