import CidadesDecorator from "./CidadesDecorator.js";

class JSONFormatter extends CidadesDecorator {
  format() {
    const json = JSON.stringify(this.data, null, 2);
    return json;
  }
}

export default JSONFormatter;
