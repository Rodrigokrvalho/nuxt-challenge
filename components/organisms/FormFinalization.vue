<template>
  <div>
    <b-modal
      id="modal1"
      title="Informe seus Dados Pessoais"
      size="lg"
      centered
      modal-class="modal-md"
      v-model="isVisible"
    >
      <form v-if="step === 0">
        <InputText
          :modelValue="formPayload.name"
          @update:modelValue="formPayload.name = $event"
          id="name"
          label="Nome"
          required
          placeholder="Digite seu Nome Completo"
        />
        <InputText
          :modelValue="formPayload.email"
          @update:modelValue="formPayload.email = $event"
          id="email"
          label="Email"
          required
          placeholder="Digite seu E-mail"
        />
        <InputTextMasked
          :modelValue="formPayload.cpfCnpj"
          @update:modelValue="formPayload.cpfCnpj = $event"
          id="cpf-cnpj"
          label="CPF/CNPJ"
          required
          placeholder="Digite seu CPF ou CNPJ"
          :mask="formPayload.cpfCnpj.length <= 14 ? '###.###.###-##' : '##.###.###/####-##'"
        />
        <InputTextMasked
          :modelValue="formPayload.telephone"
          @update:modelValue="formPayload.telephone = $event"
          id="telephone"
          label="Telefone"
          required
          placeholder="Digite seu telefone"
          mask="(##) #####-####"
        />
      </form>

      <form v-else-if="step === 1">
        <InputTextMasked
          :modelValue="formPayload.cep"
          @update:modelValue="formPayload.cep = $event"
          id="cep"
          label="CEP"
          required
          placeholder="00000-000"
          mask="#####-###"
        />

        <div class="row">
          <InputText
            :modelValue="formPayload.street"
            @update:modelValue="formPayload.street = $event"
            id="street"
            class="col-sm-8 m-0 "
            label="Rua"
            required
            placeholder="Rua"
          />
          <InputText
            :modelValue="formPayload.number"
            @update:modelValue="formPayload.number = $event"
            id="number"
            class="col-sm-4"
            label="Número"
            required
            placeholder="Nº"
          />
        </div>

        <div class="row">
          <InputText
            :modelValue="formPayload.neighborhood"
            @update:modelValue="formPayload.neighborhood = $event"
            id="neighborhood"
            label="Bairro"
            class="col-sm-4"
            required
            placeholder="Bairro"
          />
          <InputText
            :modelValue="formPayload.city"
            @update:modelValue="formPayload.city = $event"
            id="city"
            label="Cidade"
            class="col-sm-4"
            required
            placeholder="Cidade"
          />
          <InputText
            :modelValue="formPayload.state"
            @update:modelValue="formPayload.state = $event"
            id="state"
            label="Estado"
            class="col-sm-4"
            required
            placeholder="Estado"
          />
        </div>

        <InputText
          :modelValue="formPayload.complement"
          @update:modelValue="formPayload.complement = $event"
          id="complement"
          label="Complemento"
          placeholder="Coloque um complemento (Opcional)"
        />
      </form>

      <form v-else>
        <CreditCard
          :cardName="formPayload.card.name"
          :cardNumber="formPayload.card.number"
          :cardCpfCnpj="formPayload.card.cpfCnpj"
          :cardValidity="formPayload.card.validity"
          :cardCVV="formPayload.card.cvv"
          :isFrontCardFaceUp="frontCardFaceUp"
        />
        <InputTextMasked
          :modelValue="formPayload.card.number"
          @update:modelValue="formPayload.card.number = $event"
          id="card-number"
          label="Número do Cartão"
          required
          placeholder="Digite o número do seu cartão (frente do cartão)"
          mask="################"
        />
        <InputText
          :modelValue="formPayload.card.name"
          @update:modelValue="formPayload.card.name = $event"
          id="card-number"
          label="Títular do cartão"
          required
          placeholder="Nome (Igual do cartão)"
        />
        <InputTextMasked
          :modelValue="formPayload.card.cpfCnpj"
          @update:modelValue="formPayload.card.cpfCnpj = $event"
          id="card-cpf-cnpj"
          label="CPF/CNPJ do títular do cartão"
          required
          placeholder="Digite o CPF ou CNPJ do titular do cartão"
          :mask="formPayload.card.cpfCnpj.length <= 14 ? '###.###.###-##' : '##.###.###/####-##'"
        />
        <div class="row">

          <InputTextMasked
            class="col-sm-6"
            :modelValue="formPayload.card.validity"
            @update:modelValue="formPayload.card.validity = $event"
            id="card-validity"
            label="Validade"
            required
            placeholder="MM/AAAA"
            mask="##/####"
          />
          <InputTextMasked
            class="col-sm-6"
            :modelValue="formPayload.card.cvv"
            @update:modelValue="formPayload.card.cvv = $event"
            id="cvv"
            label="CVV"
            required
            placeholder="cvv"
            @isFocus="handleChangeCardFace(true)"
            @isBlur="handleChangeCardFace(false)"
            mask="###"
          />
        </div>
      </form>

      <template slot="modal-footer">
        <ButtonPrimary
          v-show="step < 2"
          @handleClick="formNextStep()"
        >
          Proximo
        </ButtonPrimary>
        <ButtonPrimary v-show="step === 2">
          Assinar Plano ({{ total }})
        </ButtonPrimary>
      </template>
    </b-modal>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import InputText from '../molecules/InputText.vue';
import InputTextMasked from '../molecules/InputTextMasked.vue';
import ButtonPrimary from '../atoms/ButtonPrimary.vue';
import CreditCard from './CreditCard.vue';

export default Vue.extend({
  name: "FormFinalization",
  components: { InputText, ButtonPrimary, CreditCard, InputTextMasked },
  props: {
    total: {
      type: Number,

    },
    isVisible: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      step: 0,
      frontCardFaceUp: true,
      formPayload: {
        name: '',
        email: '',
        cpfCnpj: '',
        telephone: '',
        cep: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        complement: '',
        card: {
          number: '',
          name: '',
          cpfCnpj: '',
          validity: '',
          cvv: ''
        }

      }
    };
  },
  methods: {
    handleChangeCardFace(turnFrontFaceDown: boolean) {
      if (!turnFrontFaceDown) {
        this.frontCardFaceUp = true;
        return;
      }

      this.frontCardFaceUp = false;
    },
    formNextStep() {
      this.step = this.step + 1;
    },
    formPreviusStep() {
      this.step = this.step - 1;
    }
  }
});
</script>
