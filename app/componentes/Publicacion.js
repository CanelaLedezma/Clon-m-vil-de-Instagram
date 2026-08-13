import { View, Text, Image, StyleSheet } from 'react-native';

// Este componente representa una sola publicación del feed.
// Recibe por props los datos que pueden cambiar en cada publicación.
function Publicacion({ usuario, ubicacion, imagen, descripcion }) {
  return (
    // Contenedor principal de una publicación
    <View style={estilos.publicacion}>

      {/* Parte superior: muestra el usuario y la ubicación */}
      <View style={estilos.encabezado}>
        <Text style={estilos.usuario}>{usuario}</Text>
        <Text style={estilos.ubicacion}>{ubicacion}</Text>
      </View>

      {/* Muestra la imagen recibida mediante la prop "imagen" */}
      <Image
        source={{ uri: imagen }}
        style={estilos.imagen}
      />

      {/* Muestra la descripción de la publicación */}
      <Text style={estilos.descripcion}>
        <Text style={estilos.usuario}>{usuario} </Text>
        {descripcion}
      </Text>

    </View>
  );
}

// Los estilos de este componente se definen con StyleSheet.create
const estilos = StyleSheet.create({
  publicacion: {
    marginBottom: 20,
    backgroundColor: '#ffffff',
  },

  encabezado: {
    padding: 10,
  },

  usuario: {
    fontWeight: 'bold',
  },

  ubicacion: {
    fontSize: 12,
  },

  imagen: {
    width: '100%',
    height: 350,
  },

  descripcion: {
    padding: 10,
  },
});

// Permite usar Publicacion desde otros archivos, por ejemplo Inicio.js
export default Publicacion;