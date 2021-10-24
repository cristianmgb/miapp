import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './src/styles/estyles';
import Saludo from './src/components/saludo';

const App = () => {
  return (
    <SafeAreaView>
      <View style={{backgroundColor: 'blue'}}>
        <Text style={styles.holaMundo}>Hola mundo!</Text>
      </View>
      <View style={{backgroundColor: 'red'}}>
        <Text style={{fontSize: 25, fontWeight: '900', color: 'yellow'}}>
          Hola mundo!
        </Text>
      </View>
      <Saludo name="Iyeliz" />
      <Saludo name="Joal" />
      <Saludo name="Miguel" />
    </SafeAreaView>
  );
};

export default App;
