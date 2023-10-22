import CidadesFormatter from "./CidadesFormatter.js";

class CidadesDecorator extends CidadesFormatter { 
  constructor(dataFormatter) { //construtor da classe Decorator
    super(dataFormatter.data);
    this.dataFormatter = dataFormatter;
  }

  format() { //formatador da classe Decorator
    return this.dataFormatter.format();
  }
}

export default CidadesDecorator; //exportando a classe
