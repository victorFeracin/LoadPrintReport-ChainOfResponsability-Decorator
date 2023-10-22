import CidadesDecoratorHTML from "./CidadesDecorator";
import CidadesFormatter from "./CidadesFormatter";

export default class FormatterXML extends CidadesDecorator {
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