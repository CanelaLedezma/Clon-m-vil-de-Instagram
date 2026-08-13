import { SafeAreaView, StyleSheet, Text, Pressable } from 'react-native';

function Inicio({ navigation }) {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <Text style={estilos.titulo}>Inicio</Text>

      <Text>Acá estará el feed de publicaciones.</Text>

      {/* Al tocar este botón, navega a la pantalla Perfil */}
      <Pressable
        style={estilos.boton}
        onPress={() => navigation.navigate('Perfil')}
      >
        <Text style={estilos.textoBoton}>Ir al perfil</Text>
      </Pressable>
      <Pressable
    style={estilos.boton}
    onPress={() => navigation.navigate('DetallePublicacion')}>
    <Text style={estilos.textoBoton}>Ir al detalle</Text>
  </Pressable>
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

  boton: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
  },

  textoBoton: {
    fontSize: 16,
  },
});

export default Inicio;