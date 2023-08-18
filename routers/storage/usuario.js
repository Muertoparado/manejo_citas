var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class tipo_documento {
    constructor(data) {
        Object.assign(this, data);
        this.usu_codigo = 0;
        this.usu_nombre;
        this.usu_segdo_nombre;
        this.usu_primer_apellido;
        this.usu_segdo_apellido;
        this.usu_telefono;
        this.usu_direccion;
        this.usu_email;
        this.usu_tipodoc;
        this.usu_genero;
        this.usu_acudiente;
    }
}
__decorate([
    Expose({ name: 'usu_codigo' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", Number)
], tipo_documento.prototype, "usu_codigo", void 0);
__decorate([
    Expose({ name: 'usu_nombre' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_nombre", void 0);
__decorate([
    Expose({ name: 'usu_segdo_nombre' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_segdo_nombre", void 0);
__decorate([
    Expose({ name: 'usu_primer_apellido' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_primer_apellido", void 0);
__decorate([
    Expose({ name: 'usu_segdo_apellido' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_segdo_apellido", void 0);
__decorate([
    Expose({ name: 'usu_telefono' }),
    Transform(({ value }) => {
        if (/^[0-9]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_telefono", void 0);
__decorate([
    Expose({ name: 'usu_direccion' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_direccion", void 0);
__decorate([
    Expose({ name: 'usu_email' }),
    Transform(({ value }) => {
        if (/^[a-zA-Z\s]+$/.test(value))
            return value;
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_email", void 0);
__decorate([
    Expose({ name: 'usu_tipodoc' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_tipodoc", void 0);
__decorate([
    Expose({ name: 'usu_genero' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_genero", void 0);
__decorate([
    Expose({ name: 'usu_acudiente' }),
    IsDefined({ message: () => { throw { status: 401, message: `el mensaje es obligatorio ` }; } }),
    Transform(({ value }) => {
        if (Math.floor(value) && typeof value === 'number')
            return Math.floor(value);
        else
            throw { status: 400, message: `el dato no cumple los parametros` };
    }, { toClassOnly: true }),
    __metadata("design:type", String)
], tipo_documento.prototype, "usu_acudiente", void 0);
