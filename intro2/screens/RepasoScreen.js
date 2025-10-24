import React, { useState, useEffect, useRef } from 'react';
import { 
  View, 
  Text, 
  Animated,
  Dimensions,
  TextInput, 
  StyleSheet, 
  Button, 
  Alert, 
  Switch, 
  ImageBackground, 
  ScrollView
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const { height } = Dimensions.get("window");

export default function App() {
  const [showMain, setShowMain] = useState(false);

  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, { toValue: 1, duration: 1200, useNativeDriver: false }),
      Animated.spring(scaleLogo, { toValue: 1, friction: 5, useNativeDriver: false }),
      Animated.timing(rotateLogo, { toValue: 1, duration: 1200, useNativeDriver: false }),
    ]).start();

    Animated.timing(slideText, { toValue: 0, duration: 1000, delay: 800, useNativeDriver: false }).start();

    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, { toValue: 0, duration: 800, useNativeDriver: false }).start(async () => {
        await SplashScreen.hideAsync();
        setShowMain(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  if (showMain) {
    return <RegistroScreen />;
  }

  return (
    <Animated.View style={[styles.splashContainer, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/T_ui_Ch003_CharaImage.png")}
        resizeMode="contain"
        style={[styles.logoImage, { opacity: fadeLogo, transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }] }]}
      />
      <Animated.Text style={[styles.splashText, { transform: [{ translateY: slideText }] }]}>
        ¡REPASO DE TODAS MIS PRACTICAS!
      </Animated.Text>
    </Animated.View>
  );
}

function RegistroScreen() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  const handleRegistro = () => {
    if (!nombre.trim() || !email.trim()) {
      Alert.alert("Error", "Por favor completa todos los campos.");
        alert('Error: Por favor completa todos los campos');
      setMensaje('Faltan campos por llenar');
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Error", "El correo electrónico debe contener '@'.");
       alert('Tu correo electronico es incorrecto');
      setMensaje('El correo es incorrecto');
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert("Error", "Debes aceptar los términos y condiciones para continuar.");
      alert('Debes aceptar los términos y condiciones para continuar.');
      setMensaje('Favor de aceptar los términos y condiciones');
      return;
    }

    Alert.alert("Registro Exitoso", `Nombre: ${nombre}\nCorreo: ${email}`);
    setNombre('');
    setEmail('');
    setAceptaTerminos(false);
     alert('Registro Exitoso');
      setMensaje('Registro Exitoso');
  };

  return (
    <ImageBackground
      source={require("../assets/ochaco-ey0k9jo8ju9sgkuj.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.titulo}>Registro de Usuario</Text>

        <TextInput
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
          style={styles.input}
        />

        <TextInput
          placeholder="Correo electrónico"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
        />

        <View style={styles.switchContainer}>
          <Switch value={aceptaTerminos} onValueChange={setAceptaTerminos} />
          <Text style={styles.switchText}>Acepto términos y condiciones</Text>
        </View>

        <View style={styles.boton}>
          <Button title="Registrarse" onPress={handleRegistro} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  splashContainer: { flex: 1, backgroundColor: "#ff007bff", justifyContent: "center", alignItems: "center" },
  logoImage: { width: 300, height: 300, marginBottom: 5 },
  splashText: { color: "white", fontSize: 24, textAlign: "center" },
  background: { flex: 1, width: "100%", height: "100%", justifyContent: "center", alignItems: "center" },
  container: { flexGrow: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  titulo: { fontSize: 24, color: 'white', marginBottom: 20, fontWeight: 'bold', textShadowColor: '#000', textShadowRadius: 6 },
  input: { width: '100%', backgroundColor: 'rgba(255,255,255,0.8)', padding: 12, marginBottom: 10, borderRadius: 8 },
  switchContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  switchText: { marginLeft: 10, color: 'white', fontWeight: 'bold' },
  boton: { width: '100%', marginTop: 10 },
});
