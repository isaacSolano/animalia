export class Animal{
    nombre: String;
    sonido: String;
    tipo_esqueleto: String;
    cantidad_extremidades: Number;
    
    constructor(pNombre: String, pSonido: String, pTipo_esqueleto: String, pCantidad_extremidades: Number) {
        this.nombre = pNombre;
        this.sonido = pSonido;
        this.tipo_esqueleto = pTipo_esqueleto;
        this.cantidad_extremidades = pCantidad_extremidades;
    }
    
}