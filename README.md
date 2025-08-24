# BrandTrack - CRUD de Gestión de Marcas

## Descripción General

Este proyecto es una solución completa para la gestión de marcas, desarrollada con Django (backend, API REST) y Next.js/React (frontend moderno). Permite crear, listar, editar, eliminar y filtrar marcas de manera visual, profesional y responsiva. El código está cuidadosamente documentado y estructurado para facilitar su mantenimiento y escalabilidad.

---

## Características principales

- **Interfaz moderna y responsiva**: Inspirada en buenas prácticas de UX/UI.
- **CRUD completo**: Crear, leer, actualizar y eliminar marcas.
- **Filtro por estado**: Visualiza marcas activas, inactivas o pendientes.
- **Paginación**: Navega fácilmente entre páginas de resultados.
- **Modal para agregar**: Formulario emergente para una experiencia fluida.
- **Código documentado**: Cada componente y endpoint tiene comentarios explicativos.
- **Separación de estilos**: CSS global y por componente para fácil mantenimiento.
- **Backend robusto**: API RESTful con Django y Django REST Framework.
- **CORS habilitado**: Permite comunicación segura entre frontend y backend.

---

## Estructura del Proyecto

```
CRUD-GestionMarca/
├── Backend/
│   ├── brandapi/           # Configuración principal Django
│   └── brands/             # App de marcas (modelos, views, serializers, urls)
├── frontend/
│   ├── app/
│   │   ├── components/     # Componentes React (tabla, formulario, header, etc)
│   │   ├── css/            # Estilos por componente
│   │   ├── globals.css     # Estilos globales
│   │   └── page.jsx        # Página principal
│   └── package.json        # Dependencias frontend
└── README.md
```

---

## Tecnologías utilizadas

- **Frontend:** Next.js, React, React Icons, CSS Modules/Global
- **Backend:** Django, Django REST Framework, django-cors-headers
- **Herramientas:** ESLint, Vercel/Netlify (opcional para despliegue)

---

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/AsunaYero/CRUD-GestionMarca.git
cd CRUD-GestionMarca
```

### 2. Backend (Django)

```bash
cd Backend
python -m venv venv
venv\Scripts\activate  # En Windows
# source venv/bin/activate  # En Mac/Linux
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

El backend estará en http://localhost:8000

### 3. Frontend (Next.js)

```bash
cd ../frontend
npm install
npm run dev
```

El frontend estará en http://localhost:3000

---

## Endpoints del CRUD

- `GET /views/brands/` — Listar todas las marcas
- `POST /views/brands/` — Crear una nueva marca
- `GET /views/brands/{id}/` — Obtener detalle de una marca
- `PUT /views/brands/{id}/` — Actualizar una marca existente
- `DELETE /views/brands/{id}/` — Eliminar una marca

---

## Componentes principales (frontend)

- **page.jsx**: Página principal, integra header, tabla y modal.
- **components/header.jsx**: Header creativo y fijo.
- **components/list.jsx**: Tabla de marcas con paginación, edición, eliminación y filtro.
- **components/add.jsx**: Formulario para agregar marcas (modal).
- **components/StatusBadge.jsx**: Muestra el estado de cada marca con color.

## Backend principal

- **models.py**: Modelo Brand (id, name, owner, status, created_at, updated_at)
- **serializers.py**: Serializador BrandSerializer
- **views.py**: BrandViewSet (CRUD)
- **urls.py**: Rutas API REST

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
- Documentación en cada archivo clave.
- Listo para producción y fácil de desplegar.
- UI amigable y profesional.

---

## Créditos y contacto

Desarrollado por Yeraldi Rico Cifuentes.
