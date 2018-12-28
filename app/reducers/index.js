/*************************************************
 * Movies
 * @exports
 * index.js
 * Created by Edward Sagayaraj on 28/12/2016
 * Copyright © 2018 Aasaanjobs. All rights reserved.
 *************************************************/

'use strict';

import { combineReducers } from 'redux';

import { selectedMovieState } from './MoviesReducer';

//Combines all the reducer for the store and exports to it
const rootReducer = combineReducers({
  selectedMovieState,
});
  
export default rootReducer;