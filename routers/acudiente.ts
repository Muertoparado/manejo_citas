import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';


export class acudiente {
    @Expose({name:'acu_codigo'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        acu_codigo:number;

    @Expose({name:'acu_nombreCompleto'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        acu_nombreCompleto:String;

    @Expose({name:'acu_telefono'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[0-9]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        acu_telefono:string;

        @Expose({name:'acu_direccion'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
        @Transform(({value})=>{if(/^[a-zA-Z\s # - 0-9]+$/.test(value)) return value;
            else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
            acu_direccion:string;

        constructor(data:Partial<acudiente>) {
            Object.assign(this, data);
            this.acu_codigo = 0;
            this.acu_nombreCompleto
            this.acu_telefono
            this.acu_direccion
            }
}