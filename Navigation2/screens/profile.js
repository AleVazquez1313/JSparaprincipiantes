import { View, Text, Button } from 'react-native';

export default function profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 22, marginBottom: 20, color: 'pink' }}>
        Perfil de usuario
      </Text>

      <Button 
        title="Detalles de usuariossss"
        color= "pink"
        onPress={() => navigation.navigate('Detalle')}
      />
    </View>
  );
}
