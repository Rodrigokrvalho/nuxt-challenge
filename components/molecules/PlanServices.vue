<template>
  <div>
    <ItemRowList
      v-for="(service, index) in services"
      :key="service.service"
      :hasDivider="index + 1 < services.length"
    >
      <span>{{ service.service }}</span>
      <span v-if="service.addOnId && service.baseQuantity < service.maxAddOnQuantity">
        <InputRange
          :minValue="service.baseQuantity"
          :maxValue="service.maxAddOnQuantity"
          :modelValue="Number(payload[service.service])"
          @update:modelValue="setPayload(service.service, $event)"
        />
      </span>
      <span
        class="text-center  "
        style="width: 10rem;"
        v-else
      >
        {{ service.baseQuantity }}
      </span>
    </ItemRowList>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InputRange from '../atoms/InputRange.vue';
import { PropType } from 'vue/types';
import ItemRowList from '../atoms/ItemRowList.vue';

interface Service {
  baseQuantity: number,
  service: string,
  addOnId: number | null,
  packageQuantity: number | null,
  maxAddOnQuantity: number;
}
export default Vue.extend({
  name: "PlanServices",
  props: {
    services: {
      type: Array as PropType<Service[]>
    }
  },
  components: { ItemRowList, InputRange },
  data() {
    return {
      payload: {} as any
    };
  },
  beforeMount() {
    this.services.forEach(service => {
      this.payload[service.service] = service.baseQuantity;
    });
  },
  methods: {
    setPayload(fieldName: string, newValue: number) {
      const payload = this.payload;
      const updatedValues = { ...payload, ...{ [fieldName]: newValue } };

      this.payload = updatedValues;
      this.$emit('servicesAmount', this.payload);
    }
  },
});
</script>
