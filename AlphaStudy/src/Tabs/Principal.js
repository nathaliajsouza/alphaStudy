import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableVisible,
} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Menu from './Menu'
import Dimensions from 'Dimensions';
import {Actions} from 'react-native-router-flux';

const image = require('../image/menu.png');

export default class Principal extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      isOpen: false,
      selectedItem: 'About',
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
    });

    onPressExam=()=>{
      var value = Actions.Exam();
    };

    onPressTarefas=()=>{
      var value = Actions.Tarefas();
    };

    onPressLembrete=()=>{
      var value = Actions.Lembrete();
    };

    onPressTrabalho=()=>{
      var value = Actions.Trabalho();
    };

  render() {
    const menu = <Menu onItemSelected={this.onMenuItemSelected} />;

    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
      <View style={styles.container}>

        <TouchableOpacity onPress={this.toggle} style={styles.button}>
          <Image source={image} style={{ width: 42, height: 42 }}/>
          <Text style={{textAlign: 'center',color:'#ffffff',fontWeight: 'bold',fontSize: 16}}>INÍCIO</Text>
        </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressExam} style={styles.exam}>
                <Image source = {(require('../image/exam.png'))} style={{width:82, height:82}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressTarefas} style={styles.calendar}>
                <Image source = {(require('../image/smartphone.png'))} style={{width:82, height:82,}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressLembrete} style={styles.lembrete}>
                <Image source = {(require('../image/smartphone.png'))} style={{width:82, height:82,}}/>
              </TouchableOpacity>

              <TouchableOpacity onPress={this.onPressTrabalho} style={styles.trabalho}>
                <Image source = {(require('../image/smartphone.png'))} style={{width:82, height:82,}}/>
              </TouchableOpacity>
      </View>


      </SideMenu>

    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#F5FCFF',
    position:'absolute',
    width: DEVICE_WIDTH,
    height:DEVICE_HEIGHT,
  },
  button: {
    padding: 10,
    top:25,
    backgroundColor: '#1f497d',
    width: DEVICE_WIDTH,
    height:56,
  },
  exam:{
    top:35,
    left:15,
    width: 92,
    height:92,
  },
  calendar:{
    left:98,
    width:92,
    height:92,
  },
  lembrete:{
    left:150,
    width:92,
    height:92,
  },
  trabalho:{
    left:200,
    width:92,
    height:92,
  },
  containerItems: {
    width: DEVICE_WIDTH,
    height:DEVICE_HEIGHT,
  },
});
