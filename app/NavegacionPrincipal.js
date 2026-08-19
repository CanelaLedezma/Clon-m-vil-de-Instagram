import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Image } from 'react-native';

import Ionicons from '@expo/vector-icons/Ionicons';

import Inicio from './pantallas/Inicio';
import DetallePublicacion from './pantallas/DetallePublicacion';
import Perfil from './pantallas/Perfil';
import Likes from './pantallas/Likes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PestañasPrincipales() {

  // Guarda las publicaciones del feed a las que se les dio like
  const [publicacionesConLike, setPublicacionesConLike] = useState([]);

  // Agrega o quita una publicación de la lista de likes
  const cambiarLike = (publicacion) => {

    // Busca si la publicación ya tiene like
    const yaTieneLike = publicacionesConLike.some(
      (item) => item.id === publicacion.id
    );

    if (yaTieneLike) {

      // Si ya tenía like, la elimina
      setPublicacionesConLike(
        publicacionesConLike.filter(
          (item) => item.id !== publicacion.id
        )
      );

    } else {

      // Si no tenía like, la agrega
      setPublicacionesConLike([
        ...publicacionesConLike,
        publicacion,
      ]);
    }
  };

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'Inicio') {
            return (
              <Ionicons
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
              />
            );
          }

          if (route.name === 'Buscar') {
            return (
              <Ionicons
                name="search-outline"
                size={size}
                color={color}
              />
            );
          }

          if (route.name === 'Crear') {
            return (
              <Ionicons
                name="add-circle-outline"
                size={size}
                color={color}
              />
            );
          }

          if (route.name === 'Likes') {
            return (
              <Ionicons
                name={focused ? 'heart' : 'heart-outline'}
                size={size}
                color={color}
              />
            );
          }

          if (route.name === 'Perfil') {
            return (
              <Image
                source={{
                  uri: 'https://placecats.com/100/100',
                }}
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  borderWidth: focused ? 1 : 0,
                  borderColor: 'black',
                }}
              />
            );
          }
        },

        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'black',
        tabBarShowLabel: false,

        tabBarStyle: {
          height: 55,
          paddingTop: 6,
          paddingBottom: 6,
          borderTopWidth: 1,
          borderTopColor: '#dbdbdb',
          backgroundColor: '#ffffff',
        },
      })}
    >

      {/* Inicio */}
      <Tab.Screen
        name="Inicio"
        options={{
          headerTitle: 'Instagram',
          headerTitleAlign: 'center',
        }}
      >
        {(props) => (
          <Inicio
            {...props}
            publicacionesConLike={publicacionesConLike}
            cambiarLike={cambiarLike}
          />
        )}
      </Tab.Screen>

      {/* Buscar: por ahora se conecta en el próximo paso */}
      <Tab.Screen
        name="Buscar"
        component={Inicio}
        options={{
          headerShown: false,
        }}
      />

      {/* Crear: por ahora se conecta en el próximo paso */}
      <Tab.Screen
        name="Crear"
        component={Inicio}
        options={{
          headerShown: false,
        }}
      />

      {/* Publicaciones que recibieron like */}
      <Tab.Screen
        name="Likes"
        options={{
          headerTitle: 'Me gusta',
        }}
      >
        {(props) => (
          <Likes
            {...props}
            publicacionesConLike={publicacionesConLike}
            cambiarLike={cambiarLike}
          />
        )}
      </Tab.Screen>

      {/* Perfil */}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />

    </Tab.Navigator>
  );
}

function NavegacionPrincipal() {
  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Principal"
          component={PestañasPrincipales}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="DetallePublicacion"
          component={DetallePublicacion}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default NavegacionPrincipal;