import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default function ActivityIndicatorScreen() {

    return (
      <View style={styles.container}>
        <Text style={styles.texto}>ActivityIndicatorScreen Proximamente....</Text>
      </View>
    )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(42, 224, 224, 0.26)',
    justifyContent:'center',
    alignItems:'center'

  },
  texto:{
    fontFamily:'roboto',
    color:'rgb(231, 19, 54)',
    backgroundColor:'rgba(203, 242, 10, 0.26)',
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20
  },
})