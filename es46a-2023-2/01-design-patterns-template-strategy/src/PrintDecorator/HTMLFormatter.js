import CidadesDecorator from "./CidadesDecorator.js";

class HTMLFormatter extends CidadesDecorator {
  format() {
    const lines = this.data.map((line) => `       <li>${line}</li>`).join('\n');
    const html =
`<!DOCTYPE HTML>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <title>Relatório de Nomes de Cidades</title>
  </head>
  <body>
    <h1>Relatório de Nomes de Cidades</h1>
    <ul>
      \n${lines}\n
    </ul>
  </body>
</html>`;
    return html;
  }
}

export default HTMLFormatter;
