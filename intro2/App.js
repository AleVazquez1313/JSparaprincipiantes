//1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React,{ useState } from 'react';

//2. Main: Zona de componentess
export default function App() {

let[contador,setContador] = useState(0);

  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Contador:</Text>      
      <Text style={styles.texto2}> {contador} </Text>  

      <View style={styles.contenedorBotones}>

      <Button color="green" title = "Incrementar" onPress={()=> setContador(contador+1)} />

      <Button color="orange" title = "Quitar" onPress={()=> setContador(contador-1)} />

      <Button color="pink" title = "Reiniciar" onPress={()=> setContador(0)} />
      </View>

      <StatusBar style="auto" />
    
    </View>
  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1, //Definir sus espacios
    backgroundColor: '#000000ff', //color del fondo
    alignItems: 'center', //posicion de los elementos en posicion x (star, end, center)
    justifyContent: 'center', //posicion de los elementos en posicion y (star, end, center)
  },
  texto:{
    color: '#e30000ff' , //Cambiando el color del texto 
    fontSize:30,
    fontFamily:'Times New Roman', //Estilo de fuente
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through'
  },
    texto2:{
    color: '#00ff77ff' , //Cambiando el color del texto 
    fontSize:40,
    fontFamily:'Courier', //Estilo de fuente
    fontWeight:'400',
    textDecorationLine:'underline'
  },
  contenedorBotones:{
    marginTop: 15, //Margen de espacio
    flexDirection:'row-reverse', //Direccion de los botones
    gap:20,
  },
  

});