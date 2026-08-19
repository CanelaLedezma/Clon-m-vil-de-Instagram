import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FlatList,
  StyleSheet,
  Text,
} from 'react-native';

import Publicacion from '../componentes/Publicacion';

function Likes({
  publicacionesConLike,
  cambiarLike,
  publicacionesGuardadas,
  cambiarGuardado,
  navigation,
}) {
  return (
    <SafeAreaView style={estilos.contenedor}>

      {publicacionesConLike.length === 0 ? (
        <Text style={estilos.mensaje}>
          Todavía no le diste like a ninguna publicación.
        </Text>
      ) : (
        <FlatList
          style={estilos.lista}
          data={publicacionesConLike}

          renderItem={({ item }) => {

            // Comprueba si esta publicación está guardada
            const estaGuardada = publicacionesGuardadas.some(
              (publicacion) => publicacion.id === item.id
            );

            return (
              <Publicacion
                usuario={item.usuario}
                ubicacion={item.ubicacion}
                imagen={item.imagen}
                descripcion={item.descripcion}

                meGusta={true}
                cambiarLike={() => cambiarLike(item)}

                guardada={estaGuardada}
                cambiarGuardado={() => cambiarGuardado(item)}

                abrirDetalle={() =>
                  navigation.navigate('DetallePublicacion', {
                    publicacion: item,
                  })
                }
              />
            );
          }}

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