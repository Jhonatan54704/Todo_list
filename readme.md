# Gestor de Tareas 

Este proyecto es una aplicación  para la gestión de tareas, que permite crear, listar, completar y eliminar tareas, organizándolas por prioridad y fecha límite.

Está compuesto por:

* **Frontend**: HTML, CSS y JavaScript puro
* **Backend**: Node.js + Express
* **Base de datos**: MongoDB (usando Mongoose)


# Frontend

El frontend está construido con **HTML, CSS y JavaScript Vanilla**, sin frameworks.

# Funcionalidades

* Crear tareas con:

  * Texto
  * Prioridad (Alta, Media, Baja)
  * Fecha y hora límite
* Listar tareas desde el backend
* Marcar tareas como completadas
* Eliminar tareas
* Indicadores visuales:

  * Colores según prioridad
  * Borde rojo si la tarea está vencida

# Comunicación con el Backend

El frontend consume la API REST desplegada en:


https://todo-list-u19u.onrender.com/tasks


La comunicación se realiza usando `fetch` y peticiones HTTP (`GET`, `POST`, `PUT`, `DELETE`).



# Backend

El backend está desarrollado con Node.js, Express y MongoDB

# Dependencias principales

* express
* mongoose
* cors
* dotenv

# Configuración

El backend utiliza una variable de entorno para la conexión a la base de datos:


MONGO_URI=tu_uri_de_mongodb




# Modelo de Datos (Task)

Archivo: `models/Task.js`

# Endpoints de la API

# Obtener todas las tareas

**GET** `/tasks`

**Respuesta:**

```json
[
  {
    "_id": "123",
    "text": "Estudiar Node.js",
    "completed": false,
    "priority": "alta",
    "dueDate": "2025-01-01T12:00:00.000Z",
    "createdAt": "2024-12-01T10:00:00.000Z"
  }
]
```



# Crear una tarea

**POST** `/tasks`

**Body (JSON):**

```json
{
  "text": "Hacer el proyecto",
  "priority": "media",
  "dueDate": "2025-01-05T18:00"
}
```

**Respuesta:**

```json
{
  "_id": "456",
  "text": "Hacer el proyecto",
  "completed": false
}
```



# Actualizar estado de una tarea

**PUT** `/tasks/:id`

**Body (JSON):**

```json
{
  "completed": true
}
```

---

# Eliminar una tarea

**DELETE** `/tasks/:id`

**Respuesta:**

```json
{
  "message": "Tarea eliminada"
}
```

-

# Ruta raíz

**GET** `/`

**Respuesta:**

```
API Todo List funcionando 🚀
```

---

# Ejecución del Proyecto

# Backend

```bash
npm install
node server.js
```

El servidor corre por defecto en:

```
http://localhost:3000
```

# Frontend

Abrir el archivo `index.html` directamente en el navegador.

---

# Despliegue

* Backend desplegado en **Render**
* Base de datos en **MongoDB Atlas**

---

# Autor

Proyecto desarrollado como práctica académica para reforzar conceptos de:

* APIs REST
* CRUD
* Conexión Frontend ↔ Backend
* MongoDB con Mongoose

---


