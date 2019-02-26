/**
 * Clase de configuración de la aplicación
 * @author Hugo Nuñez, The Dog Company 2019. hugonunez@thedogcompany.cl
 */
class Settings {
  /**
   * @param __DEV__  Indica si la aplicación está en desarrollo o en producción.
   * Con este parámetro se cambia el BASE_URL API de la aplicación.
   */
  constructor(__DEV__: boolean) {
    this._IS_DEV = __DEV__;
    if (this._IS_DEV){
      this._BASE_URL = this._DEVELOPMENT_URL ;
      console.warn(`La aplicación está corriendo en modo DEV. \n
            La URL es: ${this._BASE_URL}. \n
            Cambia el constructor en el default export de SETTINGS en el archivo src/settings.ts para pasar a producción.`)
    }else{
      this._BASE_URL = this._PRODUCTION_URL;
    }
  }
  private readonly _IS_DEV: boolean = true;
  /**
   * @param _BASE_URL: URL con la que trabaja la aplicación
   */
  private _BASE_URL: string = '';
  /**
   * @param _PRODUCTION_URL: URL final de producción
   */
  private _PRODUCTION_URL: string = 'https://google.com/';
  /**
   * @param _DEVELOPMENT_URL: URL de desarrollo
   */
  private _DEVELOPMENT_URL: string = 'https://google.com/';
  private _NETWORK_URL: string = 'https://google.com/';
  /**
   * @param _DEVELOPMENT_URL: URL de desarrollo
   */
  get BASE_URL(): string {
    return this._BASE_URL
  }
  get IS_DEV(): boolean {
    return this._IS_DEV
  }
  set BASE_URL(value: string) {
    if (value.charAt(value.length -1) !== '/'){
      throw new Error('La BASE URL debe terminar en un caracter  "/" ')
    }
    this._BASE_URL = value;
  }
  /**
   * GLOBAL SETTINGS
   */
  public readonly VARS = {
    ENDPOINTS: {
    }
  };
}

const SETTINGS = new Settings(true);
export default SETTINGS