<template>
  <div class="container">
    <p class="label m-0 text-muted font-weight-bold text-monospace">CVV</p>
    <div class="nameContainer m-0 px-2 py-1  text-capitalize text-monospace bg-white rounded text-dark   ">
      <span
        class="charContainer m-0 mb-2  "
        v-for="(char, index) in cardCVV"
        :key="index"
      >
        <Animation>
          <span
            class="char m-0"
            v-show="char"
          >
            {{ char }}
          </span>
        </Animation>
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Animation from './Animation.vue';

export default Vue.extend({
  name: "CreditCardName",
  props: {
    cardCVV: {
      type: String,
      required: true
    }
  },
  components: { Animation }
});
</script>

<style scoped>
.container {
  position: relative;

  .label {
    font-size: 0.85rem;
  }

  .nameContainer {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 3rem;
    height: 2rem;

    .charContainer {
      height: 1rem;
      display: inline-block;
      position: relative;
      width: 0.6rem;

      .char {
        position: absolute;
        margin: 0.25rem;
      }
    }
  }
}
</style>
