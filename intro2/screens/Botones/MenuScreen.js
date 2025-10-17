import { Text, StyleSheet, View, Button } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './Botones/BotonesScreen';
import TextImputScreen from './TextImputScreen';
import ImagebackgroungScreen from './ImagebackgroungScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottonSheetScreen from './BottonSheetScreen';

export default function MenuScreen() {
    const [screen, setScreen]= useState('menu');

    switch(screen){
        case 'contador':
            return <ContadorScreen/>;
        case 'botones':
            return <BotonesScreen/>;
        case  'textimput':
            return <TextImputScreen/>; 
        case 'imagebackgroung':
            return <ImagebackgroungScreen/>;  
        case 'scrollview':
            return <ScrollViewScreen/>;
        case 'activityindicator':
            return <ActivityIndicatorScreen/>;  
        case 'flatlist':
            return <FlatListScreen/>;    
        case 'modalscreen':
            return <ModalScreen/>;   
        case 'bottomsheet':
            return <BottonSheetScreen/>;     
        case 'menu':
            default:
                return (
                    <View style={styles.container}>
                      <Text style={styles.texto}>Menú de Practicas</Text>
                      <View style={styles.botones}>
                      <Button color={'blue'} onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                      <Button color={'purple'} onPress={()=>setScreen('botones')} title='Pract:Botobes'/>
                      <Button color={'black'} onPress={()=>setScreen('textimput')} title='Pract:TextImput&Alert'/>
                      <Button color={'red'} onPress={()=>setScreen('imagebackgroung')} title='Pract:ImageBackgroung&SlashScreen'/>
                      <Button color={'green'} onPress={()=>setScreen('scrollview')} title='Pract:ScrollView'/>
                      <Button color={'orange'} onPress={()=>setScreen('activityindicator')} title='Pract:ActivityIndicator'/>
                      <Button color={'blue'} onPress={()=>setScreen('flatlist')} title='Pract:FlatList'/>
                      <Button color={'purple'} onPress={()=>setScreen('modalscreen')} title='Pract:Modal'/>
                      <Button color={'red'} onPress={()=>setScreen('bottomsheet')} title='Pract:BottonSheet'/>
                        </View>
                    </View>
                  )    
       

    }

    return (
      <View>
        <Text>MenuScreen</Text>
      </View>
    )

}

const styles = StyleSheet.create({
    botones:{
        marginTop:20,
        flexDirection:'column',
        gap:20,
        width:'80%',
        height:'60%',
        


    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(37, 92, 126, 0.24)',
        alignItems: 'center',
        justifyContent: 'center',
      },
    texto:{
        color:'rgb(0, 0, 0)',
        fontSize:55,
        fontFamily:'Times New Roman',
        fontWeight:'900',
        fontStyle:'Montserrat',
        textDecorationLine:'underline',
    }  
});