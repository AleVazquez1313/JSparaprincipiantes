import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default function FlatListScreen() {

    return (
      <View style={styles.container}>
        <Text style={styles.texto}>FlatListScreenProximamente</Text>
      </View>
    )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(77, 13, 58, 0.37)',
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:20,
    fontFamily:'roboto',
    backgroundColor:'rgba(158, 23, 87, 0.26)',
    color:'rgb(119, 25, 54)',
    fontWeight:'bold', 
    marginBottom:20,
    textDecorationLine:'underline'
  }
})