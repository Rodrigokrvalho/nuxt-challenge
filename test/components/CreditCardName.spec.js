import { shallowMount } from '@vue/test-utils';
import CreditCardName from '@/components/atoms/CreditCardName.vue';

describe('CreditCardName', () => {
  it('renders the label correctly', () => {
    const wrapper = shallowMount(CreditCardName, {
      propsData: {
        cardName: 'John Doe',
      },
    });

    expect(wrapper.find('.label').text()).toBe('Titular do Cartão');
  });

  it('renders the card name characters correctly', () => {
    const cardName = 'John Doe';
    const wrapper = shallowMount(CreditCardName, {
      propsData: {
        cardName: cardName,
      },
      stubs: {
        Animation: true,
      },
    });

    const charContainers = wrapper.findAll('.charContainer');
    expect(charContainers.length).toBe(cardName.length);


  });
});
