import { shallowMount } from "@vue/test-utils";
import CardSection from "./CardSection.vue";

let wrapper;

describe("CardSection", () => {

  beforeEach(() => {
    wrapper = shallowMount(CardSection);
  })

  afterEach(() => {
    wrapper.destroy();
  });

  it('should render the card section', () => {
    expect(wrapper.exists()).toBe(true)
  });

  it('should render the container div', () => {
    expect(wrapper.classes()).toContain('card-section')
  });

});
