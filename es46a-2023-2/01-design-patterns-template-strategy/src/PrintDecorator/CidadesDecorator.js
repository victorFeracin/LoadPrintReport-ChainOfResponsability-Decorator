import CidadesFormatter from "./CidadesFormatter.js";

class CidadesDecorator extends CidadesFormatter {
  constructor(dataFormatter) {
    super(dataFormatter.data);
    this.dataFormatter = dataFormatter;
  }

  format() {
    return this.dataFormatter.format();
  }
}

export default CidadesDecorator;
