<template>
  <div class="w-100 h-100 p-0  position-relative">
    <CreditCardCVV
      class="cvv"
      :cardCVV="cardCVV"
    />

    <CreditCardLogo
      :isVisible="true"
      class="logo"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreditCardLogo from '../atoms/CreditCardLogo.vue';
import CreditCardCVV from '../atoms/CreditCardCVV.vue';

export default Vue.extend({
  name: "CreditCardBackFace",
  components: { CreditCardCVV, CreditCardLogo },
  props: {
    cardCVV: {
      type: String,
      default: () => '000'
    }
  }

});
</script>

<style scoped lang="scss">
.cvv {
  position: absolute;
  top: 4rem;
  right: 3rem;
}

.logo {
  position: absolute;
  top: 9rem;
  right: 1rem;
}
</style>
