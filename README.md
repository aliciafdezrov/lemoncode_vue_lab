# MiniappVue

Este proyecto fue generado con [Nuxt](https://nuxtjs.org/) y hace uso de la librería de Vuetify para el estilado de los componentes. Para
arrancar el proyecto ejecutar `npm run dev`. Navegar a [http://localhost:3000](http://localhost:3000/).

## Documentación del proyecto

### Toolbar

El toolbar consta de:

- **Titulo**. Siempre visible.
- **Botón de Navegación**. Será un botón de naveqación hacia atrás en el caso que la ruta sea distinta al _index_.


### Footer

Es siempre visible al final de la página. Incluye:

- **Fecha de creación del proyecto**
- **Propietaria del código**
- **Icono github**. Redirige al perfil de github de la propiertaria del código.

### Páginas
Buscador de miembros de una organización en Github. Requisitos:

  - Se muestra por defecto el listado de miembros de lemoncode.
  - Se muestra un input que por defecto tiene como valor: lemoncode.
  - El usuario puede teclear otro nombre de organizacíon.
  - El usuario puede navegar a la página de detalle del miembro.
  - El filtrado prevalece tras ir a la página de detalle de un miembro.
  - Paginación en front-end para la lista de miembros.
  - Indicadores de carga cuando se están recuperando los datos de los miembros
de una origanización.
  
