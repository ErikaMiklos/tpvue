<template>
  <div class="home">
    <p v-if="visible">Maintenant vous me voyez: {{ message }}</p>
    <button v-on:click="foo()">
      ok
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    message: String,
  },
})
export default class HomeView extends Vue {
  message = "test";
  visible = true;
  foo(){
    this.visible = !this.visible;
  }
}
</script>
