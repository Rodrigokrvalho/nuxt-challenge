<template>
  <div class="container">
    <span
      v-for="n in 16"
      :key="n"
      class="numberContainer"
    >
      <Animation>
        <span
          v-show="n > cardNumber.length"
          class="number"
        >
          *
        </span>
      </Animation>

      <Animation>
        <span
          v-show="n <= cardNumber.length && n > 12"
          class="number"
        >
          {{ cardNumber[n - 1] }}
        </span>
      </Animation>

      <Animation>
        <span
          class="number"
          v-show="n <= cardNumber.length && n <= 12"
        >
          #
        </span>
      </Animation>
    </span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Animation from './Animation.vue';

export default Vue.extend({
  name: "CreditCardNumbers",
  components: { Animation },
  props: {
    cardNumber: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;

  .numberContainer {
    height: 1rem;
    display: inline-block;
    position: relative;
    width: 1rem;

    &:nth-child(4n + 5) {
      margin-left: 0.75rem;
    }

    .number {
      position: absolute;
      margin: 0.25rem;
    }
  }
}
</style>
