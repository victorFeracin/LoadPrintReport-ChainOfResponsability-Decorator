import CidadesHandler from "./CidadesHandler.js";

export default class CidadesXMLHandler extends CidadesHandler {
  handleRequest(request, format) {
    if(format === 'xml') {
      return "manipulando xml";
    } else {
      return super.handleRequest(request, format);
    }
  }
}