import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  TouchableNativeFeedback
} from 'react-native';

import Actions from 'react-native-router-flux';

const window = Dimensions.get('window');
const uri = '../image/thais.png';

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: 'rgb(31,73,125)',
    padding: 20,
  },
  avatarContainer: {
    marginBottom: 40,
    marginTop: 40,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    fontSize: 26,
    left: 70,
    top: 20,
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  item: {
    fontSize: 22,
    fontWeight: '300',
    paddingTop: 5,
    color: '#FFFFFF',
  },
});

export default function Menu({ onItemSelected }) {
  return (
    <ScrollView scrollsToTop={false} style={styles.menu}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri }}
        />
        <Text style={styles.name}>Your name</Text>
      </View>

      <TouchableNativeFeedback onPress = {() => Actions.index()}>
        <Text>Calendário</Text>
      </TouchableNativeFeedback>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Agenda
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Horário
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Plano de Estudos
      </Text>

      <Text
        onPress={() => onItemSelected('Contacts')}
        style={styles.item}
      >
        Configurações
      </Text>
    </ScrollView>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};
