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
  Picker,
} from 'react-native'

import PropTypes from 'prop-types';
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';

const image = require('../image/return1.png');
export default class Lembrete extends Component{

  onPressBotaoCadastrar=()=>{
    var value =
    Actions.Principal();
  };

  onPressVoltar=()=>{
    var value =
    Actions.Principal();
  };

  render(){
    return(
      <KeyboardAvoidingView behavior='padding' style = {styles.container}>

      <TouchableOpacity onPress={this.onPressVoltar} style={styles.button}>
        <Image source={image} style={{ width: 36, height: 36}}/>
      </TouchableOpacity>

      <View style = {{alignItems: 'center', justifyContent: 'center'}}>
        <Text style={styles.textAcesseSistema}>CADASTRO DE LEMBRETES</Text>
      </View>

      <TextInput
        placeholder = "Nome do Lembrete"
        returnKeyType = 'next'
        autoCorrect = {false}
        autoCapitalize = 'none'
        onSubmitEditing = {() => this.passwordInput.focus()}
        style={styles.inputNome}
        underlineColorAndroid='transparent'
        maxLength = {20}
      />

      <TextInput
        placeholder = "Descrição"
        multiline = {true}
        numberOfLines = {4}
        returnKeyType = 'next'
        autoCorrect = {true}
        autoCapitalize = 'none'
        style={styles.inputDescricao}
        underlineColorAndroid='transparent'
        maxLength = {300}
      />

      <Picker selectedValue={0} onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue}) } style={styles.options}>
        <Picker.Item label="Azul" value="azul" />
        <Picker.Item label="Vermelho" value="vermelho" />
        <Picker.Item label="Amarelo" value="amarelo" />
        <Picker.Item label="Rosa" value="rosa" />
      </Picker>

      <TextInput
        placeholder = "Data"
        returnKeyType = 'next'
        autoCorrect = {true}
        autoCapitalize = 'none'
        style={styles.inputData}
        underlineColorAndroid='transparent'
        maxLength = {20}
      />

         <View style={{alignItems: 'center', flexDirection:'column'}}>
          <View style = {styles.botao}>
            <Button  title = "CADASTRAR" color = 'rgb(31,73,125)' style = {styles.btn} onPress = {this.onPressBotaoCadastrar}/>
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
  button: {
    padding: 10,
    top:25,
    backgroundColor: '#1f497d',
    width: DEVICE_WIDTH,
    height:56,
  },
  inputNome: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 10,
		color: '#1f497d',
    top:40,
    borderColor:'#1f497d',
  },
  inputDescricao: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 120,
    marginHorizontal: 20,
    paddingLeft: 10,
    color: '#1f497d',
    borderColor:'#1f497d',
    top:50,
    textAlign:'auto',
  },
  botao: {
    width: DEVICE_WIDTH - 200,
    top: 130,
  },
  textAcesseSistema: {
    top:35,
    color: '#1f497d',
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    fontSize:25,
  },
  options: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: '#1f497d',
    borderColor:'#1f497d',
    top:60,
    marginHorizontal: 20,
  },
  inputData: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    color: '#1f497d',
    borderColor:'#1f497d',
    top:80,
  },
});
