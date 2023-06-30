<template>
  <div>
    <span class="text-custom text-center d-block">{{ modelValue }}</span>
    <b-form-input
      type="range"
      :min="minValue"
      :max="maxValue"
      :value="modelValue"
      @input="$emit('update:modelValue', $event)"
      :id="id"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InputRange',
  props: {
    minValue: {
      type: Number,
      default: () => 0
    },
    maxValue: {
      type: Number,
      required: true
    },
    modelValue: { type: Number },
    id: { type: String },
  }
});
</script>

<style scoped>
.text-custom {
  width: 10rem;
}
</style>
