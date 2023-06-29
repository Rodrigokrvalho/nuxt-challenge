<template>
  <div>
    <ul class="border-light-custom px-1 py-2 rounded list-unstyled">
      <LabelRowList>
        O plano 4
      </LabelRowList>

      <ItemRowList>
        <span>
          MemberZ
        </span>
        <span>
          MemberZ
        </span>
      </ItemRowList>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import LabelRowList from '../atoms/LabelRowList.vue';
import ItemRowList from '../atoms/ItemRowList.vue';

export default Vue.extend({
  name: "ListContainer",
  data() {
    return {
      fields: ["name"],
      items: [{ name: "MemberZ", value: "1" }]
    };
  },
  components: { LabelRowList, ItemRowList }
});
</script>
