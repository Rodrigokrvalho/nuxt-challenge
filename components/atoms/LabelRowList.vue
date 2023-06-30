<template>
  <li
    class=" font-weight-bold px-4 pb-2 "
    :class="hasDivider ? 'border-bottom-light' : ''"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'LabelList',
  props: {
    hasDivider: {
      default: () => false
    }
  }
});
</script>
