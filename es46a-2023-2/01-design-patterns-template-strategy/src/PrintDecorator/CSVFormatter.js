import CidadesDecorator from "./CidadesDecorator.js";

class CSVFormatter extends CidadesDecorator {
  format() { //Formatador para CSV
    let csv = `NOME\n`; //Adiciona o nome da coluna
    csv += this.data.join('\n'); //Adiciona a lista de cidades
    return csv;
  }
}

export default CSVFormatter; //exportando a classe
