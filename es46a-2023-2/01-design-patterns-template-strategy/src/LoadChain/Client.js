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

  loadFile(format) {
    if(format !== null && format !== undefined) {
      if (format.toLowerCase() !== 'html' && format.toLowerCase() !== 'yaml' && format.toLowerCase() !== 'csv' && format.toLowerCase() !== 'xml') {
        console.log("Tipo de arquivo para leitura não suportado.");
        return null;
      } 
      const result = this.handler.handleRequest(format);
      console.log(`\nArquivo ${format.toUpperCase()} lido com sucesso!\n\nImprimindo no formato desejado...\n`);
      return result;

    } else {
      console.log("Erro. Insira uma extensão de arquivo no prompt")
      return null;

    }
  }
}
