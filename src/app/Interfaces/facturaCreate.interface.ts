export interface FacturaCreate {
    idCliente: number;
    detalles:  Detalle[];
}

export interface Detalle {
    idRepuesto: number;
    cantidad:   number;
}