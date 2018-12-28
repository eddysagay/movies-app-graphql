/*************************************************
 * Movies
 * @exports
 * Store.js
 * Created by Edward Sagayaraj on 27/12/2016
 * Copyright © 2018 Aasaanjobs. All rights reserved.
 *************************************************/

'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import reducers from '../reducers/index';

const logger = createLogger();

/**
 * Creates a store with given reducers
 */
export default createStore(reducers, applyMiddleware(thunk, logger));