import { tipoDocumento } from "../collection/tipo_documento.js";

const tipdoc = async () => {
    const tipodocumento = new tipoDocumento();
    return await tipodocumento.tipdoc();
  };

  export{tipdoc};