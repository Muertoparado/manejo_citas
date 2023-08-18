import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';


export class consultorio {
    @Expose({name:'cons_codigo'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        cons_codigo:number;

    @Expose({name:'cons_nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        cons_nombre:String;

        constructor(data:Partial<consultorio>) {
            Object.assign(this, data);
            this.cons_codigo = 0;
            this.cons_nombre
            }
}