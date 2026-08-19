import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Historias from '../componentes/Historias';
import Publicacion from '../componentes/Publicacion';

function Inicio({
  navigation,
  publicacionesConLike,
  cambiarLike,
}) {

  // Guarda las publicaciones que se muestran en el feed
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

        setPublicaciones(publicacionesApi);
      });

  }, []);

  return (
    <SafeAreaView style={estilos.contenedor}>

      {/* Historias usando las mismas publicaciones del feed */}
      <Historias publicaciones={publicaciones} />

      {/* Lista principal del feed */}
      <FlatList
        style={estilos.lista}
        data={publicaciones}

        renderItem={({ item }) => {

          // Comprueba si esta publicación está guardada en Likes
          const tieneLike = publicacionesConLike.some(
            (publicacion) => publicacion.id === item.id
          );

          return (
            <Publicacion
              usuario={item.usuario}
              ubicacion={item.ubicacion}
              imagen={item.imagen}
              descripcion={item.descripcion}

              // Le informa al componente si tiene like o no
              meGusta={tieneLike}

              // Agrega o elimina esta publicación de Likes
              cambiarLike={() => cambiarLike(item)}

              // Abre el detalle enviando esta publicación
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

    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  // Altura temporal para las pruebas en web
  lista: {
    height: 500,
  },
});

export default Inicio;