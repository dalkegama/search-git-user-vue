<template>
  <div class="column">
    <div class="column is-10">
      <div v-if="userData === null">No User founds</div>
      <div v-if="userData" class="card">
        <div class="card-image">
          <figure class="image is-3by3">
            <clazy-load :src="userData.avatar_url">
              <transition name="fade">
                <img :src="userData.avatar_url" :alt="userData.name" />
              </transition>
              <transition name="fade" slot="placeholder">
                <img src="https://media.giphy.com/media/xqyqunStT1WX6/giphy.gif" alt />
              </transition>
            </clazy-load>
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{userData.name}}</p>
              <p class="subtitle is-6">@{{userData.login}}</p>
              <a :href="userData.blog">{{ userData.blog }}</a>
            </div>
          </div>
          <div class="content">
            <p>{{userData.bio}}</p>
            <b>{{userData.location}}</b>.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueClazyLoad } from "vue-clazy-load";

export default {
  name: "result",
  components: {
    "clazy-load": VueClazyLoad
  },
  props: {
    userData: {
      type: Object,
      default: () => {
        undefined;
      }
    }
  }
};
</script>

<style>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>