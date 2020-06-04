import { ReinoAnimal } from './ReinoAnimal';

export enum ITaxonomia{
    ARTROPODOS,
    MOLUSCOS,
    EQUINODERMOS,
    GUSANOS,
    ESPONJAS,
    MEDUSAS
};

export abstract class Invertebrado extends ReinoAnimal {
    Tipo_Esqueleto: String;

    constructor(pNombre:String, pSonido:String, pTipoEsqueleto:String, pCantidad_Extremidades:Number){
        super(pNombre, pSonido, pCantidad_Extremidades);
        this.Tipo_Esqueleto = pTipoEsqueleto;
    }

    TipoEsqueleto(){
        return `${this.Tipo_Esqueleto}`;
    }

    summary(){
        let mSuperMessage = super.summary();

        return `${mSuperMessage} con el esqueleto de tipo ${this.TipoEsqueleto}`;
        // esta es otra forma de concatenar Strings, dentro de las comillas francesas escribimos texto comun, cuando tenemos que incluir una variable abrimos llaves con un signo de dolar al frente para que se interprete el valor de la varible que estamos incluyendo
    }
}