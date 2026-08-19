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
  publicacionesGuardadas,
  cambiarGuardado,
}) {
  const [publicaciones, setPublicaciones] = useState([]);

  // Carga las publicaciones desde The Cat API
  useEffect(() => {
    axios
      .get('https://api.thecatapi.com/v1/images/search?limit=10')
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

  return (
    <SafeAreaView style={estilos.contenedor}>

      <Historias publicaciones={publicaciones} />

      <FlatList
        style={estilos.lista}
        data={publicaciones}

        renderItem={({ item }) => {
          // Comprueba si esta publicación tiene like
          const tieneLike = publicacionesConLike.some(
            (publicacion) => publicacion.id === item.id
          );

          // Comprueba si esta publicación está guardada
          const estaGuardada = publicacionesGuardadas.some(
            (publicacion) => publicacion.id === item.id
          );

          return (
            <Publicacion
              usuario={item.usuario}
              ubicacion={item.ubicacion}
              imagen={item.imagen}
              descripcion={item.descripcion}

              meGusta={tieneLike}
              cambiarLike={() => cambiarLike(item)}

              guardada={estaGuardada}
              cambiarGuardado={() => cambiarGuardado(item)}

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

  lista: {
    height: 500,
  },
});

export default Inicio;