import React, {useState, useEffect, useaRef} from 'react';
import {Text, StyleSheet, View, Pressable, Animated} from 'react-native';
export default function SwitchButton({temporal, isButton}) {
    const toggle = useRef (new Animated.Value(temporal ? 1 : 0)).current;
    const[value, setValue] = useState(temporal)

    useEffect(() => {
        Animated.timing(toggle, {
            toValue: value ? 1 : 0,
            duration: 250,
            useNativeDriver: false,
        }).start();
    }, [value]);
    const animatedStyles = {
        transform:[
            {
                translateX: toggle.interpolate({
                    inputRange: [0, 1],
                    outputRange: [2.5, 2.4],
                    extrapolate: 'clamp',
                })
            }
        ]
    }
    return(
        <View style={StyleSheet.container}>
            isButton ? (
                <Pressable onPress={() => setValue(!value)}>
                    <View style={[styles.button, {backgroundColor: value ? '#ff0084ff' : '#dcdde1'}]}>
                        <Animated.View style={[styles.circle, animatedStyles]} />
                        </View>
                        </Pressable>
}
