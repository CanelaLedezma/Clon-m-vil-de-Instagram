import { SafeAreaView, StyleSheet, Text } from 'react-native';

function Inicio() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <Text style={estilos.titulo}>Inicio</Text>
      <Text>Acá estará el feed de publicaciones.</Text>
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

export default Inicio;