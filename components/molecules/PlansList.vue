<template>
  <div class="mx-3 my-2 bg-primary p-2 ">
    <div
      style="display: flex;"
      class="flex "
    >
      <ButtonSecondary
        v-for="plan in plans"
        :key="plan.id"
        class="m-1 "
        :isSelected="planSelected?.id === plan.id"
        @handleClick="asyncGetPlan(plan.id)"
      >
        {{ plan.name }}
      </ButtonSecondary>
    </div>
    <div class="row mt-4">

      <div class="col-sm-12 col-md-8">

        <div v-if="planSelected">
          <ListContainer :title="planSelected?.name">
            <PlanServices
              v-if="planSelected?.contents"
              :services="planSelected?.contents"
              @servicesAmount="($event) => {
                amountServicesSelected = $event;
                asyncGetAddPriceAmount();
              }"
            />
          </ListContainer>
        </div>
        <span v-else>Plano não disponível</span>
      </div>

      <div class="col-sm-12 col-md-4">
        <PlansTotal
          v-if="planSelected?.planBaseAmt"
          :planName="planSelected.name"
          :addToTotal="addToTotalPrice"
          :basePrice="planSelected.planBaseAmt"
          :amountServices="amountServicesSelected"
          @openModal="$emit('openModal', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import ListContainer from './ListContainer.vue';
import ButtonSecondary from '../atoms/ButtonSecondary.vue';
import LabelRowList from '../atoms/LabelRowList.vue';
import PlanServices from './PlanServices.vue';
import PlansTotal from './PlansTotal.vue';

import { PropType } from 'vue/types';

interface Plan {
  id: number;
  seqno: number;
  name: string;
}

export default Vue.extend({
  name: "PlansList",
  components: {
    ButtonSecondary,
    ListContainer,
    LabelRowList,
    PlanServices,
    PlansTotal
  },
  props: {
    plans: {
      type: Array as PropType<Plan[]>,
      default: () => []
    }
  },
  data() {
    return {
      planSelected: null as any,
      addToTotalPrice: 0,
      amountServicesSelected: {} as any
    };
  },
  async mounted() {
    await this.asyncGetPlan(this.plans[0].id);
  },
  methods: {
    async asyncGetPlan(id: number) {
      const response = await this.$axios.get(`/api/plan/planDetails?id=${id}`)
        .then(res => res.data.data.planInfo)
        .catch(() => null);

      this.planSelected = response;
      this.addToTotalPrice = 0;
    },
    async asyncGetAddPriceAmount() {
      const amount = this.calcAddictionalServicesAmount();
      if (amount === 0) {
        this.addToTotalPrice = 0;
        return;
      }

      const response = await this.$axios.get(`/api/plan/calcTotalPlanPrice?quantity-add=${amount}`)
        .then(res => res.data.addOnPriceAmt)
        .catch(() => null);

      this.addToTotalPrice = response;
    },
    calcAddictionalServicesAmount() {
      let servicesAdd = 0;

      this.planSelected.contents.forEach((service: any) => {
        servicesAdd += this.amountServicesSelected[service.service] - service.baseQuantity;
      });

      return servicesAdd;
    }
  }
});
</script>
