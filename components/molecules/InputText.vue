<template>
  <div>
    <label
      v-if="label"
      :for="id"
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
      class="bg-dark text-white "
      :class="error ? 'border-danger' : 'border-light-custom'"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event)"
      @blur="validate($event.target.value)"
      placeholder="Test 231"
      :id="id"
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
    }
  },
  methods: {
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
