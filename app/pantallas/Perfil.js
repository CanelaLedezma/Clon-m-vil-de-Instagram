import { SafeAreaView, StyleSheet, Text } from 'react-native';

function Perfil() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <Text style={estilos.titulo}>Perfil</Text>
      <Text>Acá se mostrará el perfil del usuario.</Text>
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Perfil;