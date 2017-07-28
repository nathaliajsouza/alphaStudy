import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native'

import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';


export default class RedefinirSenha extends Component{

  onPressBotaoContinuar=()=>{
    Alert.alert('Redefinir Senha','Enviamos um e-mail para você!',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
   { cancelable: false })
  };

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>

      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.quadradoAzul}>
          <Image source = {(require('../image/person.png'))} style = {{top:65}}/>
           <Text style={styles.text}>Redefinir Senha</Text>
        </View>

        <TextInput
          placeholder = "Digite seu E-mail"
          returnKeyType = 'go'
          autoCorrect = {false}
          autoCapitalize = 'none'
          keyboardType = 'email-address'
          underlineColorAndroid='transparent'
          style={styles.input}
        />

         <View style={{alignItems: 'center', flexDirection:'column'}}>
          <View style = {styles.botao}>
            <Button  title = "CONTINUAR" color = 'rgb(31,73,125)' style = {styles.btn} onPress = {this.onPressBotaoContinuar}/>
          </View>


        </View>

      </View>
      </KeyboardAvoidingView>

    );
  }

}

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 100,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 10,
		color: '#1f497d',
    top:60,
    borderColor:'#1f497d',
  },
  botao: {
    width: 200,
    top: 90,
  },
  text: {
		top:85,
    color: '#ffffff',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize:20,
	},
  quadradoAzul:{
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT-300,
    alignItems: 'center',
    backgroundColor: '#1f497d',
  },
});
