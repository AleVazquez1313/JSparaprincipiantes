//1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{ useState } from 'react';

//2. Main: Zona de componentess
export default function App() {

let[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>

      <Text>Contador: {contador}</Text>
      <Button title = "Incrementar" onPress={()=> setContador(contador+1)} />

      <Button title = "Quitar" onPress={()=> setContador(contador-1)} />

      <Button title = "Reiniciar" onPress={()=> setContador(0)} />


      <StatusBar style="auto" />
    
    </View>
  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1, //Definir sus espacios
    backgroundColor: '#e30000ff', //color del fondo
    alignItems: 'center', //posicion de los elementos en posicion x (star, end, center)
    justifyContent: 'center', //posicion de los elementos en posicion y (star, end, center)
  },
});