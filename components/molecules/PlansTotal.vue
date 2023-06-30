<template>
  <div class="bg-custom">
    <ListContainer title="Sua escolha">
      <div class="px-2 py-3 ">

        <ItemRowList>
          <span>{{ planName }}</span>
          <span>{{ format(basePrice) }}</span>
        </ItemRowList>
        <ItemRowList v-if="addToTotal > 0">
          <span>+ {{ amountServices['DOMAIN'] - 1 }} Dominios</span>
          <span>{{ format(addToTotal) }}</span>
        </ItemRowList>
        <ItemRowList class="font-weight-bold  bg-custom-lightier rounded ">
          <span class=" mt-1">Total</span>
          <span class=" mt-1">{{ format(addToTotal + basePrice) }}</span>
        </ItemRowList>
        <ButtonPrimary
          @handleClick="$emit('openModal', addToTotal + basePrice)"
          class="mt-2"
        >
          Assinar Plano
        </ButtonPrimary>
      </div>
    </ListContainer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonPrimary from '../atoms/ButtonPrimary.vue';
import ListContainer from './ListContainer.vue';
import ItemRowList from '../atoms/ItemRowList.vue';
import { formatToCurrencyBR } from '~/utils/formatNumbers';

export default Vue.extend({
  name: "PlansTotal",
  props: {
    planName: {
      type: String,
      required: true
    },
    addToTotal: {
      type: Number,
      default: () => 0
    },
    basePrice: {
      type: Number,
      required: true
    },
    amountServices: {
      type: Object,
    }
  },
  components: { ListContainer, ItemRowList, ButtonPrimary },
  methods: {
    format(number: number) {
      return formatToCurrencyBR(number);
    }
  }

});
</script>

<style scope>
.bg-custom {
  background: #37394b;
}

.bg-custom-lightier {
  background: #44475c;
}
</style>
