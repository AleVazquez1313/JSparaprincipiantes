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
        "El reality sow esta siendo un gran exito tras anunciar a sus participantes",
      imagen: "",
    },
    {
      id: 6,
      titulo: "",
      fecha: "",
      resumen:
        "",
      imagen: "",
    },
  ],
  Contenido: [
    {
      id: 7,
      titulo: "a",
      fecha: "31 Oct 2025",
      resumen:
        "",
      imagen: "",
    },
    {
      id: 8,
      titulo: "",
      fecha: "30 Oct 2025",
      resumen:
        "",
      imagen: "",
    },
  ],
};

//