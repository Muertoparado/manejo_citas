import {Expose, Type, Transform} from 'class-transformer';
import { IsString, IsEmpty, IsDefined} from 'class-validator';


export class medico {
    @Expose({name:'med_nroMatricula'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        med_nroMatricula:number;

    @Expose({name:'med_nombreCompleto'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{if(/^[a-zA-Z\s]+$/.test(value)) return value;
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly:true})
        med_nombreCompleto:String;

    @Expose({name:'med_consultorio'})
    @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
    @Transform(({value})=>{
        if(Math.floor(value)&& typeof value === 'number')
        return Math.floor(value);
        else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
        med_consultorio:number;

        @Expose({name:'med_especialidad'})
        @IsDefined({message: ()=>{throw{status:401, message:`el mensaje es obligatorio `}}})
        @Transform(({value})=>{
            if(Math.floor(value)&& typeof value === 'number')
            return Math.floor(value);
            else throw {status:400, message:`el dato no cumple los parametros`};},{toClassOnly: true})
            med_especialidad:number;    
            
        constructor(data:Partial<medico>) {
            Object.assign(this, data);
            this.med_nroMatricula = 0;
            this.med_nombreCompleto
            this.med_consultorio
            this.med_especialidad
            }
}