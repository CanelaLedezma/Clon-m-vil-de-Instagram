import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

// Este componente representa una publicación del feed.
// Recibe por props los datos que cambian en cada publicación.
function Publicacion({ usuario, ubicacion, imagen, descripcion, abrirDetalle }) {

  // Guarda si esta publicación tiene Me gusta o no.
  // Empieza en false porque al principio el corazón está vacío.
  const [meGusta, setMeGusta] = useState(false);

  // Guarda la cantidad de Me gusta de esta publicación.
  const [cantidadLikes, setCantidadLikes] = useState(120);

  // Cambia el estado del Me gusta cada vez que se toca el corazón.
  function cambiarMeGusta() {

    // Si todavía no tenía Me gusta, suma uno.
    if (!meGusta) {
      setCantidadLikes(cantidadLikes + 1);
    }

    // Si ya tenía Me gusta, resta uno.
    else {
      setCantidadLikes(cantidadLikes - 1);
    }

    // Cambia entre true y false.
    setMeGusta(!meGusta);
  }

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

      {/* Al tocar la imagen abre la pantalla de detalle */}
      <Pressable onPress={abrirDetalle}>
        <Image
          source={{ uri: imagen }}
          style={estilos.imagen}
        />
      </Pressable>
      
      {/* Barra que contiene las acciones de la publicación */}
      <View style={estilos.barraAcciones}>

        {/* Agrupa los botones de Me gusta, comentar y compartir */}
        <View style={estilos.accionesIzquierda}>

          {/* Al tocarlo ejecuta la función cambiarMeGusta */}
          <Pressable
            style={estilos.botonAccion}
            onPress={cambiarMeGusta}
          >
            <Ionicons
              // Si meGusta es true muestra el corazón lleno.
              // Si es false muestra el corazón vacío.
              name={meGusta ? 'heart' : 'heart-outline'}
              size={28}

              // El corazón lleno se muestra rojo.
              color={meGusta ? 'red' : 'black'}
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

      {/* Muestra la cantidad actual de Me gusta */}
      <Text style={estilos.likes}>
        {cantidadLikes} Me gusta
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

    // Mantiene la proporción cuadrada:
    // el ancho y el alto quedan iguales
    aspectRatio: 1,
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