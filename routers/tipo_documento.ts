import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';


export class tipo_documento {
    @Expose({name:'tipodoc_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        tipodoc_id:number;

    @Expose({name:'tipodoc_nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        tipodoc_nombre:String;

    @Expose({name:'tipodoc_abreviatura'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        tipodoc_abreviatura:string;

        constructor(data:Partial<tipo_documento>) {
            Object.assign(this, data);
            this.tipodoc_id = 0;
            this.tipodoc_nombre
            this.tipodoc_abreviatura
            }
}