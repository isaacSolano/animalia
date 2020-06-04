import { ReinoAnimal } from './ReinoAnimal';

export enum VTaxonomia {
    ANFIBIOS,
    AVES,
    MAMIFEROS,
    PECES,
    REPTILES
};

export abstract class Vertebrado extends ReinoAnimal {
    /* ===  Variables === */
    Tipo_Esqueleto: String;

    /************************************************************************************
     * Funcion:     Constructor
     * Parametros:  pNombre: String, 
     *              pSonido: String, 
     *              pTipo_esqueleto: String, 
     *              pCantidad_extremidades: Number
     * Descripcion: Crea un objeto de tipo vertebrado con los valores que vienen por parametro
     * Return:      N/A
     ************************************************************************************/
    constructor(pNombre: String, pSonido: String, pTipo_esqueleto: String, pCantidad_extremidades: Number) {
        super(pNombre, pSonido, pCantidad_extremidades);
        this.Tipo_Esqueleto = pTipo_esqueleto;
    }

    /************************************************************************************
     * Funcion:     TipoEsqueleto
     * Parametros:  N/A
     * Descripcion: Nos devuelve el valor del Tipo_Esqueleto
     * Return:      String [tipo de esqueleto]
     ************************************************************************************/
    TipoEsqueleto(){
        return `${this.Tipo_Esqueleto}`;
    }

    /************************************************************************************
     * Funcion:     sumary
     * Parametros:  n/a
     * Descripcion: muestra un texto con los valores de nuestra clase. Llama a su padre
     * Return:      String con los datos del animal
     ************************************************************************************/
    sumary(){
        let mSuperMessage = super.summary();
        return mSuperMessage + " con el esqueleto de tipo " + this.Tipo_Esqueleto;
    }


}