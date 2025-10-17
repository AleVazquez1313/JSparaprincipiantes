import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default function BottonSheetScreen() {

    return (
      <View style={styles.container}> 
        <Text style={styles.texto}>BottonSheetScreenProximamente</Text>
      </View>
    )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'rgba(100, 132, 168, 0.26)',
    justifyContent:'center',
    alignItems:'center'
  },
  texto:{
    fontSize:20,
    fontFamily:'roboto',
    backgroundColor:'rgba(23, 158, 87, 0.26)',
    color:'rgb(25, 119, 54)',
    fontWeight:'bold', 
    marginBottom:20,
    textDecorationLine:'underline'
  },
})