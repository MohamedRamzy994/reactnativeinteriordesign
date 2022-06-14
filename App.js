import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';
import LoginComponent from './LoginComponent';
import HomeComponent from './HomeComponent';
import SplashComponent from './SplashComponent';
import ProfileComponent from './ProfileComponent';
import InvoiceComponent from './InvoiceComponent';

const Stack = createNativeStackNavigator();
export default function App  ()  {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Splash">
     <Stack.Screen name="Splash" component={SplashComponent} options={{
      statusBarHidden:true,
      headerShown:false,
    
     }}/>
     <Stack.Screen name="Login" component={LoginComponent}
      options={{
        headerBackVisible:false,
        statusBarAnimation:'slide',
 
      }} />
      <Stack.Screen name="Home" component={HomeComponent} 
      options={{
        headerSearchBarOptions:{
          placeholder:'type to search',
          inputType:'text'


        },
        title:'Welcome',
        headerBackVisible:false
      }}
      />
      <Stack.Screen name="Profile" component={ProfileComponent} options={
{headerSearchBarOptions:{
  placeholder:'type to search',
  inputType:'text'


},
title:'Welcome',
headerBackVisible:true
}

 } />
 <Stack.Screen name='Invoice' component={InvoiceComponent} options={{

title:'Items',

 }}
 />
     

    </Stack.Navigator>
  </NavigationContainer>



  );
};
