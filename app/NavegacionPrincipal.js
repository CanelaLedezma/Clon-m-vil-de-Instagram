import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useState } from 'react';
import { Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Inicio from './pantallas/Inicio';
import Buscar from './pantallas/Buscar';
import DetallePublicacion from './pantallas/DetallePublicacion';
import Perfil from './pantallas/Perfil';
import Likes from './pantallas/Likes';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function PestañasPrincipales({
  publicacionesConLike,
  cambiarLike,
  publicacionesGuardadas,
  cambiarGuardado,
}) {
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
            publicacionesGuardadas={publicacionesGuardadas}
            cambiarGuardado={cambiarGuardado}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          headerShown: false,
        }}
      />
<Tab.Screen
  name="Crear"
  component={Inicio}
  options={{
    headerShown: false,
  }}
  listeners={{
    tabPress: (evento) => {
      // Evita que el botón Crear abra una pantalla al tocarlo.
      // El ícono se mantiene solo para respetar el diseño visual de Instagram.
      evento.preventDefault();
    },
  }}
/>
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
            publicacionesGuardadas={publicacionesGuardadas}
            cambiarGuardado={cambiarGuardado}
          />
        )}
      </Tab.Screen>

      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />

    </Tab.Navigator>
  );
}

function NavegacionPrincipal() {

  // Publicaciones que tienen Me gusta
  const [publicacionesConLike, setPublicacionesConLike] = useState([]);

  // Publicaciones guardadas
  const [publicacionesGuardadas, setPublicacionesGuardadas] = useState([]);

  // Agrega o quita una publicación de Likes
  const cambiarLike = (publicacion) => {

    const yaTieneLike = publicacionesConLike.some(
      (item) => item.id === publicacion.id
    );

    if (yaTieneLike) {
      setPublicacionesConLike(
        publicacionesConLike.filter(
          (item) => item.id !== publicacion.id
        )
      );
    } else {
      setPublicacionesConLike([
        ...publicacionesConLike,
        publicacion,
      ]);
    }
  };

  // Agrega o quita una publicación de Guardados
  const cambiarGuardado = (publicacion) => {

    const yaEstaGuardada = publicacionesGuardadas.some(
      (item) => item.id === publicacion.id
    );

    if (yaEstaGuardada) {
      setPublicacionesGuardadas(
        publicacionesGuardadas.filter(
          (item) => item.id !== publicacion.id
        )
      );
    } else {
      setPublicacionesGuardadas([
        ...publicacionesGuardadas,
        publicacion,
      ]);
    }
  };

  return (
    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Principal"
          options={{
            headerShown: false,
          }}
        >
          {(props) => (
            <PestañasPrincipales
              {...props}
              publicacionesConLike={publicacionesConLike}
              cambiarLike={cambiarLike}
              publicacionesGuardadas={publicacionesGuardadas}
              cambiarGuardado={cambiarGuardado}
            />
          )}
        </Stack.Screen>

        <Stack.Screen
          name="DetallePublicacion"
        >
          {(props) => (
            <DetallePublicacion
              {...props}
              publicacionesConLike={publicacionesConLike}
              cambiarLike={cambiarLike}
              publicacionesGuardadas={publicacionesGuardadas}
              cambiarGuardado={cambiarGuardado}
            />
          )}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>
  );
}

export default NavegacionPrincipal;