import { shallowMount } from '@vue/test-utils';
import CreditCardCVV from '@/components/atoms/CreditCardCVV.vue';

describe('CreditCardName', () => {
  it('renders the label correctly', () => {
    const wrapper = shallowMount(CreditCardCVV, {
      propsData: {
        cardCVV: '123',
      },
    });

    expect(wrapper.find('.label').text()).toBe('CVV');
  });

  it('renders the card CVV characters correctly', () => {
    const cardCVV = '123';
    const wrapper = shallowMount(CreditCardCVV, {
      propsData: {
        cardCVV: cardCVV,
      },
      stubs: {
        Animation: true,
      },
    });

    const charContainers = wrapper.findAll('.charContainer');
    expect(charContainers.length).toBe(cardCVV.length);

    charContainers.wrappers.forEach((charContainer, index) => {
      const char = cardCVV.charAt(index);
      expect(charContainer.find('.char').text()).toBe(char);
    });
  });
});
