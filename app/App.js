/*************************************************
 * Movies
 * @exports
 * App.js
 * Created by Edward Sagayaraj on 27/12/2016
 * Copyright © 2018 Aasaanjobs. All rights reserved.
 *************************************************/

'use strict';

import React, {Component} from 'react';
import {name as appName} from '../app.json';
import { Provider } from 'react-redux';
import {AppRegistry} from 'react-native';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { URL } from './util/URL';

import Store from './store/Store';
import RouteNavigator from './index';

const { GRAPHQL_URL } = URL;
const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: GRAPHQL_URL}),
});

/**
 * Sets the store and client to the providers
 */
export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <ApolloProvider client={client}>
          <RouteNavigator />
        </ApolloProvider>
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => App);