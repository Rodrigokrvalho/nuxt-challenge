<template>
  <b-button
    class="w-100 font-weight-bold mt-3 bg-primary "
    :class="handleClasses()"
    @click="!disabled && $emit('handleClick')"
  >
    <slot />
  </b-button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ButtonSecondary',
  props: {
    disabled: {
      type: Boolean,
      default: () => false
    },
    isSelected: {
      default: () => false
    }
  },
  methods: {
    handleClasses() {
      let classes = '';

      if (this.disabled) {
        classes += ' disabled';
      }

      if (this.isSelected) {
        classes += ' text-secondary';
      } else {
        classes += ' text-white border-light';
      }

      return classes;
    }
  }

});
</script>
