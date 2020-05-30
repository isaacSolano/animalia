import { Invertebrado } from './Invertebrados';

export class Esponjas extends Invertebrado{
    private _TipoAlimentacion;
    private _TipoMovimiento;
    private _TipoComunicacion;

    constructor(pNombre:String, pSonido:String, pTipoEsqueleto:String, pCantidadExtremidades:Number, pTipoAlimentacion:String, pTipoMovimiento:String, pTipoComunicacion:String){
        super(pNombre, pSonido, pTipoEsqueleto, pCantidadExtremidades);

        this._TipoAlimentacion = pTipoAlimentacion;
        this._TipoMovimiento = pTipoMovimiento;
        this._TipoComunicacion = pTipoComunicacion;
    }

    set TipoAlimentacion(pTipoAlimentacion:String){
        this._TipoAlimentacion = pTipoAlimentacion;
    }

    set TipoMovimiento(pTipoMovimiento:String){
        this._TipoMovimiento = pTipoMovimiento;
    }

    set TipoComunicacion(pTipoComunicacion:String){
        this._TipoComunicacion = pTipoComunicacion;
    }

    Alimentacion(){ 
        return  `Nuestro ${this.Nombre.toLowerCase()} es ${this._TipoAlimentacion}`; 
    }

    Comunicacion(){
        return `El sonido de ${this.Nombre.toLowerCase()} es ${this._TipoComunicacion}`;
    }

    Movimiento(){
        return  `El movimiento de ${this.Nombre.toLowerCase()} es ${this._TipoMovimiento}`; 
    }

    sumary(){
        return `${super.summary()}. Alimentacion => ${this.Alimentacion}. Comunicacion => ${this.Comunicacion}. Movimiento => ${this.Movimiento}`;
    }
}