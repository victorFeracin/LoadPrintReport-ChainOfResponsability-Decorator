import CidadesHandler from "./CidadesHandler.js";

class CidadesHTMLHandler extends CidadesHandler {
  handleRequest(request, format) {
    if (format === 'html') {
      return "manipulando html";
    } else {
      return super.handleRequest(request, format); // Pass the 'format' argument to the next handler
    }
  }
}

export default CidadesHTMLHandler;