import CidadesDecorator from "./CidadesDecorator.js";

class CSVFormatter extends CidadesDecorator {
  format() { //Formatador para CSV
    let csv = `NOME\n`;
    csv += this.data.join('\n');
    return csv;
  }
}

export default CSVFormatter; //exportando a classe
