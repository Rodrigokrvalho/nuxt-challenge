<template>
  <b-form-input
    type="range"
    :min="minValue"
    :max="maxValue"
    :value="modelValue"
    @input="$emit('update:modelValue', $event)"
    :id="id"
  />
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
