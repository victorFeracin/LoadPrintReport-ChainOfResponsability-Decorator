import CidadesDecorator from "./CidadesDecorator.js";

class HTMLFormatter extends CidadesDecorator {
  format() {
    let html = '<table>\n';

    this.data.forEach((item) => {
      for (const key in item) {
        html += `<tr><td>${key}</td><td>${item[key]}</td></tr>\n`;
      }
    });

    html += '</table>';
    return html;
  }
}

export default HTMLFormatter;
