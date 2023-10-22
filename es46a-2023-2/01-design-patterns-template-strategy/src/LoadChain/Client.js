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
    if(format !== null && format !== undefined) { //Verificação caso não seja especificado nenhum valor para o formatLoader no prompt
      if (format.toLowerCase() !== 'html' && format.toLowerCase() !== 'yaml' && format.toLowerCase() !== 'csv' && format.toLowerCase() !== 'xml') { //Verificaçao para caso o formato seja diferente dos especificados
        console.log(`\nTipo de arquivo ".${format.toUpperCase()}" para leitura não suportado.`);
        return null;

      } 
      const result = this.handler.handleRequest(format); //Inicia a chamada dos métodos das instâncias na cadeia
      console.log(`\nArquivo ${format.toUpperCase()} lido com sucesso!\n\nImprimindo no formato desejado...\n`);
      return result; //Retorno do array contendo as cidades

    } else {
      console.log("\nErro. Insira uma extensão de arquivo para carregamento no prompt")
      return null;

    }
  }
}
