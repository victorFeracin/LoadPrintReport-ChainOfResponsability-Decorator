import CidadesDecorator from "./CidadesDecorator.js";

class HTMLFormatter extends CidadesDecorator {
  format() {
    const tableRows = this.data.map((line) => `<tr><td>${line}</td></tr>`).join('\n');
    const html = `<table>\n${tableRows}\n</table>`;
    return html;
  }
}

export default HTMLFormatter;
