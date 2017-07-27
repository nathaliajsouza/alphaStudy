import React,{Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button
} from 'react-native';

import {Actions} from 'react-native-router-flux';

export class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source = {(require('./image/logo.png'))}/>
        <Text style = {styles.titulo}>AlphaStudy</Text>

        <View style={{justifyContent: 'flex-start', flexDirection:'column', top:30}}>
          <View style = {{width: 200, height: 50}}>
            <Button  title = "ENTRAR" onPress = {() => Actions.Logar()} color = 'rgb(31,73,125)'/>
          </View>
          <View style = {{width: 200, height: 50}}>
            <Button  title = "CADASTRAR" onPress = {() => Actions.Cadastrar()} color = 'rgb(31,73,125)'/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f7f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 50,
    textAlign : 'center',
    margin: 10,
    top:8,
    color: '#ff6600',
    fontWeight: 'bold'
  },
});

export default Index;
