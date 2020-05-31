import { Invertebrado } from './Invertebrados';

export class Molusco extends Invertebrado {
	private _TipoAlimentacion:String;
	private _TipoMovimiento:String;

    /************************************************************************************
     * Funcion:     Constructor
     * Parametros:  pNombre: String,
     *              pSonido: String,
     *              pTipo_esqueleto: String,
     *              pCantidad_extremidades: Number
     * Descripcion: Crea un objeto de tipo molusco con los valores que vienen por parametro
     * Return:      N/A
     ************************************************************************************/
	constructor(pNombre:String, pSonido:String, pTipoEsqueleto:String, pCantidad_Extremidades:Number, pAlimentacion:String, pMovimiento: String){
		super(pNombre, pSonido, pTipoEsqueleto, pCantidad_Extremidades);
		this._TipoAlimentacion = pAlimentacion;
		this._TipoMovimiento = pMovimiento;
	}
    /************************************************************************************
     * Funcion:     Set TipoAlimentacion
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoAlimentacion
     * Return:      N/A
     ************************************************************************************/
    set TipoAlimentacion(val: String){
        this._TipoAlimentacion = val;
    }

    /************************************************************************************
     * Funcion:     Set TipoMovimiento
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoMovimiento
     * Return:      N/A
     ************************************************************************************/
    set TipoMovimiento(val: String){
        this._TipoMovimiento = val;
    }

    /************************************************************************************
     * Funcion:     get TipoAlimentacion
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoAlimentacion, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Alimentacion(){
        return  "Nuestro " + this.Nombre.toLowerCase() + " es "+this._TipoAlimentacion;
    }

    /************************************************************************************
     * Funcion:     Comunicacion
     * Parametros:  N/A
     * Descripcion: Obtiene el valor de la variable Sonido guardada en el padre
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Comunicacion(){
        return "El sonido del " + this.Nombre.toLowerCase() + " que emite es: " + this.Sonido;
    }

    /************************************************************************************
     * Funcion:     get TipoMovimiento
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoMovimiento, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Movimiento(){
        return "El movimiento del " + this.Nombre.toLowerCase()  + " es: " + this._TipoMovimiento;
    }

    /************************************************************************************
     * Funcion:     sumary
     * Parametros:  n/a
     * Descripcion: muestra un texto con los valores de nuestras clases. Llama a su padre
     * Return:      String con los datos del animal
     ************************************************************************************/
    sumary(){
        let mSuperMessage = super.summary();
        return mSuperMessage + ". " + this.Alimentacion() + this.Comunicacion() + this.Movimiento();
    }

}
