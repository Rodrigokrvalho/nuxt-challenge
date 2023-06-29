<template>
  <b-button
    class="w-100 font-weight-bold mt-3 bg-primary"
    :class="isSelected ? ' text-secondary' : 'text-white border-light'"
    @click="$emit('handleClick')"
  >
    <slot />
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue';

interface Props {
  isSelected?: boolean;
}

export default Vue.extend({
  name: 'ButtonSecondary',
  props: {
    isSelected: {
      default: () => false
    }
  },

});
</script>
