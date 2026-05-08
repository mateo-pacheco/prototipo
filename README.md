# InkStock Studio

Prototipo full stack frontend en Angular 18 standalone, con estado 100% en memoria.

## Stack

- Angular 18+
- TypeScript
- Angular Material
- TailwindCSS
- Signals
- Standalone components
- Lazy loading

## Funcionalidad

- Login mock con usuarios `admin`, `tatuador` y `recepcionista`
- Dashboard con KPIs y visualizaciones simuladas
- Inventario de ropa con CRUD, tabla, filtros, ordenamiento y paginación
- Catálogo de tatuajes con gallery CRUD
- Tatuadores, clientes, citas, sesiones, reportes y configuración
- Tema claro/oscuro
- Sidebar colapsable
- Global search
- Toasts y confirm dialogs

## Estructura

- `src/app/core`: modelos, datos mock, servicios y guards
- `src/app/features`: páginas lazy por módulo
- `src/app/layouts`: shell autenticado y auth shell
- `src/app/shared`: componentes reutilizables

## Ejecutar

1. Instala dependencias:

```bash
npm install
```

2. Levanta el proyecto:

```bash
npm start
```

3. Abre:

```bash
http://localhost:4200
```

## Usuarios demo

- `admin`
- `tatuador`
- `recepcionista`

## Nota

No hay backend, base de datos ni Firebase. Todo el estado vive únicamente durante la ejecución.
