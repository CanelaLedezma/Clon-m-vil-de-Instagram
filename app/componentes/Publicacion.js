import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

// Este componente representa una publicación del feed.
// Recibe por props los datos que cambian en cada publicación.
function Publicacion({ usuario, ubicacion, imagen, descripcion }) {
  return (
    // Contenedor principal de toda la publicación
    <View style={estilos.publicacion}>

      {/* Encabezado de la publicación */}
      <View style={estilos.encabezado}>

        {/* Muestra el avatar del usuario */}
        <Image
          source={{ uri: imagen }}
          style={estilos.avatar}
        />

        {/* Agrupa el nombre del usuario y la ubicación */}
        <View style={estilos.datosUsuario}>
          <Text style={estilos.usuario}>{usuario}</Text>
          <Text style={estilos.ubicacion}>{ubicacion}</Text>
        </View>

        {/* Muestra el icono de opciones de la publicación */}
        <Ionicons
          name="ellipsis-horizontal"
          size={22}
          color="black"
        />

      </View>

      {/* Muestra la imagen principal de la publicación */}
      <Image
        source={{ uri: imagen }}
        style={estilos.imagen}
      />

      {/* Barra que contiene las acciones de la publicación */}
      <View style={estilos.barraAcciones}>

        {/* Agrupa los botones de Me gusta, comentar y compartir */}
        <View style={estilos.accionesIzquierda}>

          {/* Botón visual de Me gusta */}
          <Pressable style={estilos.botonAccion}>
            <Ionicons
              name="heart-outline"
              size={28}
              color="black"
            />
          </Pressable>

          {/* Botón visual de comentarios */}
          <Pressable style={estilos.botonAccion}>
            <Ionicons
              name="chatbubble-outline"
              size={27}
              color="black"
            />
          </Pressable>

          {/* Botón visual de compartir */}
          <Pressable style={estilos.botonAccion}>
            <Ionicons
              name="paper-plane-outline"
              size={27}
              color="black"
            />
          </Pressable>

        </View>

        {/* Botón visual para guardar la publicación */}
        <Pressable>
          <Ionicons
            name="bookmark-outline"
            size={27}
            color="black"
          />
        </Pressable>

      </View>

      {/* Muestra una cantidad de Me gusta simulada */}
      <Text style={estilos.likes}>
        120 Me gusta
      </Text>

      {/* Muestra el nombre del usuario y la descripción */}
      <Text style={estilos.descripcion}>
        <Text style={estilos.usuario}>{usuario} </Text>
        {descripcion}
      </Text>

    </View>
  );
}

// Estilos del componente Publicacion
const estilos = StyleSheet.create({
  publicacion: {
    marginBottom: 18,
    backgroundColor: '#ffffff',
  },

  encabezado: {
    // Coloca avatar, datos del usuario e icono uno al lado del otro
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },

  avatar: {
    width: 36,
    height: 36,

    // Hace que la imagen tenga forma circular
    borderRadius: 18,
    marginRight: 10,
  },

  datosUsuario: {
    // Hace que los datos ocupen el espacio disponible
    // y empuja el icono de opciones hacia la derecha
    flex: 1,
  },

  usuario: {
    fontWeight: 'bold',
    fontSize: 14,
  },

  ubicacion: {
    fontSize: 12,
    marginTop: 1,
  },

imagen: {
  width: '100%',
  aspectRatio: 1, // Mantiene la proporción cuadrada: ancho y alto quedan iguales
},

  barraAcciones: {
    // Coloca las acciones a la izquierda
    // y el botón guardar a la derecha
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingTop: 10,
  },

  accionesIzquierda: {
    // Coloca los botones uno al lado del otro
    flexDirection: 'row',
    alignItems: 'center',
  },

  botonAccion: {
    // Separa visualmente cada botón
    marginRight: 14,
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
    paddingTop: 6,
    paddingBottom: 4,
  },
});

// Permite importar Publicacion desde otros archivos
export default Publicacion;