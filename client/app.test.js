// This is just a test...
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import App from './app';

describe('App Test', () => {
  it('renders App component', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});