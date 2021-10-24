import React from 'react';
import {View, Text} from 'react-native';

const Saludo = props => {
  return (
    <View>
      <Text>Hola, {props.name}</Text>
    </View>
  );
};

export default Saludo;
