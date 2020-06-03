import { shallowMount } from "@vue/test-utils";
import App from './App.vue';
let wrapper;
describe('App', () => {

  beforeEach(() => {
    wrapper = shallowMount(App);
  })

  afterEach(() => {
    wrapper.destroy();
  })

  it('should render the App', () => {
    expect(wrapper.exists()).toBe(true)
  });
  
});
