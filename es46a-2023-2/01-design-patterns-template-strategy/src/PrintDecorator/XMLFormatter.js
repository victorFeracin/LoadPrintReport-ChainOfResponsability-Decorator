import CidadesDecorator from "./CidadesDecorator.js";

class XMLFormatter extends CidadesDecorator {
  format() { //Formatador para XML
    const lines = this.data.map((line) => `<cidade>${line}</cidade>`).join('\n');
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>\n<cidades>\n${lines}\n</cidades>`;
    return xml;
  }
}

export default XMLFormatter; //exportando a classe
