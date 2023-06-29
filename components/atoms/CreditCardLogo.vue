<template>
  <Animation>
    <img
      v-show="isVisible"
      src="visa-logo.png"
      width="75"
    />
  </Animation>
</template>

<script lang="ts">
import Vue from 'vue';
import Animation from './Animation.vue';

export default Vue.extend({
  name: "CreditCardLogo",
  props: {
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  components: { Animation }
});
</script>

<style scoped></style>
