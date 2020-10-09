import React from 'react';
import {View,Text,Image,TextInput, Button, StyleSheet, TouchableOpacity} from 'react-native';


const App = () => {
  const logo = require('./components/images/shopping-cart.png');
  return (
    <View style={styles.container}>
      <View>
        <Image 
        style={styles.image}
        source={logo} />
      </View>
      <View>
        <View>
          <TextInput 
          style={styles.input}
          placeholder='E-mail giriniz..'
          ></TextInput>
        </View>
        <View>
          <TextInput 
          style={styles.input}
          placeholder='Şifre giriniz..'
          ></TextInput>
        </View>
      </View>
      <View>
        <View >
        <TouchableOpacity style={styles.button}>
            <Text style={{color:'white',fontWeight:'bold'}}>Giris Yap</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.button}>
            <Text style={{color:'white', fontWeight:'bold'}}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  )
}

export default App;

const styles = StyleSheet.create ({
  container: {
    backgroundColor: '#84ffff',
    flex:1,
    alignItems: 'center'
  },
  image: {
    width:120, 
    height:120, 
    margin:50, 
    resizeMode:'contain'
  },
  input: {
    width:320, 
    borderRadius:10, 
    backgroundColor:'white',   
    margin:15,
    height:50
  },
  button:{
    height: 50, 
    marginTop: 10, 
    backgroundColor:'#78909c',
    borderRadius:8,
    width:180,
    alignItems:'center',
    justifyContent:'center'
  }

})