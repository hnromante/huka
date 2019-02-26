# FINTO - FRONTEND
Aplicación frontend del proyecto PI-5 FINTO en react.
Proyecto creado con create-react-app --typescript
(https://facebook.github.io/create-react-app/docs/adding-typescript)
## Instalación proyecto en local
#### Requerimientos
`npm 5.2+` o `yarn` 

#### Instalar dependencias
### `npm install` o `yarn` 

## Scripts disponibles

### `npm start`

Corre la aplicación en modo development (hot reloading).
Abrir [http://localhost:3000](http://localhost:3000) para ver en el navegador.

### `npm test`

Corre los tests unitarios.

### `npm run build`

Construye el proyecto en la carpeta `build`.

Minifica los archivos y deja la aplicación lista para producción.
`NOTA:` Si se está ocupando el buildpack de heroku para hacer el deploy (heroku create $APP_NAME --buildpack mars/create-react-app),  no es necesario construir el proyecto. Basta con incluir yarn install en el pipeline. `MAS INFO: ...`


