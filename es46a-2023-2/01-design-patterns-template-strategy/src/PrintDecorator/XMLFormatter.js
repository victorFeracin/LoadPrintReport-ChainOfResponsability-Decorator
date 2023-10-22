import CidadesDecorator from "./CidadesDecorator.js";

class XMLFormatter extends CidadesDecorator {
  format() {
    const lines = this.data.map((line) => `<line>${line}</line>`).join('\n');
    const xml = `<data>\n${lines}\n</data>`;
    return xml;
  }
}

export default XMLFormatter;
