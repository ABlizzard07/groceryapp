import React, {Component} from 'react'
import {Text, View, TouchableOpacity, TextInput, Alert, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'
import { SafeAreaProvider, initialWindowMetrics, } from 'react-native-safe-area-context'

export default class Shop extends Component{
  constructor(){
    super();
  }

  render(){
    return(
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <View styles = {styles.container}>

        <Header 
        centerComponent = {{text: 'Shop Here', style: { color: '#42069E', fontSize:32, fontWeight:"bold", }}}/>

      </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
    
})