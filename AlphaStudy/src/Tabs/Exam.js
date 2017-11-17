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
export default class Exam extends Component{

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
        <Text style={styles.textAcesseSistema}>CADASTRO DE PROVAS</Text>
      </View>

      <TextInput
        placeholder = "Nome da prova"
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
        <Picker.Item label="Português" value="portugues" />
        <Picker.Item label="Matemática" value="matematica" />
        <Picker.Item label="História" value="historia" />
      </Picker>

      <TextInput
        placeholder = "Tipo de prova (Oral/Escrita)"
        returnKeyType = 'next'
        autoCorrect = {true}
        autoCapitalize = 'none'
        style={styles.inputTipoProva}
        underlineColorAndroid='transparent'
        maxLength = {20}
      />

      <TextInput
        placeholder = "Data"
        returnKeyType = 'next'
        autoCorrect = {true}
        autoCapitalize = 'none'
        style={styles.inputDataProva}
        underlineColorAndroid='transparent'
        maxLength = {20}
      />

      <TextInput
        placeholder = "Peso"
        returnKeyType = 'next'
        autoCorrect = {true}
        autoCapitalize = 'none'
        style={styles.inputPeso}
        underlineColorAndroid='transparent'
        maxLength = {10}
      />
      <TextInput
        placeholder = "Nota"
        returnKeyType = 'next'
        autoCorrect = {true}
        autoCapitalize = 'none'
        style={styles.inputNota}
        underlineColorAndroid='transparent'
        maxLength = {10}
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
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    color: '#1f497d',
    borderColor:'#1f497d',
    top:50,
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
    fontSize:30,
  },
  options: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    color: '#1f497d',
    borderColor:'#1f497d',
    top:60,
    marginHorizontal: 20,
  },
  inputTipoProva: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 10,
		color: '#1f497d',
    top:70,
    borderColor:'#1f497d',
  },
  inputDataProva: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: DEVICE_WIDTH - 40,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    color: '#1f497d',
    borderColor:'#1f497d',
    top:80,
  },
  inputPeso: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 130,
    height: 40,
    marginHorizontal: 20,
    paddingLeft: 10,
    color: '#1f497d',
    borderColor:'#1f497d',
    top:90,
  },
  inputNota: {
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    width: 130,
    height: 40,
    marginHorizontal: 200,
    paddingLeft: 10,
    color: '#1f497d',
    borderColor:'#1f497d',
    top:90,
  },
});
