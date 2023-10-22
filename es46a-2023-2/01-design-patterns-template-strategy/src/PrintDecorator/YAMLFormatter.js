import CidadesDecorator from "./CidadesDecorator.js";

class YAMLFormatter extends CidadesDecorator {
  format() { //Formatador para YAML
    let yamlString = 'cidades:\n'; //Adiciona o atributo cidades
    for (const item of this.data) {
      yamlString += `- ${item}\n`; //Adiciona a lista de cidades
    }
    return yamlString;
  }
}

export default YAMLFormatter; //exportando a classe
