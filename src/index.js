import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider, ApolloLink,createHttpLink
} from "@apollo/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
