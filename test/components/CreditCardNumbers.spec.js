import { shallowMount } from '@vue/test-utils';
import CreditCardNumbers from '@/components/atoms/CreditCardNumbers.vue';
import Animation from '@/components/atoms/Animation.vue';

describe('CreditCardNumbers', () => {
  it('renders the correct number of placeholders', () => {
    const cardNumber = '1234';
    const wrapper = shallowMount(CreditCardNumbers, {
      propsData: {
        cardNumber: cardNumber,
      },
      stubs: {
        Animation: true,
      },
    });

    const placeholders = wrapper.findAll('.number');
    expect(placeholders.length).toBe(16);
  });

  it('renders the correct number of visible numbers', () => {
    const cardNumber = '1234567890123456';
    const wrapper = shallowMount(CreditCardNumbers, {
      propsData: {
        cardNumber: cardNumber,
      },
      stubs: {
        Animation: true,
      },
    });

    const visibleNumbers = wrapper.findAll('.numberContainer .number');
    expect(visibleNumbers.length).toBe(cardNumber.length);
  });

  it('renders "*" for placeholders', () => {
    const cardNumber = '1234';
    const wrapper = shallowMount(CreditCardNumbers, {
      propsData: {
        cardNumber: cardNumber,
      },
      stubs: {
        Animation: true,
      },
    });

    const placeholders = wrapper.findAll('.numberContainer .number');
    placeholders.wrappers.forEach((placeholder) => {
      expect(placeholder.text()).toBe('*');
    });
  });

  it('renders the correct numbers for visible digits', () => {
    const cardNumber = '1234567890123456';
    const wrapper = shallowMount(CreditCardNumbers, {
      propsData: {
        cardNumber: cardNumber,
      },
      stubs: {
        Animation: true,
      },
    });

    const visibleNumbers = wrapper.findAll('.numberContainer .number');
    visibleNumbers.wrappers.forEach((visibleNumber, index) => {
      const expectedNumber = cardNumber.charAt(index);
      expect(visibleNumber.text()).toBe(expectedNumber);
    });
  });

  it('renders "#" for masked digits', () => {
    const cardNumber = '1234567890123456';
    const wrapper = shallowMount(CreditCardNumbers, {
      propsData: {
        cardNumber: cardNumber,
      },
      stubs: {
        Animation: true,
      },
    });

    const maskedNumbers = wrapper.findAll('.numberContainer .number');
    maskedNumbers.wrappers.forEach((maskedNumber, index) => {
      if (index < 12) {
        expect(maskedNumber.text()).toBe('#');
      }
    });
  });
});
