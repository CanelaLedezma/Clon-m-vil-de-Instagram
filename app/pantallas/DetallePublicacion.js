import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

function DetallePublicacion() {
  return (
    <SafeAreaView style={estilos.contenedor}>
      <Text style={estilos.titulo}>Detalle de publicación</Text>
      <Text>Acá se mostrará la publicación seleccionada.</Text>
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

export default DetallePublicacion;