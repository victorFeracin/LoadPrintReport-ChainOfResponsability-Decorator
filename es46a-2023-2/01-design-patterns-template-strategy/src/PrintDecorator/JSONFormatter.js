import CidadesDecorator from "./CidadesDecorator.js";

class JSONFormatter extends CidadesDecorator {
  format() {
    return JSON.stringify(this.data, null, 2);
  }
}

export default JSONFormatter;
