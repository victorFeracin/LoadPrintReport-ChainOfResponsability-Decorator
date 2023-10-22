import CidadesFormatter from "./CidadesFormatter";

export default class CidadesDecoratorHTML extends CidadesFormatter{
  constructor(dataFormatter) {
    super(dataFormatter.data);
    this.dataFormatter = dataFormatter;
  }

  format() {
    return this.dataFormatter.format();
  }
}