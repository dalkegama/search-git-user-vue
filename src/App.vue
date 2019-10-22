<template>
  <div class="container">
    <section class="column is-half is-offset-one-quarter">
      <Search @userData="handlerUserData" @clear="clearData" />
    </section>
    <section class="column is-4">
      <Results class="has-text-centered" :userData="user" />
    </section>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import Results from "@/components/Results.vue";

export default {
  name: "app",
  data() {
    return {
      user: undefined
    };
  },
  components: {
    Search,
    Results
  },
  methods: {
    handlerUserData(data) {
      this.user = data;
    },
    clearData() {
      this.user = undefined;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
