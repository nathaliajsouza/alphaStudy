import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView,
} from 'react-native'

import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';

class Logar extends Component{
  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>

      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.quadradoAzul}/>

        <View style = {{width: 300}}>
          <TextInput
            placeholder = "Nome de usuário"
            returnKeyType = 'next'
            autoCorrect = {false}
            autoCapitalize = 'none'
            onSubmitEditing = {() => this.passwordInput.focus()}
            style={styles.inputNome}
            underlineColorAndroid='transparent'
          />

          <TextInput
            placeholder = "Senha"
            secureTextEntry
            returnKeyType = 'go'
            ref = {(input) => this.passwordInput = input}
            style={styles.inputSenha}
          />


        <View style={{alignItems: 'center', flexDirection:'column'}}>
          <View style = {styles.botao}>
            <Button  title = "CONTINUAR" color = 'rgb(31,73,125)' style = {styles.btn} onPress = {() => Actions.Principal()}/>
          </View>

          <Text style={styles.textEsqueceuSenha}>Forgot Password?</Text>
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
    flex: 4,
    backgroundColor: '#f4f7f9',
  },
  inputNome: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 100,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 10,
		borderRadius: 20,
		color: '#ffffff',
    top:320,
  },
  inputSenha: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 100,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    borderRadius: 20,
    color: '#ffffff',
    top:340,
  },
  botao: {
    width: 200,
    top: 380,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagem: {
    backgroundColor: '#87CEFA',
  },
  textEsqueceuSenha: {
		color: 'white',
		backgroundColor: 'transparent',
	},
  quadradoAzul:{
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT - 300,
    top: 85,
    alignItems: 'center',
    backgroundColor: '#1f497d'
  },
});


module.exports = Logar;
