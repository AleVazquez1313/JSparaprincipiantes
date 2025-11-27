import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <Ionicons name="home-outline" size={28} color="red" />
      </View>
      <Text style={styles.title}>Inicio</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconRow: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: 'red',
  },
});