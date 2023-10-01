import CidadesHTMLHandler from "./CidadesHTMLHandler.js";
import CidadesYAMLHandler from "./CidadesYAMLHandler.js";
import CidadesCSVHandler from "./CidadesCSVHandler.js";
import CidadesXMLHandler from "./CidadesXMLHandler.js";

export default class Client {
  constructor() {
    this.handler = new CidadesHTMLHandler();
    const YAMLHandler = new CidadesYAMLHandler();
    const CSVHandler = new CidadesCSVHandler();
    const XMLHandler = new CidadesXMLHandler();

    this.handler.setNextHandler(YAMLHandler).setNextHandler(CSVHandler).setNextHandler(XMLHandler);
  }

  loadFile(request, format) {
    const result = this.handler.handleRequest(request, format);
    if(!result) return "Tipo de arquivo não suportado.";
    return result;
  }
}