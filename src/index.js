import React from 'react';
import ReactDOM from 'react-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function getTokens() {
    return JSON.parse(window.localStorage.getItem('token'));
}

const client = new ApolloClient({
    uri: 'http://localhost:5000/rider',
    cache: new InMemoryCache(),
    request: operation => {
        const token = getTokens();
        if (token) {
            operation.setContext({
                headers: {
                    "token": token,
                }
            });
        }
    }
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
