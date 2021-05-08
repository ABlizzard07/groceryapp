import React, {Component} from 'react'
import {Text, View, TouchableOpacity, TextInput, Alert, StyleSheet, Image} from 'react-native'
import {Header} from 'react-native-elements'
import { SafeAreaProvider, initialWindowMetrics, } from 'react-native-safe-area-context'
import firebase from 'firebase'
import db from '../config'

export default class Shop extends Component{
  constructor(){
    super();
    this.state = {
       itemName: '',
       amountNeeded: '',
       whereToFind: ''
    }
  }

  submitForm =()=> {
    alert('Submitting')
    db.collection('Items').add({
      "name": this.state.itemName,
      "amount": this.state.amountNeeded,
      "place": this.state.whereToFind
    })
    this.setState({
       itemName: '',
       amountNeeded: '',
       checkupPlace: ''
    })
  }
   
  render(){
    return(
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <View styles = {styles.container}>

      <Image source={'https://www.pngkey.com/png/detail/16-164830_stethoscope-clip-personalized-stethoscope-clipart.png'} style={styles.image}/>,

      <Header 
        backgroundColor = '#636592'
        centerComponent = {{text: 'Enter an Item', style: { color: '#f5f4ba', fontSize:20,fontWeight:"bold", }}}/>

      <TextInput style = {styles.input} placeholder = "Item Name" onChangeText = {text => {
        this.setState({
          itemName: text
        })
      }}></TextInput>

      <TextInput style = {styles.input} placeholder = "Amount Needed" onChangeText = {text => {
        this.setState({
          amountNeeded: text
        })
      }}></TextInput>

      <TextInput style = {styles.input} placeholder = "Where to Buy" onChangeText = {text => {
        this.setState({
          whereToFind: text
        })
      }}></TextInput>

      <TouchableOpacity style = {styles.submit} onPress = {() => {this.submitForm()}}>
      <Text style = {styles.text}>Submit</Text></TouchableOpacity>

      </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 5,
    borderColor: 'navy',
    margin: 10,
    height: 40,
    marginTop: 30
  },
  submit: {
    backgroundColor: '#002266',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: 20
  },
  text: {
    color: 'white'
  },
  image: {
    width: 200,
    height: 200,
    marginLeft: 60,
    marginTop: 25
  }
})