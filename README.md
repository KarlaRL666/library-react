# 📚 Sistema de Librería (`libraryp2`)

Aplicación web desarrollada en **React** para la gestión del catálogo e inventario de una librería. Permite registrar, consultar, editar y eliminar libros de forma interactiva, almacenando los datos de manera persistente en el navegador mediante `localStorage`.

---

## ✨ Características Principales

- **Gestión CRUD completa**:
  - **Crear (`add`)**: Registro de nuevos libros con generación automática de identificadores únicos (`uuid`).
  - **Leer**: Visualización del catálogo completo en una tabla responsiva con contador de registros, indicadores de descuento, etiquetas de stock y previsualización de portada.
  - **Actualizar (`update`)**: Edición en línea de cualquier libro existente cargando sus datos directamente en el formulario.
  - **Eliminar (`delete`)**: Eliminación inmediata de libros del inventario.
- **Persistencia de Datos**: Sincronización automática del estado del catálogo con `localStorage`.
- **Manejo de Estado Predecible**: Implementado con hooks nativos de React (`useReducer`, `useState`, `useEffect`).
- **Interfaz Responsiva**: Estilizada con **Bootstrap 5** para adaptarse a dispositivos móviles y de escritorio.

---

## 🛠️ Tecnologías Utilizadas

- **React 19** (`react`, `react-dom`)
- **Create React App** (`react-scripts`)
- **Bootstrap 5.3** (vía CDN)
- **UUID** (`uuid` para generación de identificadores únicos)
- **LocalStorage API** (persistencia local en el navegador)

---

## 📂 Estructura del Proyecto

```text
libraryp2/
├── public/
│   ├── index.html              # Plantilla HTML principal (incluye Bootstrap 5 CDN)
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── FormularioAdd.jsx   # Formulario para agregar y editar libros
│   │   ├── Libros.jsx          # Componente contenedor principal y gestión de estado
│   │   └── TablaLibros.jsx     # Tabla de visualización del catálogo y acciones
│   ├── data/
│   │   └── librosData.js       # Datos de ejemplo / catálogo inicial de referencia
│   ├── reducers/
│   │   └── LibrosReducers.js   # Reducer con las acciones 'add', 'update' y 'delete'
│   ├── App.js                  # Componente raíz con barra de navegación
│   └── index.js                # Punto de entrada de la aplicación React
└── package.json                # Dependencias y scripts del proyecto
```

---

## 📋 Modelo de Datos de un Libro

Cada libro registrado en el sistema cuenta con las siguientes propiedades:

| Campo | Tipo | Descripción |
| :--- | :--- | :--- |
| `id` | `string` | Identificador único generado con `uuid` |
| `titulo` | `string` | Título de la obra (obligatorio) |
| `autor` | `string` | Nombre del autor (obligatorio) |
| `genero` | `string` | Categoría (`Novela`, `Ciencia Ficción`, `Fantasía`, `Historia`, `Biografía`, `Terror`) |
| `precio` | `number` | Precio unitario en formato decimal |
| `descuento` | `number` | Porcentaje de descuento aplicable (`0` - `100`) |
| `stock` | `number` | Cantidad de unidades disponibles en inventario |
| `portada` | `string` | URL de la imagen de portada (con fallback automático si no está disponible) |
| `sinopsis` | `string` | Resumen o descripción breve del libro |

---

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Tener instalado [Node.js](https://nodejs.org/) (versión 18 o superior recomendada) y `npm`.

### Pasos

1. **Clonar el repositorio o ubicarse en el directorio del proyecto:**
   ```bash
   cd libraryp2
   ```

2. **Instalar las dependencias:**
   ```bash
   npm install
   ```
   > **Nota:** Si el paquete `uuid` no se encuentra instalado en tu entorno local, puedes instalarlo ejecutando:
   > ```bash
   > npm install uuid
   > ```

3. **Iniciar el servidor de desarrollo:**
   ```bash
   npm start
   ```
   La aplicación se abrirá automáticamente en [http://localhost:3000](http://localhost:3000).

---

## 📜 Scripts Disponibles

En el directorio del proyecto puedes ejecutar:

- **`npm start`**: Ejecuta la aplicación en modo de desarrollo.
- **`npm test`**: Inicia el corredor de pruebas interactivo.
- **`npm run build`**: Compila y optimiza la aplicación para producción en la carpeta `build/`.
- **`npm run eject`**: Expone la configuración interna de Webpack, Babel y ESLint (operación irreversible).
