import CidadesDecorator from "./CidadesDecorator.js";

class YAMLFormatter extends CidadesDecorator {
  format() {
    return this.convertToYAML(this.data);
  }

  convertToYAML(data) {
    if (Array.isArray(data)) {
      return this.convertArrayToYAML(data);
    } else if (typeof data === 'object') {
      return this.convertObjectToYAML(data);
    } else {
      return data;
    }
  }

  convertArrayToYAML(array) {
    let yamlString = '';
    for (const item of array) {
      yamlString += `- ${this.convertToYAML(item)}\n`;
    }
    return yamlString;
  }

  convertObjectToYAML(object) {
    let yamlString = '';
    for (const key in object) {
      yamlString += `${key}: ${this.convertToYAML(object[key])}\n`;
    }
    return yamlString;
  }
}

export default YAMLFormatter;
