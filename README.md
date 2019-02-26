# FINTO - FRONTEND
Aplicación frontend del proyecto PI-5 FINTO en react.
Proyecto creado con create-react-app --typescript
(https://facebook.github.io/create-react-app/docs/adding-typescript)
## Instalación proyecto en local
#### Requerimientos
`npm 5.2+` o `yarn`
 
Editor recomendado **WebStorm** 

#### Instalar dependencias
### `npm install` o `yarn` 

## Scripts disponibles

### `npm start` o `yarn start`

Corre la aplicación en modo development (hot reloading).
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

### `npm test` o `yarn test`

Corre los tests unitarios.

### `npm run build`

Construye el proyecto en la carpeta `build`.

Minifica los archivos y deja la aplicación lista para producción.

`NOTA:` Si se está ocupando el buildpack de heroku para hacer el deploy (heroku create $APP_NAME --buildpack mars/create-react-app),  no es necesario construir el proyecto. Basta con incluir yarn install en el pipeline. `MAS INFO: ...`

## Reglas generales del proyecto

######Git
*   Los commits del proyecto deben ser escritos en **inglés**.
*   Cada feature nueva debe ir en una rama para ser mergeado posteriormente.
######Tests
Documentación sobre tests: (https://facebook.github.io/create-react-app/docs/running-tests , https://jestjs.io/docs/en/expect.html , https://github.com/kentcdodds/react-testing-library)

*   Cada componente debe tener su `Smoke Test`, que solo prueba que el componenete no crashee.
*   Ocupar `Shallow rendering`  de Enzyme para componentes que tengan hijos.
*   `Sanity` (...)
######Componentes
*   Cada componenete tiene su `CSS` o `SCSS` autocontenido, con excepción de los estilos globales.
    
    Ejemplo: la carpeta `/MyComponent` tiene `MyComponent.tsx`, `MyComponent.test.tsx` y `MyComponent.css`
    
*   Los componenetes no deben superar las `4 indentaciones de profundidad, y la indentación es de `2 espacios`.
*   
 
######Textos y Locale
*   Los strings y textos de la aplicación 



