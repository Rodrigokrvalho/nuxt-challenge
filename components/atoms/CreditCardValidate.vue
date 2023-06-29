<template>
  <div class="container">
    <p class="label mb-3 text-muted font-weight-bold text-monospace">Validade</p>
    <div
      v-if="cardValidate"
      class="nameContainer text-capitalize text-monospace "
    >
      <span
        class="charContainer"
        v-for="(char, index) in cardValidate"
        :key="index"
      >
        <Animation>
          <span
            class="char"
            v-show="char"
          >
            {{ char }}{{ index === 1 ? '/' : '' }}
          </span>
        </Animation>
      </span>
    </div>
    <span
      v-else
      class="text-capitalize text-monospace"
    >MM/AA</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Animation from './Animation.vue';

export default Vue.extend({
  name: "CreditCardValidate",
  props: {
    cardValidate: {
      type: String,
      required: true
    }
  },
  components: { Animation }
});
</script>

<style scoped lang="scss">
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
    width: 0.65rem;

    &:nth-child(2) {
      width: 1.1rem;
    }

    .char {
      position: absolute;
      margin: 0.25rem;
    }
  }
}
</style>
