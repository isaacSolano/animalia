export abstract class ReinoAnimal{

    /* ===  Variables === */
    Nombre: String;
    Sonido: String;
    Cantidad_Extremidades: Number;

    /* === Variables para futuras entregas. === */
    Clasificaccion:[{
        "Reino " : "",
        "Filum" : "",
        "Clase" : "",
        "Orden" : "",
        "Familia" : "",
        "Genero" : "",
        "Especie" : ""}
    ];

    /*  === Metodos abstractos que se van a rellenar por sus hijos ===  */

     abstract  Alimentacion()   : String;
     abstract  Comunicacion()   : String;
     abstract  Movimiento()     : String;
     abstract  TipoEsqueleto()  : String;
     //abstract  Reproduccion() : string;
     //abstract  Respiracion() : string;
 
     /* === Metodos de la clase especificos. === */

    /************************************************************************************
     * Funcion:     sumary
     * Parametros:  n/a
     * Descripcion: muestra un texto con los valores de nuestra clase.
     * Return:      String con los datos del animal
     ************************************************************************************/
     summary(): string {
        return `El animal ${this.Nombre} que emite el sonido ${this.Sonido} 
                se compone de ${this.Cantidad_Extremidades} extremidades `;
     }
 
    /************************************************************************************
     * Funcion:     Constructor
     * Parametros:  pNombre: String, 
     *              pSonido: String, 
     *              pTipo_esqueleto: String, 
     *              pCantidad_extremidades: Number
     * Descripcion: Crea un objeto de tipo animal con los valores que vienen por parametro
     * Return:      N/A
     ************************************************************************************/
     constructor(pNombre: String, pSonido: String, pCantidad_extremidades: Number) {
        this.Nombre = pNombre;
        this.Sonido = pSonido;
        this.Cantidad_Extremidades = pCantidad_extremidades;
    }
}