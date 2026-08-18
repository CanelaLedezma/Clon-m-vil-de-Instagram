import { StyleSheet, Text, Image, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

// Esta pantalla recibe los datos de la publicación seleccionada
// mediante route.params.
function DetallePublicacion({ route }) {

  // Extrae la publicación que fue enviada desde Inicio
  const { publicacion } = route.params;

  return (
    <SafeAreaView style={estilos.contenedor}>

      {/* Permite recorrer el contenido si supera el alto de la pantalla */}
      <ScrollView>

        {/* Limita el ancho para que en web se vea parecido a una pantalla móvil */}
        <View style={estilos.contenido}>

          {/* Encabezado con avatar, usuario y ubicación */}
          <View style={estilos.encabezado}>

            <Image
              source={{ uri: publicacion.imagen }}
              style={estilos.avatar}
            />

            <View>
              <Text style={estilos.usuario}>
                {publicacion.usuario}
              </Text>

              <Text style={estilos.ubicacion}>
                {publicacion.ubicacion}
              </Text>
            </View>

          </View>

          {/* Imagen de la publicación seleccionada */}
          <Image
            source={{ uri: publicacion.imagen }}
            style={estilos.imagen}
          />

          {/* Usuario y descripción de la publicación */}
          <Text style={estilos.descripcion}>
            <Text style={estilos.usuario}>
              {publicacion.usuario}{' '}
            </Text>

            {publicacion.descripcion}
          </Text>

        </View>

      </ScrollView>

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  contenido: {
    // Ocupa todo el ancho disponible en celular
    width: '100%',

    // En una pantalla grande evita que la publicación
    // se estire hasta ocupar todo el navegador
    maxWidth: 430,

    // Centra la publicación cuando se prueba en web
    alignSelf: 'center',
  },

  encabezado: {
    // Coloca avatar y datos del usuario uno al lado del otro
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },

  avatar: {
    width: 40,
    height: 40,

    // Convierte el avatar en un círculo
    borderRadius: 20,
    marginRight: 10,
  },

  usuario: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  ubicacion: {
    fontSize: 12,
  },

  imagen: {
    width: '100%',

    // Mantiene una proporción cuadrada:
    // el ancho y el alto quedan iguales
    aspectRatio: 1,
  },

  descripcion: {
    fontSize: 14,
    padding: 12,
  },
});

export default DetallePublicacion;