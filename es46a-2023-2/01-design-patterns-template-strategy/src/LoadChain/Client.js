import CidadesHTMLHandler from "./CidadesHTMLHandler.js";
import CidadesYAMLHandler from "./CidadesYAMLHandler.js";
import CidadesCSVHandler from "./CidadesCSVHandler.js";
import CidadesXMLHandler from "./CidadesXMLHandler.js";

export default class Client {
  constructor() {
    this.handler = new CidadesHTMLHandler(); //Inicio da cadeia de responsabilidades
    const YAMLHandler = new CidadesYAMLHandler();
    const CSVHandler = new CidadesCSVHandler();
    const XMLHandler = new CidadesXMLHandler();

    this.handler.setNextHandler(YAMLHandler).setNextHandler(CSVHandler).setNextHandler(XMLHandler); //Encadeamento dos objetos
  }

  loadFile(request, format) { //Método que recebe o input do arquivo e o formato do mesmo
    this.handler.ler(request);
    const result = this.handler.handleRequest(request, format);
    if(!result) return "Tipo de arquivo não suportado.";
    console.log(`\nArquivo ${format.toUpperCase()} lido com sucesso!\n\nImprimindo no formato desejado...\n`);
    return result;
  }
}