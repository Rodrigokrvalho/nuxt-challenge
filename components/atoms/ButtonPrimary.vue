<template>
  <b-button class="w-100 ">
    <slot />
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonPrimary'
});
</script>
