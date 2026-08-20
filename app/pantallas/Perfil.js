import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  Pressable,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Perfil({ navigation }) {

  // Guarda las imágenes que se muestran en la grilla del perfil
  const [publicacionesPerfil, setPublicacionesPerfil] = useState([]);

  // Se ejecuta una sola vez cuando se carga la pantalla
  useEffect(() => {

    // Pide 9 imágenes de gatos para mostrar en la grilla
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=9')
      .then((respuesta) => {

        // Guarda las imágenes recibidas desde la API
        setPublicacionesPerfil(respuesta.data);
      });

  }, []);

  return (
    <SafeAreaView style={estilos.contenedor}>

      {/* Limita el ancho para que en web se vea parecido a una pantalla móvil */}
      <View style={estilos.contenido}>

        {/* Nombre de usuario */}
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

          {/* Cantidad de publicaciones.
              Usa la cantidad real de imágenes cargadas. */}
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>
              {publicacionesPerfil.length}
            </Text>
            <Text>Publicaciones</Text>
          </View>

          {/* Cantidad simulada de seguidores */}
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>
              834
            </Text>
            <Text>Seguidores</Text>
          </View>

          {/* Cantidad simulada de cuentas seguidas */}
          <View style={estilos.estadistica}>
            <Text style={estilos.numeroEstadistica}>
              162
            </Text>
            <Text>Seguidos</Text>
          </View>

        </View>

        {/* Nombre y biografía del usuario */}
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

        {/* Grilla de publicaciones */}
        <FlatList
          style={estilos.lista}

          // Datos que recorre FlatList
          data={publicacionesPerfil}

          // Organiza las imágenes en tres columnas
          numColumns={3}

          // Define qué se muestra por cada elemento de la grilla
          renderItem={({ item, index }) => (

            // Hace que cada imagen se pueda tocar
            <Pressable
              style={estilos.celda}

              // Abre DetallePublicacion y envía los datos de esta imagen
             onPress={() =>
  navigation.navigate('DetallePublicacion', {
    publicacion: {
      id: item.id,
      usuario: 'canela',
      ubicacion: 'Buenos Aires',

      // Mantiene la misma foto de perfil de Canela
      avatar: 'https://placecats.com/200/200',

      imagen: item.url,
      descripcion: `Publicación ${index + 1} de mi perfil`,
    },
  })
}
            >

              <Image
                source={{ uri: item.url }}
                style={estilos.imagenPublicacion}
              />

            </Pressable>
          )}

          // Usa el id de la API para identificar cada imagen
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

    // Evita que el perfil se estire demasiado en web
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

    // Hace que el avatar sea circular
    borderRadius: 43,
    marginRight: 18,
  },

  estadistica: {
    // Reparte el espacio entre las estadísticas
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
    // Altura temporal para poder probar la grilla desde web
    height: 500,
  },

  celda: {
    // Cada imagen ocupa aproximadamente un tercio del ancho
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