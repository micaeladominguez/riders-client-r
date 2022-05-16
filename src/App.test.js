import React from "react";
import {cleanup, render, act, fireEvent} from '@testing-library/react';
import App from './App';
import {ApolloClient, ApolloLink, ApolloProvider, createHttpLink, InMemoryCache} from "@apollo/client";
import LoginPage from "./pages/login/LoginPage";
import {MemoryRouter} from "react-router-dom";
import '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);
const customFetch = (uri, options) => {
  return fetch(uri, {
    ...options,
    headers: {
      ...options.headers,
      "auth-token": window.localStorage.getItem('token'),
    }
  });
};
const fetchLink = createHttpLink({
  uri: "http://localhost:5000/rider",
  fetch: customFetch
});

const client = new ApolloClient({
  link: ApolloLink.from([fetchLink]),
  cache: new InMemoryCache(),
});
it('renders hole application', () => {
  render(
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>);
});
it('render LoginPage', async() => {
    await act( async () => {
        const {getByTestId} = render(
            <ApolloProvider client={client}>
                <MemoryRouter>
                    <LoginPage />
                </MemoryRouter>
            </ApolloProvider>);
       const buttonSignIn = getByTestId('sign-in-bottom');
       fireEvent.click(buttonSignIn);
       expect(getByTestId('errorMessage')).toHaveTextContent('');
    });
});
