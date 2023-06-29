<template>
  <div class="container">
    <p class="label m-0 text-muted font-weight-bold text-monospace">Titular do Cartão</p>
    <div class="nameContainer m-0 p-0   text-capitalize text-monospace">
      <span
        class="charContainer m-0 "
        v-for="(char, index) in cardName"
        :key="index"
      >
        <Animation>
          <span
            class="char m-0 "
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
    cardName: {
      type: String,
      required: true
    }
  },
  components: { Animation }
});
</script>

<style scoped>
.label {
  font-size: 0.85rem;
}

.nameContainer {
  display: flex;
  justify-content: flex-start;
  align-items: center;

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
</style>
