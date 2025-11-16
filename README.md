# Portfolio de Álvaro Vicent López

Portfolio profesional desarrollado con React, Vite, Tailwind CSS y React Router.

## 🚀 Características

- ✨ Diseño moderno y responsivo
- 🎨 Animaciones suaves con Tailwind CSS
- 📱 Completamente responsive (móvil, tablet, desktop)
- 🌙 Tema oscuro profesional
- ⚡ Rápido y optimizado con Vite
- 🎯 Navegación fluida con React Router
- 📧 Formulario de contacto funcional
- 📄 Sección de CV descargable

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de UI
- **Vite** - Build tool y dev server
- **Tailwind CSS** - Framework de estilos
- **React Router DOM** - Navegación
- **Lucide React** - Iconos modernos

## 📦 Instalación

1. Instalar las dependencias:
```bash
npm install
```

2. Iniciar el servidor de desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador:
```
http://localhost:5173
```

## 🏗️ Build para Producción

```bash
npm run build
```

Los archivos de producción se generarán en la carpeta `dist/`.

## 📂 Estructura del Proyecto

```
Portfolio_Alvaro/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Contact.jsx
│   │   └── Resume.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## 🎨 Personalización

### Actualizar Información Personal

Edita el archivo `src/data/portfolioData.js` para actualizar:
- Información personal
- Experiencia laboral
- Proyectos
- Habilidades
- Educación

### Cambiar Colores

Los colores principales están definidos en `tailwind.config.js`:
- `primary`: cyan-400
- `secondary`: purple-500

### Añadir Nuevas Secciones

1. Crea un nuevo componente en `src/pages/`
2. Añade la ruta en `src/App.jsx`
3. Actualiza el menú en `src/components/Navbar.jsx`

## 📱 Secciones del Portfolio

1. **Home** - Presentación principal con información destacada
2. **Experiencia** - Trayectoria laboral con timeline
3. **Proyectos** - Proyectos destacados con tecnologías usadas
4. **Habilidades** - Stack tecnológico organizado por categorías
5. **Educación** - Formación académica y certificaciones
6. **Contacto** - Formulario y datos de contacto
7. **CV** - Versión imprimible del currículum

## 🌐 Deploy

El proyecto puede ser deployado en:
- Vercel
- Netlify
- GitHub Pages
- Render
- Railway

### Deploy en Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👤 Contacto

**Álvaro Vicent López**
- Email: avicent.dev@gmail.com
- LinkedIn: [linkedin.com/in/alvaro-vicent](https://linkedin.com/in/alvaro-vicent)
- GitHub: [github.com/alvarovicent](https://github.com/alvarovicent)
- Ubicación: Alicante, España

---

Desarrollado con ❤️ por Álvaro Vicent López
