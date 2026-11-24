# Gestión de Clientes · Angular

> **Proyecto académico.** Desarrollado como examen parcial de la materia Programación IV de la Tecnicatura Universitaria en Programación (UTN – Facultad Regional Mar del Plata), 2026. La consigna fue planteada por la cátedra; el código es de mi autoría.

Aplicación web hecha con **Angular** para administrar una cartera de clientes: listarlos, ver su detalle, darlos de alta, editarlos y eliminarlos.

## Tecnologías

- Angular 22 · TypeScript
- Componentes standalone · Angular Router
- Formularios reactivos con validaciones
- HttpClient · json-server como API simulada

## Funcionalidades

- **Listado** de clientes.
- **Detalle** de cada cliente (`/cliente/:id`).
- **Alta y edición** con el mismo formulario reactivo (`/form-add` y `/form-edit/:id`), con validaciones de campos obligatorios y longitud mínima.
- **Eliminación** de clientes.
- Header y footer como componentes reutilizables.

## Estructura

```
src/app/
├── components/    header y footer
├── pages/         home, clientes, cliente-detail, form
├── services/      ClienteService (CRUD contra la API con HttpClient)
└── Models/        interfaz Cliente
```

## Cómo correrlo

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Levantar la API simulada con los datos de ejemplo de `db.json` (en otra terminal):
   ```bash
   npx json-server db.json --port 3000
   ```
3. Levantar la aplicación:
   ```bash
   npm start
   ```
4. Abrir `http://localhost:4200`.

## Autora

**Valentina Navarro** · [LinkedIn](https://linkedin.com/in/valentina-navarro-56561639a)
