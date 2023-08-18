import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';


export class especialidad {
    @Expose({name:'esp_id'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        esp_id:number;

    @Expose({name:'esp_nombre'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        esp_nombre:String;

        constructor(data:Partial<especialidad>) {
            Object.assign(this, data);
            this.esp_id = 0;
            this.esp_nombre
            }
}