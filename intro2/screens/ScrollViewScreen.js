import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

const DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const SimpleScrollView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Encabezado del Scroll</Text>
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {DATA.map((val) => (
          <View style={styles.card} key={val.id}>
            <Text style={styles.subtitle}>Soy una tarjeta {val.id}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default SimpleScrollView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 120,
    backgroundColor: "pink",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 25,
  },
  title: {
    color: "purple",
    fontSize: 20,
  },
  scrollContent: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    width: 100,
    height: 150,
    backgroundColor: "black",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  subtitle: {
    color: "pink",
    fontWeight: "bold",
  },
});
