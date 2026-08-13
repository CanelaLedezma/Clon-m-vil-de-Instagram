
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Inicio from './pantallas/Inicio';
import DetallePublicacion from './pantallas/DetallePublicacion';
import Perfil from './pantallas/Perfil';

// Crea el Stack que va a contener las distintas pantallas
const Stack = createStackNavigator();

function NavegacionPrincipal() {
  return (
    // Envuelve toda la navegación de la aplicación
    <NavigationContainer>

      {/* Contiene las pantallas registradas dentro del Stack */}
      <Stack.Navigator>

        {/* Registra la pantalla de Inicio */}
        <Stack.Screen
          name="Inicio"
          component={Inicio}
        />

        {/* Registra la pantalla de detalle de una publicación */}
        <Stack.Screen
          name="DetallePublicacion"
          component={DetallePublicacion}
        />

        {/* Registra la pantalla de Perfil */}
        <Stack.Screen
          name="Perfil"
          component={Perfil}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Permite importar este componente desde App.js
export default NavegacionPrincipal;