import CidadesHandler from "./CidadesHandler.js";

export default class CidadesXMLHandler extends CidadesHandler {
  handleRequest(format) {
    if(format.toLowerCase() === 'xml') {
      return "manipulando xml";
    } else {
      return super.handleRequest(format);
    }
  }
}