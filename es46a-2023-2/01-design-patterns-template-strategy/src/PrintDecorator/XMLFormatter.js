import CidadesDecorator from "./CidadesDecorator.js";

class XMLFormatter extends CidadesDecorator {
  format() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<data>\n';

    this.data.forEach((item) => {
      for (const key in item) {
        xml += `<${key}>${item[key]}</${key}>\n`;
      }
    });

    xml += '</data>';
    return xml;
  }
}

export default XMLFormatter;
