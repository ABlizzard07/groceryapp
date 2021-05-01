import React, {Component} from 'react'
import {Text, View, TouchableOpacity, TextInput, Alert, StyleSheet} from 'react-native'
import {Header} from 'react-native-elements'
import { SafeAreaProvider, initialWindowMetrics, } from 'react-native-safe-area-context'
import firebase from 'firebase'
import db from '../config'

export default class Home extends Component{
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      location: '',
      contact: ''
    }
  }
  userLogin =(email, password, location, contact, name) => {
     firebase.auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("ListScreen", email, password, location, contact, name);
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return Alert.alert(errorMessage);
      });
  }
  
  submitAnswers =(email, pass)=> {
    firebase.auth().createUserWithEmailAndPassword(email, pass)
    .then(() => {
      alert("Submitting answers!");
       db.collection('BuyerDetails').add({
         "name": this.state.name,
         "email": this.state.email,
         "pass": this.state.password,
         "location": this.state.location,
         "specialty": this.state.specialty
       })
    })
    .catch(error => {
      var code = error.code
      var message = error.message
      console.log(code);
      console.log(message);
    })
  }

  render(){
    return(
      <SafeAreaProvider>
      <View styles = {styles.container}>
      <Header 
        backgroundColor = '#636592'
        centerComponent = {{text: 'Login Here', style: { color: '#f5f4ba', fontSize:20,fontWeight:"bold", }}}/>

      <TextInput style = {styles.input} placeholder = "Full Name" onChangeText = {text => {
        this.setState({
          name: text
        })
      }}></TextInput>
  
       <TextInput style = {styles.input} placeholder = "Email" keyboardType = "email-address" onChangeText = {text => {
        this.setState({
          email: text
        })
      }}></TextInput>

       <TextInput style = {styles.input} placeholder = "Password" secureTextEntry = {true} onChangeText = {text => {
        this.setState({
          password: text
        })
      }}></TextInput>

       <TextInput style = {styles.input} placeholder = "Location" onChangeText = {text => {
        this.setState({
          location: text
        })
      }}></TextInput>

       <TextInput style = {styles.input} placeholder = "Contact(s)" onChangeText = {text => {
        this.setState({
          contact: text
        })
      }}></TextInput>

      <TouchableOpacity style = {styles.submit} onPress = {() => {
        this.submitAnswers(this.state.email, this.state.password, this.state.name, this.state.location, this.state.contact)
      }}>
      <Text style = {styles.text}>Submit</Text>
      </TouchableOpacity>

      <Text style = {styles.subtitle}>Log In</Text>

       <TextInput
            style={styles.loginInput}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={text => {
              this.setState({
                email: text
              });
            }}
          />
          <TextInput
            style={styles.loginInput}
            secureTextEntry={true}
            placeholder="Password" 
            onChangeText={text => {
              this.setState({
                password: text
              });
            }}
          />

       <TouchableOpacity style = {styles.submit} onPress = {() => {this.userLogin(this.state.email, this.state.password, this.state.location, this.state.contact, this.state.name)}}>
      <Text style = {styles.text}>Login</Text></TouchableOpacity>


      </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 32,
    marginTop: 35,
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  input: {
    borderWidth: 2,
    borderColor: '#6a4ca0',
    margin: 5,
    height: 35, 
    marginTop: 30
  },
  submit: {
    backgroundColor: '#6d2f90',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '50%',
    height: 40,
    borderRadius: 20,
    marginTop: 20
  },
  text: {
    color: 'white'
  },
  loginInput: {
    borderWidth: 2,
    borderColor: '#6a4ca0',
    margin: 10,
    height: 35,
    marginTop: 20
  },
})