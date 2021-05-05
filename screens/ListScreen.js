import React, {Component} from 'react'
import {Text, View, TouchableOpacity, TextInput, Alert, StyleSheet, FlatList} from 'react-native'
import {Header, Card, Icon, ListItem} from 'react-native-elements'
import { SafeAreaProvider, initialWindowMetrics, } from 'react-native-safe-area-context'
import firebase from 'firebase'
import db from '../config'

export default class List extends Component{
  constructor(){
    super();
    this.state = {
     allItems: []
    }
  }

  getAllItems =()=>{
     var allitems = [] 
     this.requestRef = db.collection("Items")
     .onSnapshot((snapshot)=>{  
       snapshot.docs.map((doc) =>{
         var theitem = doc.data()
         theitem["doc_id"] = doc.id
         allitems.push(theitem)

       });

       this.setState({
         allItems: allitems
       });

     })
   }

  componentDidMount(){
    this.getAllItems()
  }

  keyExtractor = (item, index) => index.toString()

   renderItem = ( {item, i} ) =>{

      return(
       <ListItem
       key={i}
       title={item.name}
       leftElement={<Icon name="patient" type="font-awesome" color ='#69420E'/>}
       titleStyle={{ color: 'blue', fontWeight: 'bold' }}
       bottomDivider/>
      )
   }
  
  render(){
    return(
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <View styles = {styles.container}>
      <Header 
        backgroundColor = 'navy'
        centerComponent = {{text: 'Shopping List', style: { color: 'white', fontSize:20,fontWeight:"bold", }}}/>

     {
           ( this.state.allItems.length === 0
             ? (
               <View style={styles.subtitle}>
                 <Text style={{ fontSize: 20}}>Your item list</Text>
               </View>
             )
             :(
             <FlatList
             style = {styles.list}
             keyExtractor={this.keyExtractor}
             data={this.state.allItems}
             renderItem={this.renderItem}/>
              )
           )
     }
          
      </View>
      </SafeAreaProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 22,
    color: 'red'
  },
  list: {
    marginTop: 20,
    backgroundColor: 'red'
  }
})