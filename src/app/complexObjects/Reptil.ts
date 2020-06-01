import { Vertebrado } from './Vertebrado';

export class Reptil extends Vertebrado {
    private _TipoAlimentacion:String;
    private _TipoMovimiento:String;
  
    /************************************************************************************
     * Funcion:     Constructor
     * Parametros:  pNombre: String, 
     *              pSonido: String, 
     *              pTipo_esqueleto: String, 
     *              pCantidad_extremidades: Number
     * Descripcion: Crea un objeto de tipo vertebrado con los valores que vienen por parametro
     * Return:      N/A
     * Autor: Jazmin 
     * Date: 6/01/20
     ************************************************************************************/
    constructor(pNombre: String, pSonido: String, pTipo_esqueleto: String, pCantidad_extremidades: Number, pAlimentacion: String, pMovimiento: String) {
        super(pNombre, pSonido, pTipo_esqueleto, pCantidad_extremidades);
        this.TipoAlimentacion = pAlimentacion;
        this.TipoMovimiento = pMovimiento;
    }

    /************************************************************************************
     * Funcion:     Set TipoAlimentacion
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoAlimentacion
     * Return:      N/A
     * Autor: Jazmin 
     * Date: 6/01/20
     ************************************************************************************/
    set TipoAlimentacion(val: String){
        this._TipoAlimentacion = val;
    }
    
    /************************************************************************************
     * Funcion:     Set TipoMovimiento
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoMovimiento
     * Return:      N/A
     * Autor: Jazmin 
     * Date: 6/01/20
     ************************************************************************************/
    set TipoMovimiento(val: String){
        this._TipoMovimiento = val;
    }

    /************************************************************************************
     * Funcion:     get TipoAlimentacion
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoAlimentacion, con formato.
     * Return:      Valor de la variable con formato
     * Autor: Jazmin 
     * Date: 6/01/20
     ************************************************************************************/
    Alimentacion(){ 
        return  "Nuestro " + this.Nombre.toLowerCase() + " es "+this._TipoAlimentacion; 
    }

    /************************************************************************************
     * Funcion:     Comunicacion
     * Parametros:  N/A
     * Descripcion: Obtiene el valor de la variable Sonido guardada en el padre
     * Return:      Valor de la variable con formato
     * Autor: Jazmin 
     * Date: 6/01/20
     ************************************************************************************/
    Comunicacion(){ 
        return "El sonido del " + this.Nombre.toLowerCase() + " que emite es: " + this.Sonido; 
    }

    /************************************************************************************
     * Funcion:     get TipoMovimiento
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoMovimiento, con formato.
     * Return:      Valor de la variable con formato
     * Autor: Jazmin 
     * Date: 6/01/20
     ************************************************************************************/
    Movimiento(){ 
        return "El movimiento del " + this.Nombre.toLowerCase()  + " es: " + this._TipoMovimiento;  
    }

    /************************************************************************************
     * Funcion:     sumary
     * Parametros:  n/a
     * Descripcion: muestra un texto con los valores de nuestras clases. Llama a su padre
     * Return:      String con los datos del animal
     * Autor: Jazmin 
     * Date: 6/01/20<
     ************************************************************************************/
    sumary(){
        let mSuperMessage = super.summary();
        return mSuperMessage + ". " + this.Alimentacion() + this.Comunicacion() + this.Movimiento();
    }
}