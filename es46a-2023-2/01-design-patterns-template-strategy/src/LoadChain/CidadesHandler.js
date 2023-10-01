export default class CidadesHandler {

  constructor() {
    if (this.constructor === CidadesHandler) {
      throw new Error("Superclasse não pode ser instanciada diretamente.");
    }
    this.nextHandler = null;
  }

  setNextHandler(nextHandler) {
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