<template>
  <div
    class="container"
    :style="{ transform: cardRotation }"
  >
    <div class="frontface">
      <CreditCardFrontFace
        :isLogoVisible="cardNumber.length === 16"
        :numbers="cardNumber"
        :name="cardName"
        :cardValidate="cardValidity"
      />
    </div>
    <div class="backface">
      <CreditCardBackFace :cardCVV="cardCVV" />
    </div>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CreditCardFrontFace from '../molecules/CreditCardFrontFace.vue';
import CreditCardBackFace from '../molecules/CreditCardBackFace.vue';

export default Vue.extend({
  name: 'CreditCard',
  props: {
    isFrontCardFaceUp: {
      type: Boolean,
    },
    cardName: {
      type: String,
      required: true
    },
    cardNumber: {
      type: String,
      required: true
    },
    cardValidity: {
      type: String,
      required: true
    },
    cardCVV: {
      type: String,
      required: true
    }
  },
  components: {
    CreditCardFrontFace,
    CreditCardBackFace
  },
  data() {
    return {
      isLogoVisible: true,
      cardRotation: 'rotateY(0deg)'
    };
  },
  watch: {
    isFrontCardFaceUp(newValue) {

      this.setCardRotation(newValue);
    }
  },
  methods: {
    setCardRotation(turnFrontFaceUp: boolean) {

      if (turnFrontFaceUp) {
        this.cardRotation = 'rotateY(0deg)';
        return;
      }

      this.cardRotation = 'rotateY(180deg)';
    }
  }
});
</script>

<style scoped lang="scss">
.container {
  position: relative;
  margin: 0 1rem;
  background: #050c29;
  width: 22rem;
  height: 13rem;
  border-radius: 10px;

  transform-style: preserve-3d;
  transition: transform 600ms;

  .frontface {
    backface-visibility: hidden;
  }

  .backface {
    position: absolute;
    transform: rotateY(180deg);
    backface-visibility: hidden;
  }
}
</style>
