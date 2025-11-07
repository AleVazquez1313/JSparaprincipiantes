import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Button,
  Alert,
  StatusBar,
} from "react-native";

const noticias = {
  Novelas: [
    {
      id: 1,
      titulo: "Mi Marido Tiene Familia",
      fecha: "5 Jun 2017",
      resumen:
        "Fue una telenovela transmitida en el 2017, protagonizada por Zuria Vega y Daniel Arenas",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe_mrExdeUl33HkiUPkcqXkH5fGknVbIWrCQ&s",
    },
    {
      id: 2,
      titulo: "La Gata",
      fecha: "5 May 2014",
      resumen:
        "Fue una novela transmitida en el 2014 protagonizada por Maite Perroni y Daniel Arenas",
      imagen: "https://images.vix.com/prd/videos/video:mcp:2933886/c3cb7b00afe575998539918d4be8b5d6",
    },
  ],
  Chismes: [
    {
      id: 3,
      titulo: "Silvia Navarro",
      fecha: "3 Nov 2025",
      resumen:
        "El productor Juan Osorio confirmo a la actriz Silvia Navarro como la protagonista de su proxima telenovela",
      imagen: "https://www.lasestrellas.tv/_next/image?url=https%3A%2F%2Fst1.uvnimg.com%2F5a%2F0a%2Fd04662aceb6af05d06b0da687915%2Fsilvia-navarro-se-dejo-ver-asi-impactando-a-famosos.jpg&w=1280&q=75",
    },
    {
      id: 4,
      titulo: "Dulce Maria",
      fecha: "31 Oct 2025",
      resumen:
        "La actriz Dulce Maria anuncio que esta embarazada",
      imagen: "https://i0.wp.com/newspack-yucatan.s3.amazonaws.com/uploads/2025/10/dulce-maria-embarazada.jpg?fit=780%2C439&ssl=1",
    },
  ],
  Realitys: [
    {
      id: 5,
      titulo: "La Granja VIP",
      fecha: "12 Oct 2025",
      resumen:
        "El reality show esta siendo un gran exito tras anunciar a sus participantes",
      imagen: "https://cdn.milenio.com/uploads/media/2025/10/07/hora-comienza-granja-vip-tv.jpg",
    },
    {
      id: 6,
      titulo: "Quien es la Mascara",
      fecha: "2 Nov 2025",
      resumen:
        "La celebridad eliminada del reality el 2 de Noviembre fue Jesus Ochoa, quien se encontraba detras de la mascara de Monstruo",
      imagen: "https://miguelcaamal.com/archivos/2025/09/9735648756.jpg",
    },
  ],
  Influencers: [
    {
      id: 7,
      titulo: "Lisa Baez",
      fecha: "23 Oct 2025",
      resumen:
        "La influencer Lisa Baez gano un Eliot Award en la categoria de comedia",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjY81LN_LXBjkPTid6A9YrqR20qZleSSN8Cg&s",
    },
    {
      id: 8,
      titulo: "Aaron Mercury",
      fecha: "16 Oct 2025",
      resumen:
        "El influencer Aaron Mercury fue elegido para participar en el rality show LAS ESTRELLAS BAILAN EN HOY",
      imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIe_6RaUXSprFYtP5gJ0gycQSU7IAtUHK71w&s",
    },
  ],
};
export default function App() {
  const leerMas = (titulo) => {
    Alert.alert(
      titulo,
      "¿Buscas algo mas?",
      [
        { text: "Compartir", onPress: () => console.log("Compartir") },
        { text: "Guardar", onPress: () => console.log("Guardar") },
        { text: "Cerrar", style: "cancel" },
      ],
      { cancelable: true }
    );
      alert(titulo, "Compartir", "Guardar", "Cerrrar");
      setMensaje(titulo, "Compartir", "Guardar", "Cerrrar" );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}> Tv Notas </Text>
      </View>

      <ScrollView style={styles.scroll}>
        {Object.keys(noticias).map((categoria) => (
          <View key={categoria} style={styles.section}>
            <Text style={styles.sectionTitle}>{categoria}</Text>
            {noticias[categoria].map((articulo) => (
              <View key={articulo.id} style={styles.card}>
                <Image
                  source={{ uri: articulo.imagen }}
                  style={styles.image}
                  resizeMode="cover"
                />
                <Text style={styles.title}>{articulo.titulo}</Text>
                <Text style={styles.date}>{articulo.fecha}</Text>
                <Text style={styles.summary}>{articulo.resumen}</Text>
                <Button
                  title="Leer más"
                  onPress={() => leerMas(articulo.titulo)}
                  color="#ff0088ff"
                />
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
  },
  header: {
    backgroundColor: "#ff048eff",
    paddingVertical: 15,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  headerText: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  scroll: {
    padding: 10,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  date: {
    fontSize: 12,
    color: "#888",
  },
  summary: {
    fontSize: 14,
    marginVertical: 6,
    color: "#555",
  },
});