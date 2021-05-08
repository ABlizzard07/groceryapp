import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Home from './screens/HomeScreen'
import {AppTabNavigator} from './assets/TabNavigator.js'


export default class App extends Component{
  render(){
    return (
      <Container/>
    );
  }
}

const Navigator = createSwitchNavigator({
   HomeScreen: {screen: Home},
   Tabs: {screen: AppTabNavigator}
})

const Container = createAppContainer(Navigator);

