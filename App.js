import React, {Component} from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import Home from './screens/HomeScreen'
import Shop from './screens/ShopScreen'
import List from './screens/ListScreen'


export default class App extends Component{
  render(){
    return (
      <Container/>
    );
  }
}

const Navigator = createSwitchNavigator({
   HomeScreen: {screen: Home},
   ShopScreen: {screen: Shop},
   ListScreen: {screen: List}
})

const Container = createAppContainer(Navigator);

