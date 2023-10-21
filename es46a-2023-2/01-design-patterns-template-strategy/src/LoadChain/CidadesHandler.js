import * as fs from 'node:fs';

export default class CidadesHandler {

  constructor() {
    if (this.constructor === CidadesHandler) { //Proibir a classe abstrata de ser diretamente instanciada
      throw new Error("Superclasse não pode ser instanciada diretamente.");
    }
    this.nextHandler = null; //Declara o nextHandler
    this.cidades = null; //Declara cidades
  }

  ler(path) { //Abre os arquivos nos diferentes formatos
    this.cidades = fs.readFileSync(path)
  }

  getCidades() {
    return this.cidades;
  }

  setNextHandler(nextHandler) { //Serve para chamar o próximo handler caso o primeiro não consiga processar a entrada
    this.nextHandler = nextHandler;
    return nextHandler;
  }

  handleRequest(request, format) {
    if (this.nextHandler) {
      return this.nextHandler.handleRequest(request, format);
    }
    return null //Condicao de parada se o arquivo n for suportado
  }
}