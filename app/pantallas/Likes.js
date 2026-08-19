import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList, StyleSheet, Text } from 'react-native';

import Publicacion from '../componentes/Publicacion';

function Likes({
  publicacionesConLike,
  cambiarLike,
  navigation,
}) {
  return (
    <SafeAreaView style={estilos.contenedor}>

      {/* Si todavía no hay publicaciones con like */}
      {publicacionesConLike.length === 0 ? (
        <Text style={estilos.mensaje}>
          Todavía no le diste like a ninguna publicación.
        </Text>
      ) : (
        <FlatList
          style={estilos.lista}

          // Muestra solamente las publicaciones que tienen like
          data={publicacionesConLike}

          renderItem={({ item }) => (
            <Publicacion
              usuario={item.usuario}
              ubicacion={item.ubicacion}
              imagen={item.imagen}
              descripcion={item.descripcion}

              // Esta publicación está dentro de Likes
              meGusta={true}

              // Permite sacar el like también desde esta pantalla
              cambiarLike={() => cambiarLike(item)}

              // Abre el detalle de esa misma publicación
              abrirDetalle={() =>
                navigation.navigate('DetallePublicacion', {
                  publicacion: item,
                })
              }
            />
          )}

          keyExtractor={(item) => item.id}
        />
      )}

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  lista: {
    height: 500,
  },

  mensaje: {
    textAlign: 'center',
    marginTop: 50,
    paddingHorizontal: 25,
    fontSize: 16,
    color: '#666666',
  },
});

export default Likes;