// 1.- Import:Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, {useState} from 'react';

//2.- MAIN: Zona de componentes
export default function App() {
  const[contador,setContador]= useState(0);
  return (
    
    <View style={styles.container}>
      

      <Text style={styles.texto}>Contador:</Text>
      <Text style={styles.texto2}> {contador} </Text>
      <View style={styles.contenedorBotones}>
      <Button color='orange' title='Incrementar'onPress={()=>setContador(contador+1)}/>
        <Button color='red' title='Quitar' onPress={()=>setContador(contador-1)}/>
          <Button color='green' title='Reiniciar' onPress={()=>setContador(0)}/>
            <Button color='purple' title='Dividir' onPress={()=> setContador(contador/2)}/>
      </View>
      <StatusBar style="auto"/>
    </View>

  );
}
//3.- Estilos: Zona de estetica y posicionamineto
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 1)', //fondo
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    color:'rgba(255, 251, 0, 1)',
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'900',
    fontStyle:'italic',
    textDecorationLine:'underline',
  },
  texto2:{
    color:'rgba(255, 0, 0, 1)',
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'700',
    fontStyle:'roboto',
    textDecorationLine:'underline',
    
  },
  contenedorBotones:{
    marginTop:15,
    flexDirection:'row-reverse',
    gap:15
  },
});
