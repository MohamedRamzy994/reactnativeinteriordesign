import { StackActions } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView, Text , StyleSheet, Image} from 'react-native'

function SplashComponent(props) {
    
    setTimeout(() => {
        props.navigation.dispatch(StackActions.replace('Login'));
        props.navigation.navigate('Login');
    }, 3000);
   
    
    return (
    <SafeAreaView style={styles.root}>
        <Image source={{
            uri:'https://cdn3.iconfinder.com/data/icons/education-209/64/graduation-square-academic-cap-school-256.png',
            width:100,
            height:100
        }}></Image>
        

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }
  });
export default SplashComponent