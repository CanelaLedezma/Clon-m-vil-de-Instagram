# Clon móvil de Instagram

Proyecto realizado con React Native y Expo. La aplicación simula algunas de las funciones principales de Instagram en formato móvil, utilizando navegación con React Navigation, consumo de una API externa con Axios y componentes reutilizables.

## Estructura principal del proyecto

```text
app/
│   NavegacionPrincipal.js
│
├── componentes/
│   └── Publicacion.js
│
└── pantallas/
    ├── DetallePublicacion.js
    ├── Inicio.js
    └── Perfil.js
```

## Organización de los archivos

### `NavegacionPrincipal.js`

Contiene la configuración de navegación de la aplicación.

Se utiliza un `Bottom Tab Navigator` para cambiar entre las secciones principales `Inicio` y `Perfil`, y un `Stack Navigator` para abrir pantallas internas como `DetallePublicacion`.

### `Inicio.js`

Es la pantalla principal de la aplicación.

Al cargarse, realiza una petición con Axios a The Cat API para obtener imágenes de gatos. Los datos se guardan en un estado y se muestran mediante una `FlatList`.

Cada elemento del feed utiliza el componente reutilizable `Publicacion`.

### `Publicacion.js`

Es un componente reutilizable que representa una publicación del feed.

Recibe mediante props información como:

- `usuario`
- `ubicacion`
- `imagen`
- `descripcion`
- `abrirDetalle`

También contiene el estado local necesario para controlar el botón de Me gusta y la cantidad de likes de cada publicación.

### `DetallePublicacion.js`

Muestra la información de una publicación seleccionada.

Recibe los datos enviados mediante `navigation.navigate` y `route.params`.

Incluye:

- imagen de la publicación;
- usuario y ubicación;
- descripción;
- tags simulados;
- comentarios simulados;
- botón de Me gusta con estado y contador.

### `Perfil.js`

Representa el perfil del usuario activo.

Muestra:

- foto de perfil;
- nombre y biografía;
- cantidad de publicaciones;
- seguidores y seguidos;
- botón de editar perfil;
- grilla de publicaciones.

Las imágenes de la grilla se muestran utilizando una `FlatList` con `numColumns={3}`.

Al tocar una imagen del perfil, se abre `DetallePublicacion` con los datos correspondientes.

## Hooks y estados utilizados

En este proyecto se utilizan principalmente los hooks `useState` y `useEffect`.

### `Inicio.js`

Se utiliza:

```jsx
const [publicaciones, setPublicaciones] = useState([]);
```

Este estado guarda las publicaciones que se obtienen desde The Cat API.

También se utiliza `useEffect` para realizar la petición con Axios cuando se carga la pantalla por primera vez.

```jsx
useEffect(() => {
  // Petición a la API
}, []);
```

El arreglo vacío `[]` hace que el efecto se ejecute una sola vez al cargar el componente.

### `Publicacion.js`

Cada publicación tiene dos estados locales:

```jsx
const [meGusta, setMeGusta] = useState(false);
const [cantidadLikes, setCantidadLikes] = useState(120);
```

`meGusta` indica si el usuario marcó la publicación con Me gusta.

`cantidadLikes` guarda la cantidad de Me gusta que se muestra en esa publicación.

Estos estados son locales porque pertenecen únicamente a cada componente `Publicacion`.

### `DetallePublicacion.js`

La pantalla de detalle también utiliza dos estados locales:

```jsx
const [meGusta, setMeGusta] = useState(false);
const [cantidadLikes, setCantidadLikes] = useState(120);
```

Se utilizan para modificar el corazón y el contador de Me gusta en tiempo real dentro de la pantalla de detalle.

### `Perfil.js`

Se utiliza:

```jsx
const [publicacionesPerfil, setPublicacionesPerfil] = useState([]);
```

Este estado guarda las imágenes obtenidas desde The Cat API para mostrarlas en la grilla del perfil.

También se utiliza `useEffect` para realizar la petición a la API cuando se carga la pantalla.

## Estados globales y locales

En la versión actual del proyecto no se utiliza un estado global compartido entre todas las pantallas.

Los estados son locales a cada componente:

- `Inicio`: publicaciones del feed.
- `Publicacion`: estado de Me gusta y cantidad de likes de cada publicación.
- `DetallePublicacion`: estado de Me gusta y cantidad de likes del detalle.
- `Perfil`: publicaciones de la grilla.

Los datos necesarios para abrir una publicación se envían entre pantallas mediante React Navigation utilizando `navigation.navigate` y se reciben mediante `route.params`.

## Tecnologías utilizadas

Para desarrollar el proyecto se utilizaron las siguientes tecnologías y librerías:

- React Native
- Expo
- React Navigation
- Axios
- The Cat API
- Ionicons

## Instalación y ejecución

Para ejecutar el proyecto, primero se deben instalar las dependencias:

```bash
npm install
```

Después se inicia Expo con:

```bash
npx expo start
```

Una vez iniciado el proyecto, se puede abrir desde Expo o desde el navegador según el entorno disponible.

## Funcionalidades principales

La aplicación permite:

- visualizar un feed con publicaciones obtenidas desde The Cat API;
- dar y quitar Me gusta en las publicaciones;
- abrir el detalle de una publicación;
- ver comentarios y tags simulados;
- navegar entre Inicio y Perfil mediante una barra inferior;
- visualizar un perfil con información del usuario;
- mostrar una grilla de tres columnas en el perfil;
- abrir una publicación desde la grilla del perfil;
- utilizar iconos y recursos visuales personalizados;
- mostrar una pantalla de splash y un icono de aplicación personalizados.

## Referencia visual

Para definir la apariencia de la aplicación se utilizó como referencia un diseño de Instagram en Figma.

Referencia utilizada:

https://www.figma.com/design/syAvCHlRdVmJR2Dh7irzNy/Instagram-UI-Screens--Community-?node-id=0-2&p=f&t=d14TDmvpL9c0jZMm-0

A partir de esta referencia se tomaron como guía principalmente:

- la estructura del feed;
- la ubicación del nombre de usuario y la localización;
- la barra de acciones de cada publicación;
- la navegación inferior;
- la organización del perfil;
- la distribución de las publicaciones en una grilla de tres columnas.

## Capturas de la aplicación

Las capturas principales que se utilizarán para documentar el resultado final son:

- pantalla de Inicio;
- pantalla de DetallePublicacion;
- pantalla de Perfil.

Estas capturas permiten comparar el resultado final con la referencia visual utilizada durante el desarrollo.