import { Invertebrado } from './Invertebrados';

export class Esponjas extends Invertebrado{
    private _TipoAlimentacion;
    private _TipoMovimiento;

    constructor(pNombre:String, pSonido:String, pTipoEsqueleto:String, pCantidadExtremidades:Number, pTipoAlimentacion:String, pTipoMovimiento:String){
        super(pNombre, pSonido, pTipoEsqueleto, pCantidadExtremidades);

        this._TipoAlimentacion = pTipoAlimentacion;
        this._TipoMovimiento = pTipoMovimiento;
    }

    set TipoAlimentacion(pTipoAlimentacion:String){
        this._TipoAlimentacion = pTipoAlimentacion;
    }

    set TipoMovimiento(pTipoMovimiento:String){
        this._TipoMovimiento = pTipoMovimiento;
    }

    Alimentacion(){ 
        return  `Nuestro ${this.Nombre.toLowerCase()} es ${this._TipoAlimentacion}`; 
    }

    Comunicacion(){
        return `El sonido de ${this.Nombre.toLowerCase()} es ${this.Sonido}`;
    }

    Movimiento(){
        return  `El movimiento de ${this.Nombre.toLowerCase()} es ${this._TipoMovimiento}`; 
    }

    sumary(){
        return `${super.summary()}. Alimentacion => ${this.Alimentacion}. Comunicacion => ${this.Comunicacion}. Movimiento => ${this.Movimiento}`;
    }
}