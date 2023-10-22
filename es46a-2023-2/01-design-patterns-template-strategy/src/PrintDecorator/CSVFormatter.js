import CidadesDecorator from "./CidadesDecorator.js";

class CSVFormatter extends CidadesDecorator {
  format() {
    if (this.data.length === 0) {
      return '';
    }

    let csv = '';
    const keys = Object.keys(this.data[0]);
    csv += keys.join(',') + '\n';

    this.data.forEach((item) => {
      csv += keys.map((key) => item[key]).join(',') + '\n';
    });

    return csv;
  }
}

export default CSVFormatter;
