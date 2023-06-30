<template>
  <div class="mt-2">
    <label
      v-if="label"
      :for="id"
      class="mb-1"
    >
      {{ label }}
      <span
        class="text-secondary"
        v-if="required"
      >
        *
      </span>
    </label>

    <b-form-input
      class="bg-dark text-white"
      type="text"
      :class="error ? 'border-danger' : 'border-light-custom'"
      :value="modelValue"
      :placeholder="placeholder"
      :id="id"
      @focus="handleFocus"
      @blur="handleBlur"
      @input="$emit('update:modelValue', $event)"
      v-mask="mask"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'InputText',
  data() {
    return {
      error: false
    };
  },
  props: {
    modelValue: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: () => false
    },
    placeholder: {
      type: String,
      default: () => ''
    },
    mask: {
      type: String || Number,
      default: () => ''
    }
  },
  methods: {
    handleFocus() {
      this.$emit('isFocus');
    },
    handleBlur($event: any) {
      this.$emit('isBlur');
      this.validate($event.target.value);
    },
    validate(value: any) {
      if (this.required && !value) {
        this.error = true;
        return;
      }

      this.error = false;
    }
  }
});
</script>
