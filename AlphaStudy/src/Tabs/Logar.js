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
} from 'react-native'

import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';


export default class Logar extends Component{

  onPressBotaoContinuar=()=>{
    var value =
    Actions.Principal();
  };

  onPressRedefinirSenha=()=>{
    var value =
    Actions.RedefinirSenha();
  };

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>

      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.quadradoAzul}>
          <Image source = {(require('../image/person.png'))} style = {{top:65}}/>
           <Text style={styles.textAcesseSistema}>ACESSE O SISTEMA</Text>
        </View>

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
            secureTextEntry = {true}
            returnKeyType = 'go'
            ref = {(input) => this.passwordInput = input}
            style={styles.inputSenha}
            underlineColorAndroid='transparent'
          />

         <Text style={styles.textEsqueceuSenha} onPress= {this.onPressRedefinirSenha}>ESQUECEU A SENHA?</Text>

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
  inputSenha: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 100,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    color: '#1f497d',
    top:50,
  },
  botao: {
    width: 200,
    top: 100,
  },
  textEsqueceuSenha: {
		color: '#1f497d',
		backgroundColor: 'transparent',
    top: 80,
    left:60,
    fontSize:15,
	},
  textAcesseSistema: {
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
