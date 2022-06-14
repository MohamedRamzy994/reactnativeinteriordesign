import React from 'react'
import { Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

function ProfileComponent(props) {
  return (
    <SafeAreaView>
      <ImageBackground source={require('./assets/asset-3.png')} style={{ width: '100%', height: '100%' }}></ImageBackground>

      <ScrollView style={{ position: 'absolute', bottom: 0,height:'55%', backgroundColor: '#fff', left: 0, width: '100%', borderTopLeftRadius: 20, borderTopRightRadius: 20 ,paddingHorizontal:10 }}>
        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Image source={require('./assets/asset-1.png')} style={{ flex: .3, margin: 20 }}></Image>
          <View style={{ flex: .7, margin: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Mohamed Ramzy</Text>
            <Text style={{ color: '#aaa' }}>Designer</Text>
          </View>
        </View>
        <View style={{flex:1,flexDirection:'row',justifyContent:'center'}}>
          <View style={{flex:.2,flexDirection:'row'}}>
            <Image source={require('./assets/Path2.png')} style={{marginTop:5}}></Image>
            <Text style={{marginHorizontal:5}}>25</Text>
          </View>
          <View style={{flex:.2,flexDirection:'row'}}>
            <Image source={require('./assets/Group.png')}></Image>
            <Text style={{marginHorizontal:5}}>25</Text>
          </View>
          <View style={{flex:.2,flexDirection:'row'}}>
            <Image source={require('./assets/like.png')}></Image>
            <Text style={{marginHorizontal:5}}>25</Text>
          </View>
          <View style={{flex:.2,flexDirection:'row'}}>
            <Image source={require('./assets/heart.png')} style={{marginTop:5}}></Image>
            <Text style={{marginHorizontal:5}}>25</Text>
          </View>
        </View>
        <View style={{flex:1, padding:10}}>
            <Text style={{flex:.3}}>Awesome Story</Text>
            <Text style={{flex:.7,color:'#aaa'}}>Awesome Story Awesome Story Awesome Story Awesome Story Awesome Story Awesome Story Awesome Story Awesome Story Awesome Story Awesome Story</Text>
            
        </View>
        <View style={{flex:1 ,flexDirection:'row'}}>
        <Image source={require('./assets/asset-1.png')} style={{ width:48, height:48 }}></Image>
        <Image source={require('./assets/asset-1.png')} style={{ width:48, height:48 }}></Image>
        <Image source={require('./assets/asset-1.png')} style={{ width:48, height:48 }}></Image>
        <Text style={{color:'#aaa', alignSelf:'center'}}>+521</Text>
        </View>
        <View style={{flex:1 ,flexDirection:'row', height:48}}>
        <TextInput placeholder='Type something here ....' style={{backgroundColor:'#ddd',marginEnd:5, borderRadius:20,flex:1}}></TextInput>
        <TouchableOpacity onPress={()=> props.navigation.navigate('Invoice')}>
        <Image source={require('./assets/message.png')} style={{ width:32,marginTop:8, height:32 }}></Image>
        </TouchableOpacity>
        </View>
      
      </ScrollView>



    </SafeAreaView>
  )
}

export default ProfileComponent