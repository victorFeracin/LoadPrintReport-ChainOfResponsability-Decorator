import CidadesDecorator from "./CidadesDecorator.js";

class CSVFormatter extends CidadesDecorator {
  format() {
    const csv = this.data.join('\n');
    return csv;
  }
}

export default CSVFormatter;
