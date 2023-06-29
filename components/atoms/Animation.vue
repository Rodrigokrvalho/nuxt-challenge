<template>
  <div>
    <Transition name="slide">
      <slot />
    </Transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Animation',

});
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 300ms;
}

.slide-enter,
.slide-leave-to {

  transform: translateY(-1.2rem);
  opacity: 0;
}
</style>

