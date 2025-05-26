# Proyecto: Gestión de Personas con XML

## Descripción

Aplicación web simple para agregar y mostrar personas almacenadas en un archivo XML.  
- Frontend: formulario para agregar personas y tabla para visualizar la lista actual.  
- Backend: servidor Node.js con Express que lee y escribe en un archivo `datos.xml` usando la librería `xml2js`.

## Tecnologías usadas

- **Node.js**: Entorno de ejecución para el servidor backend.  
- **Express.js**: Framework para construir el servidor web.  
- **xml2js**: Librería para parsear y construir XML desde JavaScript.  
- **HTML/CSS/JavaScript**: Frontend básico para la interfaz de usuario.

## Estructura del proyecto

- `/`
  - `datos.xml` — Archivo XML donde se almacenan las personas

  - `package.json` — Configuración y dependencias del proyecto

  - `server.js` — Código backend con rutas para agregar y listar personas

  - `public/`
    - `index.html` — Interfaz frontend con formulario y tabla
    - `styles.css` — Estilos CSS para el frontend

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/MaxQuiroga/FormularioXML.git
cd FormularioXML
```
2. Instalar dependecias
```bash
npm install
```

Uso
1.- Asegurar que el archivo datos.xml existe y contiene la estructura mínima:
```bash
<personas></personas>
```
2.- Ejecutar el servidor
```bash
node server.js
```
3.- Abrir el navegador 
```bash
http://localhost:3000
```
4.- Usar el formulario para agregar personas, y la tabla mostrará la lista actualizada en tiempo real

Endpoints del backend
# GET /personas
Devuelve un JSON con la lista de personas desde el archivo XML.

# POST /agregar-persona
Recibe un JSON con nombre y edad para agregar una nueva persona al XML.

# GET /
Sirve el archivo index.html con la interfaz.

# Consideraciones
- El archivo XML debe estar bien formado para evitar errores.

- Esta aplicación es un ejemplo básico para aprender a trabajar con XML en Node.js y no está optimizada para producción.

# Mejoras futuras
- Añadir validación y manejo de errores más robusto.

- Implementar funcionalidad para eliminar o editar personas.

- Usar una base de datos en lugar de un archivo XML para escalabilidad.

- Añadir interfaz más amigable con frameworks modernos (React, Vue, etc.).

## Autor
Maximiliano Quiroga Errazuriz | Correo: maxqui.oficial@gmail.com
