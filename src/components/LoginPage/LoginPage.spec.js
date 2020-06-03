import LoginPage from './LoginPage.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper;

describe('LoginPage',() => {

  // beforeEach(() => {
  //   wrapper = shallowMount(LoginPage);
  // });
  //
  // afterEach(() => {
  //  wrapper.destroy();
  // });

  it('Should render the site logo and an intial birthday form', () => {
    wrapper = shallowMount(LoginPage);

    const logoImg = wrapper.find('.logo-img');
    const nameInput = wrapper.find('input[type="text"]');
    const dateInput = wrapper.find('input[type="date"]');
    const submitBtn = wrapper.find('.submit-btn');

    expect(wrapper.text()).toBe("Space Age");
    expect(logoImg.exists()).toBe(true);
    expect(nameInput.exists()).toBe(true);
    expect(dateInput.exists()).toBe(true);
    expect(submitBtn.exists()).toBe(true);

    wrapper.destroy();
  });

  // it('Should disable the submit button if one or all input fields are empty', () => {
  //   const nameInput = wrapper.find('input[type="text"]');
  //   const dateInput = wrapper.find('input[type="date"]');
  //   const submitBtn = wrapper.find('.submit-btn');
  //   // const formSubmittedCalls = wrapper.emitted('login-handler');
  //   //
  //   // wrapper.trigger('sumbit');
  //   //
  //   // expect(formSubmittedCalls).toHaveLength(0);
  //
  //
  //
  //
  // });
})
