<template>
  <div>

    <h1>Test</h1>

    <ButtonPrimary>
      Test Test
    </ButtonPrimary>

    <ButtonSecondary>
      Test Test
    </ButtonSecondary>

    <Dropdown>
      <li>test333</li>
    </Dropdown>

    <ListContainer />

    <InputRange
      :maxValue="70"
      :modelValue="inputRange"
      @update:modelValue="inputRange = $event"
    />
    {{ inputRange }}

    <InputText
      id="test"
      label="Test"
      :required="true"
      :modelValue="inputText"
      @update:modelValue="inputText = $event"
    />

    <CreditCard :isFrontCardFaceUp="isFrontCardFaceUp" />

    <button @click="isFrontCardFaceUp = !isFrontCardFaceUp">{{ isFrontCardFaceUp }}</button>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonPrimary from '~/components/atoms/ButtonPrimary.vue';
import ButtonSecondary from '~/components/atoms/ButtonSecondary.vue';
import Dropdown from '~/components/molecules/Dropdown.vue';
import ListContainer from '~/components/molecules/ListContainer.vue';
import InputRange from '~/components/atoms/InputRange.vue';
import InputText from '~/components/molecules/InputText.vue';
import CreditCard from '~/components/organisms/CreditCard.vue';

export default Vue.extend({
  name: "IndexPage",
  components: {
    ButtonPrimary,
    Dropdown,
    ButtonSecondary,
    ListContainer,
    InputRange,
    InputText,
    CreditCard
  },
  data() {
    return {
      selected: false,
      inputRange: 0,
      inputText: '',
      isFrontCardFaceUp: true
    };
  }
});
</script>
