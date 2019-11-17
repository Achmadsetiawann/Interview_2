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

      <!-- Navbar item Github -->
      <v-btn
        href="https://github.com/Achmadsetiawann/Interview_2"
        target="_blank"
        text
      >
        <v-icon
          large
          color="orange darken-2"
          class="shrink ml-3 mr-3"
          style="cursor: pointer"
          contain
          link="/"
        >mdi-github-face</v-icon>
        <h3 class="nav mr-2">Github</h3>

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
  components: {}
};
</script>


<style lang="stylus" scoped>
.nav {
  font-family: 'Dancing Script', cursive;
}

* {
  background-color: black;
  color: white;
}
</style>