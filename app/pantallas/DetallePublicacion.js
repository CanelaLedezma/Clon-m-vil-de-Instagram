import { StyleSheet, Text, Image, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

// Comentarios simulados para mostrar en el detalle
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

function DetallePublicacion({ route }) {

  // Recibe la publicación que se envió desde Inicio
  const { publicacion } = route.params;

  // Guarda si la publicación tiene Me gusta o no
  const [meGusta, setMeGusta] = useState(false);

  // Guarda la cantidad de Me gusta
  const [cantidadLikes, setCantidadLikes] = useState(120);

  // Cambia el estado del corazón y actualiza la cantidad
  function cambiarMeGusta() {

    if (!meGusta) {
      setCantidadLikes(cantidadLikes + 1);
    }

    else {
      setCantidadLikes(cantidadLikes - 1);
    }

    setMeGusta(!meGusta);
  }

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

          {/* Barra de acciones */}
          <View style={estilos.barraAcciones}>

            {/* Al tocar el corazón cambia el estado del Me gusta */}
            <Pressable onPress={cambiarMeGusta}>
              <Ionicons
                // Muestra corazón lleno o vacío según el estado
                name={meGusta ? 'heart' : 'heart-outline'}
                size={28}

                // El corazón lleno se muestra rojo
                color={meGusta ? 'red' : 'black'}
              />
            </Pressable>

          </View>

          {/* Muestra la cantidad actual de Me gusta */}
          <Text style={estilos.likes}>
            {cantidadLikes} Me gusta
          </Text>

          {/* Usuario y descripción */}
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

          {/* Título de la sección de comentarios */}
          <Text style={estilos.tituloComentarios}>
            Comentarios
          </Text>

          {/* Recorre los comentarios y muestra cada uno */}
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

    // Evita que el detalle se estire demasiado en web
    maxWidth: 430,

    // Centra el contenido en pantallas grandes
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

    // Hace que el avatar sea circular
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

    // Mantiene la imagen cuadrada
    aspectRatio: 1,
  },

  barraAcciones: {
    paddingHorizontal: 12,
    paddingTop: 10,
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