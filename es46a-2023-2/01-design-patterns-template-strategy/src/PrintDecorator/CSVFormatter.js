import CidadesDecorator from "./CidadesDecorator.js";

class CSVFormatter extends CidadesDecorator {
  format() {
    let csv = `NOME\n`;
    csv += this.data.join('\n');
    return csv;
  }
}

export default CSVFormatter;
