import { render, fireEvent } from '@testing-library/vue';
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';

describe('<LoginPage />', () => {
  it('Should render the site logo and an intial birthday form', () => {

    const { getByText, getByPlaceholderText, getByTestId, getByAltText } = render(LoginPage);

    const logoText = getByText('Space Age');
    const logoImg = getByAltText(/planet with a party hat/i);
    const nameInput = getByPlaceholderText('name');
    const dateInput = getByTestId('date-input');
    const submitBtn = getByText('Submit');

    expect(logoText).toBeInTheDocument();
    expect(logoImg).toBeInTheDocument();
    expect(nameInput).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(submitBtn).toBeInTheDocument();
  });

  it('Should disable the submit button if one or all feilds are empty', () => {

    const { getByText, getByPlaceholderText, getByTestId } = render(
      <LoginPage />
    );


  });
});
