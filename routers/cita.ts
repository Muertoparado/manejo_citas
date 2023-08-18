import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';


export class genero {
    @Expose({name:'cit_codigo'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        cit_codigo:number;

    @Expose({name:'cit_fecha'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        cit_fecha:String;

        @Expose({name:'cit_estadoCita'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
            cit_estadoCita:number; 
            
            @Expose({name:'cit_medico'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        cit_medico:number;

        @Expose({name:'datosUsuario'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        datosUsuario:number;

        constructor(data:Partial<genero>) {
            Object.assign(this, data);
            this.cit_codigo = 0;
            this.cit_fecha
            this.cit_estadoCita
            this.cit_medico
            this.datosUsuario
            }
}