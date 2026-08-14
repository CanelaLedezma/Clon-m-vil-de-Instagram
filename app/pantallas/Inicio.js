import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, Text, FlatList } from 'react-native';

import Publicacion from '../componentes/Publicacion';

// Datos de prueba para comprobar el funcionamiento del feed.
// Más adelante estas imágenes van a venir de la API.
const publicaciones = [
  {
    id: '1',
    usuario: 'canela',
    ubicacion: 'Buenos Aires',
    imagen: 'https://placecats.com/500/500',
    descripcion: 'Primera publicación',
  },
  {
    id: '2',
    usuario: 'maria',
    ubicacion: 'CABA',
    imagen: 'https://placecats.com/501/501',
    descripcion: 'Segunda publicación',
  },
  {
    id: '3',
    usuario: 'lucia',
    ubicacion: 'Argentina',
    imagen: 'https://placecats.com/502/502',
    descripcion: 'Tercera publicación',
  },
];

function Inicio() {
  return (
    <SafeAreaView style={estilos.contenedor}>

      <Text style={estilos.titulo}>Inicio</Text>

      {/* Lista de publicaciones del feed */}
      <FlatList
        style={estilos.lista}
        data={publicaciones}

        // Por cada elemento crea un componente Publicacion
        renderItem={({ item }) => (
          <Publicacion
            usuario={item.usuario}
            ubicacion={item.ubicacion}
            imagen={item.imagen}
            descripcion={item.descripcion}
          />
        )}

        // Identificador único de cada publicación
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

  // Altura temporal para comprobar el scroll en web
  lista: {
    height: 500,
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default Inicio;