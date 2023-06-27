<template>
  <b-dropdown
    id="dropdown-1"
    text="Dropdown Button"
    class="m-md-2"
  >
    <slot />
  </b-dropdown>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'DropDown'
});
</script>

