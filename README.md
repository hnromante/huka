# FINTO - FRONTEND
Aplicación frontend del proyecto PI-5 FINTO en react.
Proyecto creado con create-react-app --typescript
(https://facebook.github.io/create-react-app/docs/adding-typescript)
## Instalación proyecto en local
#### Requerimientos
`npm 5.2+` o `yarn (recomendado)` 
 
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
Reglas de programación y guias generales para mantener consistencia en el proyecto.

######Git
*   Los commits del proyecto deben ser escritos en **inglés**.
*   Cada feature nueva debe ir en una rama para ser mergeado posteriormente.


######Tests
Documentación sobre tests: (https://facebook.github.io/create-react-app/docs/running-tests , https://jestjs.io/docs/en/expect.html , https://github.com/kentcdodds/react-testing-library)

*   Cada componente debe tener su `Smoke Test`, que solo prueba que el componenete no crashee.
*   Ocupar `Shallow rendering`  de Enzyme para componentes que tengan hijos.
*   `Sanity` (...)


######Componentes
*   Los componenetes deben ser nombrados en `CamelCase`, al igual que la carpeta que los contiene. Almacenarlos en la carpeta `src/Components`.

*   Cada componenete tiene su `CSS` o `SCSS` autocontenido, con excepción de los estilos globales.
    Ejemplo: la carpeta `src/Components/Invoices` tiene `Invoice.tsx`, `Invoice.test.tsx` e `Invoice.css`
    
*   Los componenetes no deben superar las `4 indentaciones de profundidad`, y la indentación es de `2 espacios`.

*   Por razones de performance, al momento de iterar una lista, es importante no utilizar arrow functions para pasar parámetros a componenetes.
    [Más información](https://maarten.mulders.it/2017/07/no-bind-or-arrow-functions-in-in-jsx-props-why-how/).

*   Documentar Clases componentes según los guidelines de [JSDocs](http://usejsdoc.org/).


######Pantallas o Contenedores
*   Los contenedores deben ser nombrados en `CamelCase`, con el sufijo `Container`. Almacenarlos en la carpeta `src/Containers`.
*   Este tipo de archivos debe ser usado exclusivamente para la composición de componenetes que son rooteados con react-router.
    
    Ejemplo: al visitar la URL `/mis-facturas/` se debe linkear con react-router el componenete `<InvoicesContainer/>`, este contin
######Contextos
[Context API de react](https://reactjs.org/docs/context.html).
*   Los contextos deben ser nombrados con el sufijo `Context`; los proveedores `Provider` y los consumidores `Consumer`.

    `const AuthContext = React.createContext(null);`
*   El metodo render del proveedor debe estar descrito de la siguiente forma:
    ``` 
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                user,
                login: this.login,
                logout: this.logout
            }}>
            {this.props.children}
        </AuthContext.Provider>
    )
    ``` 
    
*   Los HOCs que implementen contexto, deben inyectar el consumidor al componenete envuelto, y comienzan con el prefijo `with`.
    Ejemplo:
    
     
    ``` 
    const withAuthConsumer = (WrappedComponent: any, props: any = {}) => {
      return class extends React.Component {
          render() {
              return (
                  <AuthConsumer>
                      {context => (
                          <WrappedComponent
                              context={context}
                              {...props}
                          />
                      )}
                  </AuthConsumer>
              )
          }
      }
    };
    export default withAuthConsumer
    ```
    
######Assets
*  Para archivos como imágenes, fuentes o estilos globales, almacenar dentro de `/src/assets`.
*  Evitar a toda costa guardar archivos `.js` de librerías externas en la carpeta `/src/assets`. Casos particulares como bootstrap son instalados a través de `npm`.
 
######Textos y Locale
*  Los textos de la aplicación deben estar ubicados en el archivo del idioma que pertenecen dentro de la carpeta `/src/locale`.

######API Calls
*  Ocupar la instancia de axios definida en `/src/utils/axiosInstance.js`.
*  Si es necesario transformar la data que llega del backend, crear una función dentro de `/src/utils/transform` con un nombre descriptivo de la operación y el prefijo `transform`.
    Ejemplo: `transformInvoice.js` .
    
######Interfaces
*  Se recomienda crear una interfaz por cada componenete que reciba parámetros para mantener un buen tipado dentro de la aplicación.
*  Nombrar con el prefijo `I`. Ejemplo: 
```
/src/interfaces/IInvoice.ts
interface IInvoice {
    id: string,
    ...
}
export default IInvoice
.
.
.
/src/Componenets/Invoice/Invoice.tsx
const Invoice: FunctionComponent<IInvoice> = ({id}) => {
    (...)
}
```



