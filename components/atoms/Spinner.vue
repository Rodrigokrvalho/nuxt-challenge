<template>
  <div
    v-if="isLoading"
    class="spinner-border text-primary spinner w-100 h-100 modal-backdrop "
    role="status"
  >
    <span class="sr-only">Loading...</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Spinner',
  props: {
    isLoading: {
      type: String,
      default: false
    }
  }
});
</script>

<style scoped>
.spinner {
  position: fixed;
  top: 45vh;
  right: 45vw;
  z-index: 1000;

}
</style>
