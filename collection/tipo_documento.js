import {con} from "../db/atlas.js";

class tipoDocumento {
    tipodoc_id;
    tipodoc_nombre;
    tipodoc_abreviatura;

  constructor() {}
  async connect() {
    try {
      const result = await con("tipoDocumento");
      return result;
    } catch (error) {
      throw error;
    }
  }
  async agregartipoDocumento() {
    try {
      const con = await this.connectconnect();
      const resultado = await con.insertOne({
        tipodoc_id: this.tipodoc_id,
        tipodoc_nombre: this.tipodoc_nombre,
        tipodoc_abreviatura: this.tipodoc_abreviatura
      });
      return resultado;
    } catch (error) {
      throw error;
    }
  }
}

export { tipoDocumento };