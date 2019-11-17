<template>
  <v-app>
    <v-app-bar
      app
      color="black"
      permanent
    >

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
        <h1
          class="font-nav hidden-xs-only"
          link="/"
        >Setiawan
        </h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
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
.font-nav {
  font-family: 'Dancing Script', cursive;
  color: white;
}

* {
  background-color: black;
  color: white;
}
</style>