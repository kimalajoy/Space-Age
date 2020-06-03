import LoginPage from './LoginPage.vue';
import { shallowMount } from '@vue/test-utils';

let wrapper;

describe('LoginPage',() => {

  beforeEach(() => {
    wrapper = shallowMount(LoginPage, {
      data() {
        return {
          name: '',
          dateOfBirth: ''
        }
      },
      propsData: {
        isLoggedIn: false,
      }
    });
  });

  afterEach(() => {
   wrapper.destroy();
  });

  it('Should render the site logo and an intial birthday form', () => {

    const logoImg = wrapper.find('.logo-img');
    const nameInput = wrapper.find('input[type="text"]');
    const dateInput = wrapper.find('input[type="date"]');
    const submitBtn = wrapper.find('.submit-btn');

    expect(wrapper.text()).toBe("Space Age");
    expect(logoImg.exists()).toBe(true);
    expect(nameInput.exists()).toBe(true);
    expect(dateInput.exists()).toBe(true);
    expect(submitBtn.exists()).toBe(true);

  });

  it('Should disable the submit button if one or all input fields are empty', () => {
    const mockSumbit = jest.fn();
    const nameInput = wrapper.find('input[type="text"]');
    const dateInput = wrapper.find('input[type="date"]');
    const submitBtn = wrapper.find('.submit-btn');

    nameInput.setValue('');
    dateInput.setValue('');

    wrapper.trigger('sumbit');

    expect(mockSumbit).not.toHaveBeenCalled();

    nameInput.value = 'Megan';
    dateInput.value = '';

    wrapper.trigger('sumbit');

    expect(mockSumbit).not.toHaveBeenCalled();
  });

  it('Should pass down the correct data values', () => {
    const nameInput = wrapper.find('input[type="text"]');
    const dateInput = wrapper.find('input[type="date"]');
    const submitBtn = wrapper.find('.submit-btn');

    nameInput.value = 'Megan';
    dateInput.value = '2000-07-26';

    wrapper.trigger('sumbit');

    expect(nameInput.value).toBe('Megan');
    expect(dateInput.value).toBe('2000-07-26');
  });

  it('Should render a Show Me More and a New Birthday Search btns once user is logged in', () => {
    wrapper = shallowMount(LoginPage, {
      data() {
        return {
          name: '',
          dateOfBirth: ''
        }
      },
      propsData: {
        isLoggedIn: true,
      }
    });

    const showMeMoreBtn = wrapper.find('.weekly-data');
    const newSearchBtn = wrapper.find('.new-search')

    expect(showMeMoreBtn.exists()).toBe(true);
    expect(newSearchBtn.exists()).toBe(true);
  });

})
