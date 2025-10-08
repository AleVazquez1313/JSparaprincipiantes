import { ScrollView, StyleSheet, Platform } from 'react-native';
import { HelloWave } from '../components/hello-wave';
import { ThemedText } from '../components/themed-text';
import { ThemedView } from '../components/themed-view';
import { Link } from 'expo-router';

export default function HomeWebScreen() {
  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16 }}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">¡Hola Vane!</ThemedText>
        <HelloWave />
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 1: Intenta esto</ThemedText>
        <ThemedText>
          Edita <ThemedText type="defaultSemiBold">app/(web)/index.tsx</ThemedText> para ver cambios.
          Presiona{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: 'cmd + d', android: 'cmd + m', web: 'F12' })}
          </ThemedText>{' '}
          para abrir las herramientas de desarrollo.
        </ThemedText>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 2: Explora</ThemedText>
        <ThemedText>
          Toca las secciones para aprender más sobre esta app.
        </ThemedText>
        <Link href="/modal">
          <ThemedText type="defaultSemiBold">Ir a Modal</ThemedText>
        </Link>
      </ThemedView>

      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Paso 3: Comienza fresco</ThemedText>
        <ThemedText>
          Cuando estés lista, ejecuta{' '}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> para obtener un nuevo directorio{' '}
          <ThemedText type="defaultSemiBold">app</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  stepContainer: { gap: 8, marginBottom: 24 },
});
