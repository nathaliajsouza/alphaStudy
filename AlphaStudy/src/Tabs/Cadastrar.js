import React, {Component} from 'react';
import{
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';

class Cadastrar extends Component{

  onPressBotaoCadastrar=()=>{
    Actions.Principal();
  };

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>

      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.quadradoAzul}>
         <Image source = {(require('../image/person.png'))} style = {{top:45}}/>
         <Text style={styles.textCadastro}>CADASTRO DE USUÁRIOS</Text>
      </View>

        <View style = {{width: 300}}>
          <TextInput
            placeholder = "Nome de usuário"
            returnKeyType = 'next'
            autoCorrect = {false}
            autoCapitalize = 'none'
            onSubmitEditing = {() => this.emailInput.focus()}
            style={styles.inputNome}
          />
          <TextInput
            placeholder = "E-mail"
            returnKeyType = 'next'
            autoCorrect = {false}
            autoCapitalize = 'none'
            keyboardType = 'email-address'
            ref = {(input) => this.emailInput = input}
            onSubmitEditing = {() => this.passwordInput.focus()}
            style={styles.inputEmail}
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
            <Button  title = "CADASTRAR" color = 'rgb(31,73,125)' style = {styles.btn} onPress = {this.onPressBotaoCadastrar}/>
          </View>
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
    backgroundColor: '#F0F8FF',
  },
  inputNome: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 100,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    color: '#1f497d',
    top:30,
    borderColor:'#1f497d',
  },
  inputEmail: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 100,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 10,
		color: '#1f497d',
    top:50,
    borderColor:'#1f497d',
  },
  inputSenha: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 100,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 10,
		color: '#1f497d',
    top:70,
    borderColor:'#1f497d',
  },
  botao: {
    width: 200,
    top: 110,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    backgroundColor: '#87CEFA',
  },
  textCadastro:{
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


export default Cadastrar;
