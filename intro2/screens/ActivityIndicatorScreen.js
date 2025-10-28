import React, { useState } from 'react';
import { View, Text, Button, ActivityIndicator, StyleSheet } from 'react-native';

export default function ActivityIndicatorScreen() {
  const [cargando, setCargando] = useState(false); // estado para controlar el indicador de carga

  const iniciarCarga = () => {
    setCargando(true);
    setTimeout(() => setCargando(false), 3000); // simula una carga de 3 segundos
  };

  const detenerCarga = () => {
    setCargando(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Practica Activity Indicator</Text>

      <View style={styles.boton}>
        <Button
          color="green"
          title={cargando ? 'Cargando...' : 'Iniciar Carga'}
          onPress={iniciarCarga}
        />
      </View>

      <View style={styles.boton}>
        <Button
          color="red"
          title="Detener Carga"
          onPress={detenerCarga}
        />
      </View>

      <View style={styles.carga}>
        <ActivityIndicator
          size="large"
          color="#00b3ffff"
          animating={cargando}
          hidesWhenStopped={true}
        />
        <Text style={styles.textoCarga}>
          {cargando ? 'Cargando datos...' : 'Presiona el botón verde :)'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: '#ffffffff',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  boton: {
    width: 220,
    marginBottom: 16,
  },
  carga: {
    alignItems: 'center',
    marginTop: 20,
  },
  textoCarga: {
    marginTop: 12,
    fontSize: 16,
    color: '#ffffffff',
  },
});
