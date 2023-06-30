<template>
  <li
    style="display: flex;"
    class="mt-3 px-4 pb-2 text-white-50 flex justify-content-between"
    :class="hasDivider ? 'border-bottom-light' : ''"
  >
    <slot />
  </li>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ItemRowList',
  props: {
    hasDivider: {
      default: () => false
    }
  }
});
</script>

