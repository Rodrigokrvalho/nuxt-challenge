import { shallowMount } from '@vue/test-utils';
import InputText from '~/components/molecules/InputText';
import { BFormInput } from 'bootstrap-vue';

describe('InputText', () => {
  it('renders label when "label" prop is provided', () => {
    const label = 'Username';
    const wrapper = shallowMount(InputText, {
      propsData: {
        modelValue: '',
        label: label,
        id: 'username',
      },
      stubs: {
        'b-form-input': BFormInput,
      },
    });

    expect(wrapper.find('label').text()).toBe(label);
  });

  it('renders "*" span when "required" prop is true', () => {
    const wrapper = shallowMount(InputText, {
      propsData: {
        modelValue: '',
        label: 'Username',
        id: 'username',
        required: true,
      },
      stubs: {
        'b-form-input': BFormInput,
      },
    });

    expect(wrapper.find('.text-secondary').exists()).toBe(true);
  });

  it('emits "update:modelValue" event when input value changes', () => {
    const wrapper = shallowMount(InputText, {
      propsData: {
        modelValue: '',
        label: 'Username',
        id: 'username',
      },
      stubs: {
        'b-form-input': BFormInput,
      },
    });

    const input = wrapper.findComponent(BFormInput);
    input.setValue('JohnDoe');

    expect(wrapper.emitted('update:modelValue')).toBeTruthy();
    expect(wrapper.emitted('update:modelValue')[0]).toEqual(['JohnDoe']);
  });

  it('emits "isBlur" event when input loses focus', () => {
    const wrapper = shallowMount(InputText, {
      propsData: {
        modelValue: '',
        label: 'Username',
        id: 'username',
      },
      stubs: {
        'b-form-input': BFormInput,
      },
    });

    const input = wrapper.findComponent(BFormInput);
    input.trigger('blur');

    expect(wrapper.emitted('isBlur')).toBeTruthy();
  });

  it('applies "border-danger" class when "error" prop is true', () => {
    const wrapper = shallowMount(InputText, {
      propsData: {
        modelValue: '',
        label: 'Username',
        id: 'username',
      },
      stubs: {
        'b-form-input': BFormInput,
      },
      data() {
        return {
          error: true,
        };
      },
    });

    expect(wrapper.findComponent(BFormInput).classes()).toContain('border-danger');
  });

  it('does not apply "border-danger" class when "error" prop is false', () => {
    const wrapper = shallowMount(InputText, {
      propsData: {
        modelValue: '',
        label: 'Username',
        id: 'username',
      },
      stubs: {
        'b-form-input': BFormInput,
      },
      data() {
        return {
          error: false,
        };
      },
    });

    expect(wrapper.findComponent(BFormInput).classes()).toContain('border-light-custom');
    expect(wrapper.findComponent(BFormInput).classes()).not.toContain('border-danger');
  });

  it('sets "error" prop to false when input value is not empty and "required" prop is true', () => {
    const wrapper = shallowMount(InputText, {
      propsData: {
        modelValue: '',
        label: 'Username',
        id: 'username',
        required: true,
      },
      stubs: {
        'b-form-input': BFormInput,
      },
    });

    const input = wrapper.findComponent(BFormInput);
    input.setValue('JohnDoe');

    expect(wrapper.vm.error).toBe(false);
  });
});
