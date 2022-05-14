import Vue from 'vue';
import { shallowMount } from '@vue/test-utils';
import Counter from '@/components/Counter.vue';
import { expect } from 'chai';

describe('Counter.vue', () => {
  it('increments count when button is clicked', async () => {
    const wrapper = shallowMount(Counter);
    wrapper.find('button').trigger('click');
    await Vue.nextTick();
    expect(wrapper.find('div').text()).to.include('1');
  });
});
