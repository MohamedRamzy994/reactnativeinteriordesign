import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, Image, Pressable, SafeAreaView, StyleSheet, 
  Text, TextInput, View } from 'react-native';

import logo  from "./assets/favicon.png";
export default function LoginComponent(props) {
    const [first, setfirst] = useState();
  return (
    <SafeAreaView style={styles.container}>

    <Image source={{
      uri:'https://cdn3.iconfinder.com/data/icons/education-209/64/graduation-square-academic-cap-school-256.png',
      width:100,
      height:100
    }}></Image>
      <Text style={{marginTop:30}}>Login with you Account  !</Text>
      <View style={styles.container}>
      
      <TextInput textContentType='emailAddress' placeholder='Email' onChangeText={setfirst} value={first} style={{width:'90%',borderColor:'red',borderWidth:1,padding:5,marginVertical:5, borderRadius:10}} ></TextInput>
      <TextInput secureTextEntry={true} placeholder='Password' style={{width:'90%',borderColor:'red',borderWidth:1,padding:5,marginVertical:5,borderRadius:10}} ></TextInput>
     
      
      <Pressable android_ripple={{color:'#fff',radius:10, borderless:true,foreground:'#000'}} 
       style={styles.button} onPress={(()=>props.navigation.navigate('Home'))}>
        <Text style={styles.text} >Save</Text>
      </Pressable>
    </View>
      

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1 ,
    width:'100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:50
  
  },
  bgblack:{
    backgroundColor:'#000',
    color:'#fff',
    padding:20
  },
  button: {
    marginTop:20,
    color:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: 'red'
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

