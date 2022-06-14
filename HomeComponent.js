import React, { useRef } from 'react'
import { StyleSheet,View,Text ,Button, SafeAreaView, DrawerLayoutAndroid, Image, TouchableHighlightBase, TouchableHighlight, ScrollView} from 'react-native'
function HomeComponent(props) {
  const drawer= useRef(null);
  const navigationView = () => (
    <ScrollView style={[styles.container, styles.navigationContainer]}>

      <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, flex:1,alignItems:'center',backgroundColor:'#fff', padding:16,width:300,height:200}}>
      <Image source={require('./assets/Smith.png')}></Image>
      <Text style={{fontSize:16,color:'#aaa'}}>Mohamed Ramzy</Text>
      </View>
        

    
    <TouchableHighlight underlayColor={'#000'} onPress={()=>{}}>
      <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
      <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
      </View>
    </TouchableHighlight>
    <TouchableHighlight underlayColor={'#000'} onPress={()=>{}} >
      <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
      <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
      </View>
        
    </TouchableHighlight> 
    <TouchableHighlight underlayColor={'#000'} onPress={()=>{}}>
    <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
    <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
    </View>
      
  </TouchableHighlight> 
  <TouchableHighlight underlayColor={'#000'} onPress={()=>{}}>
  <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
  <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
  </View>
    
</TouchableHighlight> 
<TouchableHighlight underlayColor={'#000'} onPress={()=>{}}>
      <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
      <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
      </View>
        
    </TouchableHighlight> 
    <TouchableHighlight underlayColor={'#000'} onPress={()=>{}}>
    <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
    <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
    </View>
      
  </TouchableHighlight> 
  <TouchableHighlight underlayColor={'#000'} onPress={()=>{}}>
  <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
  <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
  </View>
    
</TouchableHighlight> 
<TouchableHighlight underlayColor={'#000'} onPress={()=>{}}>
      <View style={{borderBottomColor:'#ddd',borderBottomWidth:1, backgroundColor:'#fff', padding:16,width:300}}>
      <Text style={{fontSize:16,color:'#aaa'}}>Home</Text>
      </View>
        
    </TouchableHighlight> 
    </ScrollView>
  );
  return (
  <DrawerLayoutAndroid
  drawerPosition='left'
  drawerWidth={300}
  ref={drawer}
  renderNavigationView={navigationView}
  >
    <ScrollView style={{flex:1, flexDirection:'column',backgroundColor:'#fff',height:'100%'}}>

    
    <View style={{backgroundColor:'#fff', borderBottomWidth:1,borderBottomColor:'#dddddd90',flex:0.05,flexDirection:'row' ,padding:15,alignContent:'center', justifyContent:'space-between',}}>
     <View style={{flex:.4}}>
     <Text  style={{fontSize:16,fontWeight:'bold'}}>Mohamed Ramzy</Text>
      <Text style={{color:'#ccc'}}>Interior Design</Text>
      </View>
     <View style={{flex:0.5,flexDirection:'row',justifyContent:'flex-end'}}>
     <Image source={require('./assets/bell.png')} style={{width:16, height:21 ,margin:5}} />
     <Image source={require('./assets/asset-1.png')} style={{width:25,height:25 , borderRadius:20 , borderWidth:1, borderColor:'#ddd',margin:2}} /> 
     <TouchableHighlight onPress={()=>drawer.current.openDrawer()} style={{width:25,height:21}} underlayColor={'#ddd'}  >
     <Image source={require('./assets/menu.png')} style={{width:25, height:21 ,margin:2, opacity:.5}} /> 

     </TouchableHighlight>
     </View>
    
    </View>


<ScrollView style={{padding:10,flex:.1,flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
      <Text style={[styles.tags,styles.selected]}>Popular</Text>
      <Text style={styles.tags}>Recommend</Text>
      <Text style={styles.tags}>New</Text>
      <Text style={styles.tags}>Oldest</Text>
      <Text style={styles.tags}>People</Text>
      <Text style={styles.tags}>Modern</Text>
      <Text style={styles.tags}>Classic</Text>

    




</ScrollView>


<ScrollView style={{padding:10,flex:1,flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>

<Image source={require('./assets/asset-2.png')}  style={styles.imgcard}></Image>
<Image source={require('./assets/asset-2.png')} style={styles.imgcard}></Image>
<Image source={require('./assets/asset-2.png')} style={styles.imgcard}></Image>
<Image source={require('./assets/asset-2.png')} style={styles.imgcard}></Image>
<Image source={require('./assets/asset-2.png')} style={styles.imgcard}></Image>
<Image source={require('./assets/asset-2.png')} style={styles.imgcard}></Image>
<Image source={require('./assets/asset-2.png')} style={styles.imgcard}></Image>


    




</ScrollView>

    
<View style={{backgroundColor:'#fff',flex:0.05,flexDirection:'row' ,padding:15,alignContent:'center', justifyContent:'space-between',}}>
     <View style={{flex:1,flexDirection:'row'}}>
     <Image source={require('./assets/Path.png')} /> 
     <Image source={require('./assets/Group.png')} style={{marginHorizontal:15}} /> 
      </View>
     <View style={{flex:0.2,flexDirection:'row',justifyContent:'flex-end'}}>
   <TouchableHighlight onPress={()=>drawer.current.openDrawer()} style={{width:16,height:21}} underlayColor={'#ddd'}  >
     <Image source={require('./assets/arrow-point-to-right.png')}  /> 

     </TouchableHighlight>
     </View>
    
    </View>

    <ScrollView style={{padding:10,flex:1,flexDirection:'row'}} horizontal={true} showsHorizontalScrollIndicator={false}>
    <TouchableHighlight underlayColor={'#ddd'} onPress={()=>{props.navigation.navigate('Profile')}}>
<View style={{padding:10}}>

<Image source={require('./assets/R2.png')}  style={styles.imgcard}></Image>
<Text style={{color:'#ddd'}}>Jone Smith</Text>

</View>
</TouchableHighlight>
<View style={{padding:10}}>

<Image source={require('./assets/asset-1.png')}  style={styles.imgcard}></Image>
<Text style={{color:'#ddd'}}>Jone Smith</Text>
</View>
<View style={{padding:10}}>

<Image source={require('./assets/Smith.png')}  style={styles.imgcard}></Image>
<Text style={{color:'#ddd'}}>Jone Smith</Text>
</View>
<View style={{padding:10}}>

<Image source={require('./assets/R2.png')}  style={styles.imgcard}></Image>
<Text style={{color:'#ddd'}}>Jone Smith</Text>
</View>
<View style={{padding:10}}>

<Image source={require('./assets/Smith.png')}  style={styles.imgcard}></Image>
<Text style={{color:'#ddd'}}>Jone Smith</Text>
</View>
<View style={{padding:10}}>

<Image source={require('./assets/asset-1.png')}  style={styles.imgcard}></Image>
<Text style={{color:'#ddd'}}>Jone Smith</Text>
</View>
<View style={{padding:10}}>

<Image source={require('./assets/R2.png')}  style={styles.imgcard}></Image>
<Text style={{color:'#ddd'}}>Jone Smith</Text>
</View>


    




</ScrollView>
    <View style={{ borderColor:'#ddd' , borderRadius:20 ,borderWidth:1, padding:20, margin:10, flex:2, flexDirection:'row' }}>
      <Text style={{fontWeight:'bold', fontSize:16, flex:1, justifyContent:'flex-start'}}>Tanya</Text>
      <Text style={{fontWeight:'bold', fontSize:16, flex:0.2, justifyContent:'flex-end'}}>$890</Text>
    </View>


    </ScrollView>
  </DrawerLayoutAndroid>

  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 0,
      paddingHorizontal:0
    },
    navigationContainer: {
      backgroundColor: "#ecf0f1"
    },
    paragraph: {
      padding: 16,
      fontSize: 15,
      textAlign: "center"
    },
    tags:{
      padding:5,
      color:'#ccc',
      borderRadius:10,
      borderColor:'#eee',
      borderWidth:1,
      margin:2,
      height:30,
      minWidth:80,
      textAlign:'center'


    },
    selected:{
      backgroundColor:'#aaa',
      color:'#fff'
    },
    imgcard:{
      padding:10,
      margin:5

    }
  });

export default HomeComponent