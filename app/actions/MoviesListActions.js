/*************************************************
 * Movies
 * @exports
 * MoviesListActions.js
 * Created by Edward Sagayaraj on 27/12/2016
 * Copyright © 2018 Aasaanjobs. All rights reserved.
 *************************************************/

'use strict';

import { ACTIONS } from '../util/Actions';

/**
 * Gets the selected the movie as the select parameter and 
 * dispatches an action to set it it in the store
 * @param {*} selectedMovie Selected Movie Object from the list
 */
export const setSelectedMovie = (selectedMovie) => {
  return ((dispatch) => {
    const { SET_SELECTED_MOVIE } = ACTIONS;
    dispatch({
      type: SET_SELECTED_MOVIE,
      selectedMovie,
    });
  });
};
