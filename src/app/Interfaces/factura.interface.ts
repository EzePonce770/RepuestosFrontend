export interface Factura {
    idFactura:       number;
    idCliente:       number;
    fecha:           Date;
    monto:           number;
    detallefacturas: DetalleFactura[];
}

export interface DetalleFactura {
    idRepuesto:       number;
    cantidad:         number;
}
