# Habit Tracker App

Este es un proyecto de una aplicación de seguimiento de hábitos con un tema medieval-fantástico, creada con React Native, Expo y Tailwind CSS.

## Estructura del Proyecto

La estructura de carpetas del proyecto es la siguiente:

habit-tracker-front/
│
├── .expo/
│
├── app/
│   ├── (auth)/
│   │   ├── _layout.jsx
│   │   ├── sign-in.jsx
│   │   └── sign-up.jsx
│   ├── (tabs)/
│   │   ├── _layout.jsx
│   │   ├── bookmark.jsx
│   │   ├── create.jsx
│   │   ├── home.jsx
│   │   ├── profile.jsx
│   │   └── search.jsx
│   └── index.jsx
│
├── assets/
│   ├── fonts/
│   ├── icons/
│   └── images/
│
├── components/
│   ├── tests/
│   ├── navigation/
│   │   ├── Collapsible.tsx
│   │   ├── CustomButton.jsx
│   │   ├── ExternalLink.tsx
│   │   ├── HelloWave.tsx
│   │   ├── ParallaxScrollView.tsx
│   │   ├── ThemedText.tsx
│   │   └── ThemedView.tsx
│   └── CustomButton.jsx
│
├── constants/
│   ├── Colors.ts
│   └── icons.js
│
├── context/
│   └── GlobalProvider.js

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

1. **Clona el repositorio:**

    ```bash
    git clone https://github.com/tu_usuario/habit-tracker-front.git
    cd habit-tracker-front
    ```

2. **Instala las dependencias:**

    ```bash
    npm install
    ```

3. **Ejecuta el proyecto:**

    ```bash
    npx expo start
    ```

    Esto iniciará el servidor de desarrollo de Expo.
