<template>
  <div>
    <ul class="border-light-custom  py-2 rounded list-unstyled">
      <LabelRowList>
        {{ title }}
      </LabelRowList>

      <slot />
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LabelRowList from '../atoms/LabelRowList.vue';
import ItemRowList from '../atoms/ItemRowList.vue';

export default Vue.extend({
  name: "ListContainer",
  components: { LabelRowList, ItemRowList },
  props: {
    title: String
  }
});
</script>
