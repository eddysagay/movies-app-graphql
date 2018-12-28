/*************************************************
 * Movies
 * @exports
 * Queries.js
 * Created by Edward Sagayaraj on 28/12/2016
 * Copyright © 2018 Aasaanjobs. All rights reserved.
 *************************************************/

'use strict';

import gql from 'graphql-tag';

/**
 * Query which is used to fetch the list of movies from graphql
 */
export const RedditQuery = gql`
{
    graphQLHub
       reddit {
      subreddit(name: "movies"){
        newListings(limit: 10) {
          title
          comments {
            body
            author { 
              username
                commentKarma
            }
          }
        }
      }
    }
  }
`;