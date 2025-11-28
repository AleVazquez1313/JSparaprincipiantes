import React from 'react';
import { View, StyleSheet } from 'react-native';
import Screen from './screens/InsertUsuarioScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6e6e6',
    paddingTop: 40,
    paddingHorizontal: 10,
  },
});
