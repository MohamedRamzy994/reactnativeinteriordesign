import React from 'react'
import { Image, SafeAreaView , ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'

function InvoiceComponent() {
  return (
    
    <SafeAreaView style={styles.containerColumn}>
        <ScrollView>
        <View style={styles.containerRow}>
            <Image source={require('./assets/asset-1.png')}></Image>
    <View style={styles.containerColumn}>
    <Text style={styles.MainText}>Mohamed Ramzy</Text>
            <Text style={styles.SubText}>Designer</Text>

    </View>
        
        </View>
        
        <View style={styles.containerRow}>
            <Image source={require('./assets/negative-space-logo-design-creative-branding-ideas-inspiration-1.png')}></Image>
    <View style={styles.containerColumn}>
    <Text style={styles.MainText}>Header</Text>
            <Text style={styles.SubText}>Done</Text>
            <Text style={styles.PriceText}>+$236</Text>
        

    </View>
    <TouchableOpacity style={{marginTop:5}}>
        
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
    
        </TouchableOpacity>


        </View>
        
        <View style={styles.containerRow}>
            <Image source={require('./assets/disney-tattoo-belle-1.png')}></Image>
    <View style={styles.containerColumn}>
    <Text style={styles.MainText}>Header</Text>
            <Text style={styles.SubText}>Done</Text>
            <Text style={styles.PriceText}>+$236</Text>

    </View>
    <TouchableOpacity style={{marginTop:5}}>
        
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
    
        </TouchableOpacity>
        </View>
        
        <View style={styles.containerRow}>
            <Image source={require('./assets/Beating-Creative-Block-copy_FACEBOOK.png')}></Image>
    <View style={styles.containerColumn}>
    <Text style={styles.MainText}>Header</Text>
            <Text style={styles.SubText}>Done</Text>
            <Text style={styles.PriceText}>+$236</Text>

    </View>
    <TouchableOpacity style={{marginTop:5}}>
        
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
    
        </TouchableOpacity>
        </View>
        <View style={styles.containerRow}>
            <Image source={require('./assets/Beating-Creative-Block-copy_FACEBOOK.png')}></Image>
    <View style={styles.containerColumn}>
    <Text style={styles.MainText}>Header</Text>
            <Text style={styles.SubText}>Done</Text>
            <Text style={styles.PriceText}>+$236</Text>

    </View>
    <TouchableOpacity style={{marginTop:5}}>
        
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
        <Image source={require('./assets/Ellipse.png')}></Image>
    
        </TouchableOpacity>
        </View>
        <View style={{ borderColor:'#ddd' , borderRadius:20 ,borderWidth:1, padding:20, margin:10, flex:2, flexDirection:'row' }}>
      <Text style={{fontWeight:'bold', fontSize:16, flex:1, justifyContent:'flex-start'}}>Total</Text>
      <Text style={{fontWeight:'bold', fontSize:16, flex:0.2, justifyContent:'flex-end'}}>$890</Text>
    </View>



        </ScrollView>
    </SafeAreaView>
  )
}

export default InvoiceComponent
const styles=StyleSheet.create({
    containerColumn:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff',
        padding:5
        

    },
    containerRow:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        padding:10,
        
    },
    MainText:{
        fontSize:16,
        fontWeight:'bold',
        
    },
    SubText:{
        color:'#aaa',
        fontSize:14

    },
    PriceText:{
        color:'blue',
        marginTop:20
    }
})