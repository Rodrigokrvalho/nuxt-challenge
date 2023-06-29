<template>
  <div class="w-100 h-100 p-0  position-relative container">
    <CreditCardLogo
      :isVisible="isLogoVisible"
      class="logo"
    />

    <CreditCardNumbers
      :cardNumber="numbers"
      class="numbers p-0 "
    />

    <CreditCardName
      :cardName="name"
      class="name p-0 "
    />

    <CreditCardValidate
      class="validate"
      :cardValidate="cardValidate"
    />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreditCardValidate from '../atoms/CreditCardValidate.vue';
import CreditCardLogo from '../atoms/CreditCardLogo.vue';
import CreditCardNumbers from '../atoms/CreditCardNumbers.vue';
import CreditCardName from '../atoms/CreditCardName.vue';

export default Vue.extend({
  name: "CreditCardFrontFace",
  components: {
    CreditCardLogo,
    CreditCardNumbers,
    CreditCardName,
    CreditCardValidate
  },
  data() {
    return {
      isLogoVisible: true,
      numbers: '1234123412341234',
      name: 'Rodrigo S Carvalho',
      cardValidate: '1022'
    };
  },
  watch: {
    numbers() {
      if (this.numbers.length === 16) {
        this.isLogoVisible = true;
        return;
      }

      this.isLogoVisible = false;
    }
  }
});
</script>

<style scoped lang="scss">
.logo {
  position: absolute;
  top: 1.5rem;
  right: 2rem;
}

.numbers {
  position: absolute;
  top: 5rem;
  left: 0;
}

.name {
  position: absolute;
  top: 8rem;
  left: 0rem;
}

.validate {
  position: absolute;
  top: 8rem;
  left: 13.5rem;
}
</style>
