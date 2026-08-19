import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
  Alert,
  Platform,
} from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

function Publicacion({
  usuario,
  ubicacion,
  imagen,
  descripcion,
  abrirDetalle,
  meGusta,
  cambiarLike,
  guardada,
  cambiarGuardado,
}) {

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
    <View style={estilos.contenedor}>

      {/* Encabezado de la publicación */}
      <View style={estilos.encabezado}>

        <View style={estilos.datosUsuario}>

          <Image
            source={{ uri: imagen }}
            style={estilos.avatar}
          />

          <View>
            <Text style={estilos.usuario}>
              {usuario}
            </Text>

            <Text style={estilos.ubicacion}>
              {ubicacion}
            </Text>
          </View>

        </View>

        <Ionicons
          name="ellipsis-horizontal"
          size={22}
          color="black"
        />

      </View>

      {/* Imagen principal */}
      <Pressable onPress={abrirDetalle}>
        <Image
          source={{ uri: imagen }}
          style={estilos.imagen}
        />
      </Pressable>

      {/* Barra de acciones */}
      <View style={estilos.acciones}>

        <View style={estilos.accionesIzquierda}>

          {/* Me gusta */}
          <Pressable onPress={cambiarLike}>
            <Ionicons
              name={meGusta ? 'heart' : 'heart-outline'}
              size={27}
              color={meGusta ? 'red' : 'black'}
            />
          </Pressable>

          {/* Comentar */}
          <Pressable onPress={abrirDetalle}>
            <Ionicons
              name="chatbubble-outline"
              size={25}
              color="black"
            />
          </Pressable>

          {/* Compartir */}
          <Pressable onPress={compartirPublicacion}>
            <Ionicons
              name="paper-plane-outline"
              size={25}
              color="black"
            />
          </Pressable>

        </View>

        {/* Guardar */}
        <Pressable onPress={cambiarGuardado}>
          <Ionicons
            name={guardada ? 'bookmark' : 'bookmark-outline'}
            size={25}
            color="black"
          />
        </Pressable>

      </View>

      {/* Cantidad de likes */}
      <Text style={estilos.likes}>
        {meGusta ? 121 : 120} Me gusta
      </Text>

      {/* Descripción */}
      <Text style={estilos.descripcion}>
        <Text style={estilos.usuario}>
          {usuario}
        </Text>{' '}
        {descripcion}
      </Text>

    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    backgroundColor: '#ffffff',
    marginBottom: 18,
  },

  encabezado: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  datosUsuario: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },

  usuario: {
    fontWeight: 'bold',
  },

  ubicacion: {
    fontSize: 12,
  },

  imagen: {
    width: '100%',
    aspectRatio: 1,
  },

  acciones: {
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
    paddingHorizontal: 12,
    paddingTop: 8,
  },

  descripcion: {
    paddingHorizontal: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default Publicacion;