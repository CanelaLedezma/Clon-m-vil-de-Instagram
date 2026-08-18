import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

import Inicio from './pantallas/Inicio';
import DetallePublicacion from './pantallas/DetallePublicacion';
import Perfil from './pantallas/Perfil';

// Stack: se usa para entrar a pantallas más profundas,
// como el detalle de una publicación.
const Stack = createStackNavigator();

// Tabs: se usa para las secciones principales,
// como Inicio y Perfil.
const Tab = createBottomTabNavigator();

// Navegación inferior principal de la aplicación
function PestañasPrincipales() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // Define el icono que aparece en cada pestaña
        tabBarIcon: ({ color, size }) => {
          let nombreIcono;

          if (route.name === 'Inicio') {
            nombreIcono = 'home-outline';
          }

          if (route.name === 'Perfil') {
            nombreIcono = 'person-circle-outline';
          }

          return (
            <Ionicons
              name={nombreIcono}
              size={size}
              color={color}
            />
          );
        },

        // Colores de la barra inferior
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',

        // Oculta el texto para que quede más parecido a Instagram
        tabBarShowLabel: false,
      })}
    >
      {/* Sección principal del feed */}
      <Tab.Screen
        name="Inicio"
        component={Inicio}
      />

      {/* Sección principal del perfil */}
      <Tab.Screen
        name="Perfil"
        component={Perfil}
      />

    </Tab.Navigator>
  );
}

function NavegacionPrincipal() {
  return (
    // Envuelve toda la navegación de la aplicación
    <NavigationContainer>

      <Stack.Navigator>

        {/* Contiene las pestañas principales de Inicio y Perfil */}
        <Stack.Screen
          name="Principal"
          component={PestañasPrincipales}
          options={{
            headerShown: false,
          }}
        />

        {/* El detalle queda fuera de las Tabs porque es una pantalla interna */}
        <Stack.Screen
          name="DetallePublicacion"
          component={DetallePublicacion}
        />

      </Stack.Navigator>

    </NavigationContainer>
  );
}

// Permite importar este componente desde App.js
export default NavegacionPrincipal;