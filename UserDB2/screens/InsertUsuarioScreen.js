import { useEffect, useState, useCallback } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert, Platform } from 'react-native';
import { UsuarioController } from '../controllers/UsuarioController';

const controller = new UsuarioController();

export default function InsertUsuarioScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState('');
  const [modoEdicion, setModoEdicion] = useState(false);
  const [usuarioEditando, setUsuarioEditando] = useState(null);

  const cargarUsuarios = useCallback(async () => {
    const data = await controller.ObtenerUsuarios();
    setUsuarios(data);
  }, []);

  useEffect(() => {
    controller.addListener(cargarUsuarios);

    (async () => {
      await controller.initialize();
      await cargarUsuarios();
    })();

    return () => controller.removeListener(cargarUsuarios);
  }, []);

  const handleAgregar = async () => {
    if (!nombre.trim()) return Alert.alert("Error", "Escribe un nombre");
    await controller.crearUsuario(nombre);
    setNombre("");
  };
  
  //Para insertar un usuario
  const iniciarEdicion = (usuario) => {
    setModoEdicion(true);
    setUsuarioEditando(usuario);
    setNombre(usuario.nombre);
  };

  //Para guardar mi edicion
  const guardarEdicion = async () => {
    if (!nombre.trim()) return Alert.alert("Error", "Escribe un nombre");
    await controller.actualizarUsuario(usuarioEditando.id, nombre);
    setModoEdicion(false);
    setUsuarioEditando(null);
    setNombre("");
  };

  //Mi funcion para eliminar
  const eliminarUsuario = (id) => {
  Alert.alert(
    "Eliminar Usuario",
    "¿Seguro que quieres eliminarlo?",
    [
      { text: "Cancelar", style: "cancel" },
      { 
        text: "Eliminar", 
        style: "destructive",
        onPress: () => {
          controller.eliminarUsuario(Number(id))
            .then(() => console.log("Usuario eliminado"))
            .catch(() => Alert.alert("Error", "No se pudo eliminar el usuario"));
        }
      }
    ]
  );
};

ee
  return (
    <View style={styles.container}>
      <Text style={styles.title}>GESTIÓN DE USUARIOS</Text>
      <Text style={styles.subtitle}>{Platform.OS === "web" ? "WEB (LocalStorage)" : "SQLite"}</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>{modoEdicion ? "Editar Usuario" : "Insertar Usuario"}</Text>
        <TextInput
          style={styles.input}
          placeholder="Escribe el nombre del usuario"
          value={nombre}
          onChangeText={setNombre}
        />
        <TouchableOpacity style={styles.btnPrimary} onPress={modoEdicion ? guardarEdicion : handleAgregar}>
          <Text style={styles.btnText}>{modoEdicion ? "Guardar Cambios" : "Agregar Usuario"}</Text>
        </TouchableOpacity>
        {modoEdicion && (
          <TouchableOpacity style={styles.btnCancel} onPress={() => { setModoEdicion(false); setUsuarioEditando(null); setNombre(""); }}>
            <Text style={{ color: "#555", fontWeight: "600" }}>Cancelar</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={[styles.card, { flex: 1 }]}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>Lista de Usuarios</Text>
          <TouchableOpacity onPress={cargarUsuarios}><Text style={{ color: "#007bff", fontWeight: "700" }}>Recargar</Text></TouchableOpacity>
        </View>

        {usuarios.length === 0 ? (
          <Text style={{ textAlign: "center", marginTop: 10 }}>Ya borraste todos</Text>
        ) : (
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.usuarioCard}>
                <View style={{ flex: 1 }}>
                  <Text style={styles.usuarioNombre}>{item.nombre}</Text>
                  <Text style={styles.usuarioFecha}>{item.fecha_creacion}</Text>
                </View>
                <TouchableOpacity style={styles.btnEdit} onPress={() => iniciarEdicion(item)}>
                  <Text style={styles.btnSmallText}>Editar el nombre</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnDelete} onPress={() => eliminarUsuario(item.id)}>
                  <Text style={styles.btnSmallText}>Eliminar el usuario</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#eee" },
  title: { fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 5 },
  subtitle: { textAlign: "center", color: "#666", marginBottom: 15 },
  card: { backgroundColor: "white", padding: 15, borderRadius: 12, marginBottom: 15, elevation: 4 },
  cardTitle: { fontSize: 18, fontWeight: "700", marginBottom: 10 },
  input: { backgroundColor: "#f3f3f3", padding: 10, borderRadius: 8, fontSize: 16, marginBottom: 10 },
  btnPrimary: { backgroundColor: "#007bff", padding: 12, borderRadius: 8, alignItems: "center", marginBottom: 5 },
  btnText: { color: "white", fontWeight: "700" },
  btnCancel: { marginTop: 5, padding: 10, alignItems: "center" },
  usuarioCard: { flexDirection: "row", backgroundColor: "#f7f7f7", padding: 10, borderRadius: 8, marginBottom: 8, alignItems: "center" },
  usuarioNombre: { fontSize: 16, fontWeight: "700" },
  usuarioFecha: { fontSize: 12, color: "#666" },
  btnEdit: { marginRight: 8, paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "#ff078fff", borderRadius: 6 },
  btnDelete: { paddingHorizontal: 10, paddingVertical: 5, backgroundColor: "#00ccffff", borderRadius: 6 },
  btnSmallText: { color: "white", fontWeight: "700" },
  rowBetween: { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }
});
