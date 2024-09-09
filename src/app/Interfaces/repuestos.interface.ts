export interface Repuesto {
    idRepuestos:       number;
    nombreRepuesto:    string;
    idMarca:           number;
    precio:            number;
    idMarcaNavigation: IDMarcaNavigation;
}

export interface IDMarcaNavigation {
    idMarca: number;
    nombre:  string;
}