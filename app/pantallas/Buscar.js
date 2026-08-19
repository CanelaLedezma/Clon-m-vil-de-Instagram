import { SafeAreaView } from 'react-native-safe-area-context';
import {
  View,
  TextInput,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useEffect, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

function Buscar({ navigation }) {

  // Guarda todas las publicaciones disponibles
  const [publicaciones, setPublicaciones] = useState([]);

  // Guarda lo que escribe el usuario en el buscador
  const [busqueda, setBusqueda] = useState('');

  // Carga imágenes cuando se abre la pantalla
  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=12')
      .then((respuesta) => {

        const publicacionesApi = respuesta.data.map((gato, indice) => ({
          id: gato.id,
          usuario: `usuario${indice + 1}`,
          ubicacion: 'Buenos Aires',
          imagen: gato.url,
          descripcion: `Publicación ${indice + 1}`,
        }));

        setPublicaciones(publicacionesApi);
      });
  }, []);

  // Filtra según el nombre de usuario escrito
  const publicacionesFiltradas = publicaciones.filter((publicacion) =>
    publicacion.usuario
      .toLowerCase()
      .includes(busqueda.toLowerCase())
  );

  return (
    <SafeAreaView style={estilos.contenedor}>

      {/* Barra de búsqueda */}
      <View style={estilos.buscador}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#666666"
        />

        <TextInput
          style={estilos.input}
          placeholder="Buscar"
          value={busqueda}
          onChangeText={setBusqueda}
        />
      </View>

      {/* Grilla de resultados */}
      <FlatList
        style={estilos.lista}
        data={publicacionesFiltradas}
        numColumns={3}

        renderItem={({ item }) => (
          <Pressable
            style={estilos.celda}
            onPress={() =>
              navigation.navigate('DetallePublicacion', {
                publicacion: item,
              })
            }
          >
            <Image
              source={{ uri: item.imagen }}
              style={estilos.imagen}
            />
          </Pressable>
        )}

        keyExtractor={(item) => item.id}
      />

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  buscador: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#efefef',
    borderRadius: 10,
    margin: 10,
    paddingHorizontal: 12,
    height: 40,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },

  lista: {
    height: 500,
  },

  celda: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },

  imagen: {
    width: '100%',
    height: '100%',
  },
});

export default Buscar;