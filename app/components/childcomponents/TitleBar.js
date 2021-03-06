/*************************************************
 * Movies
 * @exports
 * TitleBar.js
 * @extends PureComponent
 * Created by Edward Sagayaraj on 27/12/2016
 * Copyright © 2018 Aasaanjobs. All rights reserved.
 *************************************************/


'use strict';

import React, { PureComponent } from 'react';
import { 
  View, 
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types'; 

import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
export default class TitleBar extends PureComponent {

  //Validstes the props with the types 
  static propTypes = {
    title: PropTypes.string,
    isBackButtonNeeded: PropTypes.bool,
  };

  _renderBackButton() {
    if (this.props.isBackButtonNeeded) {
      return(
        <View style={{position:'absolute', left: 10, flexDirection:'row'}}>
          <TouchableOpacity
            onPress={() => {
              Actions.pop();
            }}
          >
            <Icon name="chevron-left" size={30} style={{color: 'white' }} />
          </TouchableOpacity>
        </View>
        
      );
    }
  }

  render() {
    return(
      <View style={{paddingVertical: 40, alignItems:'center', justifyContent:'center'}}>
        {this._renderBackButton()}
        <Text style={{fontWeight:'bold', fontSize:18, color:'white' }}>{this.props.title}</Text>
        <View style={{position:'absolute', left: 0, right: 0, bottom: 10, height: 1, backgroundColor:'#7B7B7B'}} />
      </View>
    );
  }
}