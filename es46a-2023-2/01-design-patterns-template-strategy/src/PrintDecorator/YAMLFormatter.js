import CidadesDecorator from "./CidadesDecorator.js";

class YAMLFormatter extends CidadesDecorator {
  format() { //Formatador para YAML
    return this.convertToYAML(this.data);
  }

  convertToYAML(data) { //Converte os dados para YAML
    if (Array.isArray(data)) {
      return this.convertArrayToYAML(data);
    } else if (typeof data === 'object') {
      return this.convertObjectToYAML(data);
    } else {
      return data;
    }
  }

  convertArrayToYAML(array) { //Converte array string para YAML
    let yamlString = 'cidades:\n';
    for (const item of array) {
      yamlString += `- ${this.convertToYAML(item)}\n`;
    }
    return yamlString;
  }

  convertObjectToYAML(object) { //Converte array object para YAML
    let yamlString = '';
    for (const key in object) {
      yamlString += `${key}: ${this.convertToYAML(object[key])}\n`;
    }
    return yamlString;
  }
}

export default YAMLFormatter; //exportando a classe
