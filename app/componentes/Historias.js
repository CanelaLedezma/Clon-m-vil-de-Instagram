import { View, Text, Image, FlatList, StyleSheet } from 'react-native';

function Historias({ publicaciones }) {

  // Usa algunas publicaciones del feed para mostrar las historias
  const historias = publicaciones.slice(0, 6);

  return (
    <View style={estilos.contenedor}>

      <FlatList
        data={historias}

        // Muestra las historias horizontalmente
        horizontal

        // Oculta la barra de scroll
        showsHorizontalScrollIndicator={false}

        keyExtractor={(item) => item.id}

        renderItem={({ item, index }) => (
          <View style={estilos.historia}>

            {/* Borde de color similar al de las historias de Instagram */}
            <View style={estilos.bordeHistoria}>
              <Image
                source={{ uri: item.imagen }}
                style={estilos.imagen}
              />
            </View>

            <Text
              style={estilos.nombre}
              numberOfLines={1}
            >
              {index === 0 ? 'Tu historia' : item.usuario}
            </Text>

          </View>
        )}
      />

    </View>
  );
}

const estilos = StyleSheet.create({
  contenedor: {
    borderBottomWidth: 1,
    borderBottomColor: '#dddddd',
    paddingVertical: 10,
  },

  historia: {
    width: 82,
    alignItems: 'center',
  },

  bordeHistoria: {
    width: 68,
    height: 68,
    borderRadius: 34,
    borderWidth: 2,
    borderColor: '#d62976',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imagen: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  nombre: {
    width: 72,
    marginTop: 5,
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Historias;