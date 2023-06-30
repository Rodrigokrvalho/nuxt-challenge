<template>
  <b-button
    :type="type"
    class="w-100 font-weight-bold "
    @click="$emit('handleClick')"
  >
    <slot />
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonPrimary',
  props: {
    type: {
      type: String,
      default: () => 'button'
    }
  }
});
</script>
