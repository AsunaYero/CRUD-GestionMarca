# BrandTrack - CRUD de Gestión de Marcas

## Descripción General

Este proyecto es un CRUD completo para la gestión de marcas, desarrollada con Django (backend, API REST) y Next.js/React (frontend moderno). Permite crear, listar, editar, eliminar y filtrar marcas de manera visual, profesional y responsiva. El código está cuidadosamente documentado y estructurado para facilitar su mantenimiento y escalabilidad.

---

## Características principales

- **Interfaz moderna y responsiva**: Inspirada en buenas prácticas de UX/UI.
- **CRUD completo**: Crear, leer, actualizar y eliminar marcas.
- **Filtro por estado**: Visualiza marcas activas, inactivas o pendientes.
- **Paginación**: Navega fácilmente entre páginas de resultados de marcas.
- **Modal para agregar**: Formulario emergente para una experiencia fluida.
- **Código documentado**: Se realizo comentarios en cada archivo utulizado.
- **Separación de estilos**: CSS global y por componente para fácil mantenimiento.
- **Backend robusto**: API RESTful con Django y Django REST Framework.
- **CORS habilitado**: Permite comunicación segura entre frontend y backend.

---

## Estructura del Proyecto

```
CRUD-GestionMarca/
├── Backend/
│   ├── brandapi/           # Configuración principal Django
│   ├── brands/             # App de marcas (modelos, views, serializers, urls)
│   ├── venv/               # Entorno virtual de Python para dependencias del backend
│   ├── db.sqlite3          # Base de datos SQLite generada automáticamente por Django
│   └── manage.py           # Script principal para comandos de administración de Django
├── frontend/
│   ├── app/
│   │   ├── components/     # Componentes React (tabla, formulario, header)
│   │   ├── css/            # Estilos por componente
│   │   ├── globals.css     # Estilos globales
│   │   └── page.jsx        # Página principal
│   └── package.json        # Dependencias frontend
└── README.md               # Documentacion del Proyecto
```

---

## Tecnologías utilizadas

- **Frontend:** Next.js, React, React Icons, CSS Modules/Global
- **Backend:** Django, Django REST Framework, django-cors-headers
- **Herramientas:** ESLint.

---

## Instalación y ejecución

### 1. Requisitos previos

Antes de comenzar, es necesario instalar algunas herramientas:

Instalar Python (para el backend) en este caso la version usada fue: Python 3.11.5

Descarga desde  https://www.python.org/downloads/

Instalar Node.js (para el frontend) versión usada: v22.18.0

Descarga desde  https://nodejs.org/en/download/

Se puede hacer uso Visual Studio Code para abrir el proyecto.

### 2. Descargar el proyecto desde GitHub

Escribir el siguiente comonda para descargar el proyecto. 

```bash
git clone https://github.com/AsunaYero/CRUD-GestionMarca.git
```

### 3. Usar visual studio code 
Usar visual studio code para abrir la carpeta del proyecto

### 4. Configuración del Backend (Django)

1. Abre una terminal dentro de la carpeta del backend:
```bash
cd PruebaBrand_crud/backend
```
2. Crea un entorno virtual (para instalar las librerías):
```bash
python -m venv venv
```

3. Activa el entorno virtual:
```bash
venv\Scripts\activate
```

4. Instala las librerías necesarias que estan el archivo requirements.txt
```bash
pip install -r requirements.txt
```

5. Ejecuta las migraciones de la base de datos:
```bash
python manage.py migrate
```

6. Inicia el servidor:
```bash
python manage.py runserver
```
El backend estará disponible en: http://127.0.0.1:8000/

### 5. Configuración del Frontend (Next.js / React)

1. Abre otra terminal y entra en la carpeta del frontend:
```bash
cd PruebaBrand_crud/frontend
```

2. Instala las librerías necesarias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```
El frontend estará disponible en: http://localhost:3000/
---

## Endpoints del CRUD

Estos endpoints son generados automáticamente por Django REST Framework a partir del `BrandViewSet` y el router en `Backend/brands/urls.py`:

- `GET /views/brands/` — Listar todas las marcas
- `POST /views/brands/` — Crear una nueva marca
- `GET /views/brands/{id}/` — Obtener detalle de una marca
- `PUT /views/brands/{id}/` — Actualizar una marca existente
- `DELETE /views/brands/{id}/` — Eliminar una marca

Estos endpoints permiten realizar todas las operaciones CRUD sobre el modelo Brand de forma sencilla y segura.

---

## Componentes principales (frontend)

- **app/page.jsx**: Página principal.
- **components/header.jsx**: Header fijo.
- **components/list.jsx**: Tabla de la lista de marcas con paginación, edición, eliminación y filtro.
- **components/add.jsx**: Formulario para agregar marcas a la base.
- **components/StatusBadge.jsx**: Muestra el estado de cada marca con color.
- **app/globals.css**: Estilos principales 
- **app/css**: Carpeta con estilos del header y algunos componentes.

## Backend principal

- **brands/models.py**: Modelo Brand (id, name, owner, status, created_at, updated_at)
- **brands/serializers.py**: Serializador BrandSerializer
- **brands/views.py**: BrandViewSet (CRUD)
- **brands/urls.py**: Rutas API REST

---

## Ejemplo de uso

1. Abre la app en tu navegador (http://localhost:3000)
2. Haz clic en "Agregar Marca" para abrir el modal y crear una nueva marca.
3. Edita o elimina marcas desde la tabla.
4. Filtra por estado usando el desplegable.
5. Navega entre páginas si hay muchas marcas.

---

## Buenas prácticas y ventajas

- Código limpio, modular y fácil de mantener.
- Separación clara entre frontend y backend.
- Documentación  de codigo en cada archivo clave.
- UI amigable con el usuario

---

## Créditos 

Desarrollado por Yeraldi Rico Cifuentes.
