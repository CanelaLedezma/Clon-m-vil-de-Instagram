import {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
  Pressable,
  Alert,
  Platform,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

// Comentarios simulados
const comentarios = [
  {
    id: '1',
    usuario: 'maria',
    texto: 'Qué lindo gato',
  },
  {
    id: '2',
    usuario: 'lucia',
    texto: 'Me encanta esta foto',
  },
  {
    id: '3',
    usuario: 'tomas',
    texto: 'Muy buena publicación',
  },
];

function DetallePublicacion({
  route,
  publicacionesConLike,
  cambiarLike,
  publicacionesGuardadas,
  cambiarGuardado,
}) {
  // Recibe la publicación seleccionada
  const { publicacion } = route.params;

  // Comprueba si esta publicación ya tiene like
  const meGusta = publicacionesConLike.some(
    (item) => item.id === publicacion.id
  );

  // Comprueba si esta publicación ya está guardada
  const guardada = publicacionesGuardadas.some(
    (item) => item.id === publicacion.id
  );

  // Simula la acción de compartir una publicación
  const compartirPublicacion = () => {
    if (Platform.OS === 'web') {
      window.alert('La publicación está lista para compartir.');
      return;
    }

    Alert.alert(
      'Compartir publicación',
      'La publicación está lista para compartir.'
    );
  };

  return (
    <SafeAreaView style={estilos.contenedor}>
      <ScrollView>
        <View style={estilos.contenido}>

          {/* Encabezado */}
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

          {/* Imagen principal */}
          <Image
            source={{ uri: publicacion.imagen }}
            style={estilos.imagen}
          />

          {/* Barra de acciones */}
          <View style={estilos.barraAcciones}>
            <View style={estilos.accionesIzquierda}>

              {/* Me gusta */}
              <Pressable
                onPress={() => cambiarLike(publicacion)}
              >
                <Ionicons
                  name={meGusta ? 'heart' : 'heart-outline'}
                  size={28}
                  color={meGusta ? 'red' : 'black'}
                />
              </Pressable>

              {/* Comentar */}
              <Pressable>
                <Ionicons
                  name="chatbubble-outline"
                  size={26}
                  color="black"
                />
              </Pressable>

              {/* Compartir */}
              <Pressable onPress={compartirPublicacion}>
                <Ionicons
                  name="paper-plane-outline"
                  size={26}
                  color="black"
                />
              </Pressable>

            </View>

            {/* Guardar */}
            <Pressable
              onPress={() => cambiarGuardado(publicacion)}
            >
              <Ionicons
                name={guardada ? 'bookmark' : 'bookmark-outline'}
                size={26}
                color="black"
              />
            </Pressable>
          </View>

          {/* Cantidad de Me gusta */}
          <Text style={estilos.likes}>
            {meGusta ? 121 : 120} Me gusta
          </Text>

          {/* Descripción */}
          <Text style={estilos.descripcion}>
            <Text style={estilos.usuario}>
              {publicacion.usuario}{' '}
            </Text>

            {publicacion.descripcion}
          </Text>

          {/* Tags simulados */}
          <Text style={estilos.tags}>
            #gatos #mascotas #cat
          </Text>

          {/* Comentarios */}
          <Text style={estilos.tituloComentarios}>
            Comentarios
          </Text>

          {comentarios.map((comentario) => (
            <Text
              key={comentario.id}
              style={estilos.comentario}
            >
              <Text style={estilos.usuario}>
                {comentario.usuario}{' '}
              </Text>

              {comentario.texto}
            </Text>
          ))}

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
    width: '100%',
    maxWidth: 430,
    alignSelf: 'center',
  },

  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
  },

  avatar: {
    width: 40,
    height: 40,
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
    aspectRatio: 1,
  },

  barraAcciones: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingTop: 10,
  },

  accionesIzquierda: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },

  likes: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingHorizontal: 12,
    marginTop: 8,
  },

  descripcion: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  tags: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingTop: 6,
  },

  tituloComentarios: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 12,
    paddingTop: 18,
    paddingBottom: 8,
  },

  comentario: {
    fontSize: 14,
    paddingHorizontal: 12,
    paddingBottom: 8,
  },
});

export default DetallePublicacion;