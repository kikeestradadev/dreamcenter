# React + Vite + Tailwind CSS v4 Boilerplate

Boilerplate moderno para desarrollo frontend con React, TypeScript, Vite y Tailwind CSS v4.

## 🌐 Sitio en vivo

**[https://kikeestradadev.github.io/dreamcenter/](https://kikeestradadev.github.io/dreamcenter/)**

## 🚀 Tecnologías

- **React 19** - Biblioteca de UI
- **TypeScript** - Tipado estático
- **Vite 7** - Build tool y dev server
- **Tailwind CSS v4** - Framework de utilidades CSS
- **React Router DOM** - Enrutamiento de páginas

## 📁 Arquitectura de Carpetas

```
src/
├── components/          # Componentes reutilizables
│   ├── Navigation.tsx   # Menú de navegación
│   ├── Header.tsx       # Encabezado de página
│   ├── Hero.tsx         # Sección hero
│   ├── ContentSection.tsx # Sección de contenido
│   └── Footer.tsx       # Pie de página
│
├── pages/              # Páginas de la aplicación
│   ├── Page1.tsx       # Página Home
│   └── Page2.tsx       # Página 2
│
├── templates/          # Templates/Layouts base
│   └── Layout.tsx      # Layout principal que envuelve todas las páginas
│
├── assets/             # Recursos estáticos (imágenes, iconos, etc.)
├── App.tsx             # Componente principal con configuración de rutas
├── main.tsx            # Punto de entrada de la aplicación
└── index.css           # Estilos globales con Tailwind CSS
```

## 🏗️ Estructura del Proyecto

### `/src/components/`
Componentes reutilizables que pueden ser importados y usados en cualquier página o componente. Ejemplos:
- `Navigation.tsx` - Menú de navegación con estado activo
- `Header.tsx` - Encabezado de página
- `Hero.tsx` - Sección hero con call-to-action
- `ContentSection.tsx` - Sección de contenido con grid
- `Footer.tsx` - Pie de página

### `/src/pages/`
Páginas de la aplicación que extienden el Layout. Cada página:
- Importa y usa el componente `Layout`
- Contiene el contenido específico de esa página
- Puede importar y usar componentes de `/components`

**Ejemplo:**
```tsx
import Layout from '../templates/Layout';
import Header from '../components/Header';

const Page1 = () => {
  return (
    <Layout>
      <Header />
      {/* Contenido de la página */}
    </Layout>
  );
};
```

### `/src/templates/`
Templates base que definen la estructura común de las páginas. El `Layout.tsx`:
- Incluye la navegación (Navigation)
- Incluye el footer (Footer)
- Envuelve el contenido de cada página con `{children}`
- Asegura que todas las páginas tengan la misma estructura base

### `/src/App.tsx`
Configuración de rutas usando React Router:
- Define las rutas de la aplicación
- Mapea cada ruta a su componente de página correspondiente

## 🎨 Estilos

El proyecto utiliza **Tailwind CSS v4** para todos los estilos. La configuración se encuentra en:
- `tailwind.config.js` - Configuración de Tailwind
- `postcss.config.js` - Configuración de PostCSS
- `src/index.css` - Importa Tailwind CSS con `@import "tailwindcss"`

## 📦 Instalación

```bash
npm install
```

## 🛠️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Publicar en GitHub Pages
npm run deploy

# Linter
npm run lint
```

## 📤 GitHub Pages

El sitio se publica en GitHub Pages con la rama `gh-pages`.

**URL del sitio:** [https://kikeestradadev.github.io/dreamcenter/](https://kikeestradadev.github.io/dreamcenter/)

Para publicar o actualizar la versión en producción:

```bash
npm run deploy
```

Este comando genera el build de producción y lo sube automáticamente a GitHub Pages.

## 🔄 Flujo de Trabajo

1. **Crear un nuevo componente**: Agrégalo en `/src/components/`
2. **Crear una nueva página**: Agrégalo en `/src/pages/` y usa el `Layout`
3. **Agregar una nueva ruta**: Actualiza `App.tsx` con la nueva ruta
4. **Usar componentes**: Importa componentes desde `/components` en tus páginas

## 📝 Ejemplo de Uso

### Crear un nuevo componente

```tsx
// src/components/MiComponente.tsx
const MiComponente = () => {
  return (
    <div className="p-4 bg-blue-500 text-white">
      Mi Componente
    </div>
  );
};

export default MiComponente;
```

### Usar el componente en una página

```tsx
// src/pages/Page1.tsx
import Layout from '../templates/Layout';
import MiComponente from '../components/MiComponente';

const Page1 = () => {
  return (
    <Layout>
      <MiComponente />
    </Layout>
  );
};
```

## 🎯 Características

- ✅ Arquitectura modular y escalable
- ✅ Layout base reutilizable
- ✅ Componentes modulares
- ✅ Navegación con estado activo
- ✅ Tailwind CSS v4 configurado
- ✅ TypeScript para type safety
- ✅ React Router para enrutamiento
- ✅ Hot Module Replacement (HMR)

## 📄 Licencia

Este proyecto es un boilerplate de código abierto.
