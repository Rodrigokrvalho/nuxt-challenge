<template>
  <div>
    <FormFinalization
      :isVisible="isFormFinalizationVisible"
      :total="total"
    />
    <PlansList
      v-if="plans?.activePlans"
      :plans="plans?.activePlans"
      @openModal="($event) => {
        isFormFinalizationVisible = true;
        total = $event;
      }"
    />

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import PlansTotal from '~/components/molecules/PlansTotal.vue';
import FormFinalization from '~/components/organisms/FormFinalization.vue';
import PlansList from '~/components/molecules/PlansList.vue';
import { plansAvailable } from '~/utils/plansAvailable';

export default Vue.extend({
  name: "IndexPage",
  components: {
    FormFinalization,
    PlansList,
    PlansTotal
  },
  async asyncData({ $axios }) {
    // const response = await $axios.$get('/api/plan/plansAvailable')
    //   .then(res => res.data)
    //   .catch(err => console.error(err));

    const response = plansAvailable();

    const formatted = response?.activePlans?.sort((acc: any, prev: any) => (acc.seqno > prev.seqno ? 1 : 0));

    response.activePlans = formatted;

    return {
      isLoading: false,
      plans: response
    };
  },
  data() {
    return {
      isLoading: true,
      isFormFinalizationVisible: false,
      total: 0
    };
  }
});
</script>
