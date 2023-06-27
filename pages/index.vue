<template>
  <div>

    <h1>Test</h1>
    <ButtonPrimary>
      test
    </ButtonPrimary>
    <Dropdown>
      <li>test333</li>
    </Dropdown>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ButtonPrimary from '~/components/atoms/ButtonPrimary.vue';
import Dropdown from '~/components/molecules/Dropdown.vue';

export default Vue.extend({
  name: "IndexPage",
  components: { ButtonPrimary, Dropdown }
});
</script>
