import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { Router,Route,browserHistory,IndexRoute } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './Store'
import NewsPage from './components/NewsPage'
import NewsTempl from "./components/NewsTempl";
import About from "./components/About";
import You from "./components/You";
import PostPage from "./components/PostPage";

import {ApolloProvider} from 'react-apollo'
import { HttpLink } from 'apollo-link-http';
import {ApolloClient} from 'apollo-client-preset';
import { InMemoryCache } from 'apollo-cache-inmemory';
import FloraComponent from "./components/FloraComponent";
import ImageUpload from './components/Editor'
import Test from "./components/Test";


const history = syncHistoryWithStore(browserHistory, store)

const httpLink = {
    uri: '/api/graphQL',
};

const client = new ApolloClient({
    link:  new HttpLink(httpLink),
    cache: new InMemoryCache()
});


ReactDOM.render(
    <ApolloProvider client={client}>
    <Provider store={store}>
            <Router history={history}>
                <Route path={'/'} component={App}/>
                <Route path="/Test" component={Test}/>
                <Route path="/About" component={About}/>
                <Route path="/You" component={You}/>
                <Route path="/Post" component={PostPage}/>
                <Route path="/Editor" component={FloraComponent}/>
                <Route path="/NewEditor" component={ImageUpload}/>
                <Route path={"/news/:id"} component={NewsTempl}/>
            </Router>
    </Provider>
    </ApolloProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
