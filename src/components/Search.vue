<template>
  <div>
    <div class="field box">
      <div class="control" :class="{'is-loading':loading}">
        <input
          class="input"
          type="text"
          :placeholder="placeholderMsg"
          v-model="searchTerm"
          @keyup.enter="loadUser"
        />
      </div>
    </div>
    <div class="field has-text-centered">
      <input class="button is-primary" type="button" value="Search" @click="loadUser" />
      <input v-if="searchTerm" class="button is-danger" type="button" value="Clear" @click="clear" />
    </div>
  </div>
</template>

<script>
import { data } from "../shared/data";

export default {
  data() {
    return {
      searchTerm: undefined,
      message: undefined,
      userData: undefined,
      placeholderMsg: "Who you wanna see ?",
      loading: false
    };
  },
  methods: {
    async loadUser() {
      if (this.searchTerm) {
        this.loading = true;
        this.userData = await data.getSingleGitHubUser(this.searchTerm);
        this.$emit("userData", this.userData);
        this.loading = false;
        this.placeholderMsg = "Find someone else...";
      }
    },
    clear() {
      this.$emit("clear");
      this.searchTerm = undefined;
    }
  }
};
</script>

<style lang="scss" scoped>
</style>