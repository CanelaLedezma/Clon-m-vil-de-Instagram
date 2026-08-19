import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Historias from '../componentes/Historias';


import Publicacion from '../componentes/Publicacion';

function Inicio({ navigation }) {

  // Guarda las publicaciones que se van a mostrar en el feed
  const [publicaciones, setPublicaciones] = useState([]);

  // Se ejecuta una sola vez cuando se carga la pantalla
  useEffect(() => {

    // Pide 10 imágenes de gatos a la API
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=10')
      .then((respuesta) => {

        // Adapta los datos de la API al formato que usa Publicacion
        const publicacionesApi = respuesta.data.map((gato, indice) => ({
          id: gato.id,
          usuario: `usuario${indice + 1}`,
          ubicacion: 'Buenos Aires',
          imagen: gato.url,
          descripcion: `Publicación ${indice + 1}`,
        }));

        // Guarda las publicaciones para que FlatList las muestre
        setPublicaciones(publicacionesApi);
      });

  }, []);

  return (
    <SafeAreaView style={estilos.contenedor}>


      {/* Lista de publicaciones del feed */}
      <FlatList
        style={estilos.lista}

        // Lista de datos que va a recorrer
        data={publicaciones}

        // Define qué se muestra por cada publicación
        renderItem={({ item }) => (
          <Publicacion
            usuario={item.usuario}
            ubicacion={item.ubicacion}
            imagen={item.imagen}
            descripcion={item.descripcion}

            // Abre el detalle enviando los datos de esta publicación
            abrirDetalle={() =>
              navigation.navigate('DetallePublicacion', {
                publicacion: item,
              })
            }
          />
        )}

        // Usa el id para identificar cada publicación
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

  // Altura temporal para poder probar el scroll desde la versión web
  lista: {
    height: 500,
  },

});

export default Inicio;