import { Text, StyleSheet, View, Button, ScrollView } from 'react-native';
import React, { useState } from 'react';
import ContadorScreen from './ContadorScreen';
import BotonesScreen from './BotonesScreen';
import TextImputScreen from './TextImputScreen';
import SplashScreenPro from './ImagebackgroungScreen';
import ScrollViewScreen from './ScrollViewScreen';
import ActivityIndicatorScreen from './ActivityIndicatorScreen';
import FlatListScreen from './FlatListScreen';
import ModalScreen from './ModalScreen';
import BottonSheetScreen from './BotonesScreen';
import RepasoScreen from './RepasoScreen'; 

export default function MenuScreen() {
    const [screen, setScreen] = useState('menu');

    switch(screen){
        case 'contador': return <ContadorScreen/>;
        case 'botones': return <BotonesScreen/>;
        case 'textimput': return <TextImputScreen/>; 
        case 'imagebackgroung': return <SplashScreenPro/>;  
        case 'scrollview': return <ScrollViewScreen/>;
        case 'activityindicator': return <ActivityIndicatorScreen/>;  
        case 'flatlist': return <FlatListScreen/>;    
        case 'modalscreen': return <ModalScreen/>;   
        case 'bottomsheet': return <BottonSheetScreen/>;     
        case 'repaso': return <RepasoScreen/>; 
        case 'menu':
        default:
            return (
                <View style={styles.container}>
                  <Text style={styles.texto}>Menú de Practicas</Text>
                  <ScrollView 
                      contentContainerStyle={{ ...styles.botones, paddingRight: 10 }} 
                      showsVerticalScrollIndicator={true}
                  >
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'pink'} onPress={()=>setScreen('contador')} title='Pract:Contador'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'purple'} onPress={()=>setScreen('botones')} title='Pract:Botones'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'pink'} onPress={()=>setScreen('textimput')} title='Pract:TextImput&Alert'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'purple'} onPress={()=>setScreen('imagebackgroung')} title='Pract:ImageBackgroung&SlashScreen'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'pink'} onPress={()=>setScreen('scrollview')} title='Pract:ScrollView'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'purple'} onPress={()=>setScreen('activityindicator')} title='Pract:ActivityIndicator'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'pink'} onPress={()=>setScreen('flatlist')} title='Pract:FlatList'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'purple'} onPress={()=>setScreen('modalscreen')} title='Pract:Modal'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'pink'} onPress={()=>setScreen('bottomsheet')} title='Pract:BottonSheet'/>
                      </View>
                      <View style={{ marginVertical: 8, width: '100%' }}>
                          <Button color={'purple'} onPress={()=>setScreen('repaso')} title='Pract:Repaso'/>
                      </View>
                  </ScrollView>
                </View>
            );    
    }
}

const styles = StyleSheet.create({
    botones:{
        marginTop:20,
        flexDirection:'column',
        width:'80%',
        alignItems:'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto:{
        color:'rgb(0, 0, 0)',
        fontSize:55,
        fontFamily:'Times New Roman',
        fontWeight:'900',
        textDecorationLine:'underline',
    }  
});
