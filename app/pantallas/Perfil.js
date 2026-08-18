import { StyleSheet, Text, View, Image, FlatList, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Perfil() {

  // Guarda las imágenes que se van a mostrar en la grilla del perfil
  const [publicacionesPerfil, setPublicacionesPerfil] = useState([]);

  // Se ejecuta una sola vez cuando se carga la pantalla
  useEffect(() => {

    // Pide 9 imágenes de gatos para mostrar en la grilla
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=9')
      .then((respuesta) => {

        // Guarda directamente las imágenes recibidas de la API
        setPublicacionesPerfil(respuesta.data);
      });

  }, []);

  return (
    <SafeAreaView style={estilos.contenedor}>

      {/* Limita el ancho para que en web se vea parecido a una pantalla móvil */}
      <View style={estilos.contenido}>

        {/* Nombre de usuario en la parte superior */}
        <Text style={estilos.nombreUsuario}>
          canela
        </Text>

        {/* Parte superior del perfil: avatar y estadísticas */}
        <View style={estilos.informacionPrincipal}>

          {/* Foto de perfil */}
          <Image
            source={{ uri: 'https://placecats.com/200/200' }}
            style={estilos.avatar}
          />

          {/* Cantidad de publicaciones */}
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>
              9
            </Text>
            <Text>Publicaciones</Text>
          </View>

          {/* Cantidad de seguidores */}
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>
              834
            </Text>
            <Text>Seguidores</Text>
          </View>

          {/* Cantidad de cuentas seguidas */}
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>
              162
            </Text>
            <Text>Seguidos</Text>
          </View>

        </View>

        {/* Nombre y biografía del usuario activo */}
        <View style={estilos.biografia}>
          <Text style={estilos.nombre}>
            Canela
          </Text>

          <Text>
            Amante de los gatos
          </Text>
        </View>

        {/* Botón visual para editar el perfil */}
        <Pressable style={estilos.botonEditar}>
          <Text style={estilos.textoBoton}>
            Editar perfil
          </Text>
        </Pressable>

        {/* Grilla de publicaciones del perfil */}
        <FlatList
          style={estilos.lista}

          // Datos que va a recorrer la lista
          data={publicacionesPerfil}

          // significa que FlatList organiza sus elementos en 3 columnas.
          numColumns={3}

          // Define qué se muestra por cada imagen
          renderItem={({ item }) => (
            <View style={estilos.celda}>
              <Image
                source={{ uri: item.url }}
                style={estilos.imagenPublicacion}
              />
            </View>
          )}

          // Usa el id que viene de la API para identificar cada imagen
          keyExtractor={(item) => item.id}
        />

      </View>

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

    // Evita que el perfil se estire demasiado al probarlo en web
    maxWidth: 430,

    // Centra el perfil en pantallas grandes
    alignSelf: 'center',

    flex: 1,
  },

  nombreUsuario: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 12,
  },

  informacionPrincipal: {
    // Coloca avatar y estadísticas uno al lado del otro
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  avatar: {
    width: 85,
    height: 85,

    // Convierte la imagen en un círculo
    borderRadius: 43,
    marginRight: 18,
  },

  estadistica: {
    // Hace que las tres estadísticas ocupen un espacio parecido
    flex: 1,
    alignItems: 'center',
  },

  numeroEstadistica: {
    fontSize: 17,
    fontWeight: 'bold',
  },

  biografia: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },

  nombre: {
    fontWeight: 'bold',
    marginBottom: 3,
  },

  botonEditar: {
    marginHorizontal: 12,
    marginBottom: 14,
    paddingVertical: 7,
    borderWidth: 1,
    borderColor: '#dddddd',
    borderRadius: 5,
    alignItems: 'center',
  },

  textoBoton: {
    fontWeight: 'bold',
  },

  lista: {
    // Altura temporal para poder probar la grilla desde la versión web
    height: 500,
  },

  celda: {
    // hace que cada celda ocupe aproximadamente un tercio del ancho, para formar la grilla
    width: '33.33%',
    padding: 1,
  },

  imagenPublicacion: {
    width: '100%',

    // Mantiene cada imagen cuadrada
    aspectRatio: 1,
  },
});

export default Perfil;