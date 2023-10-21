import CidadesHandler from "./CidadesHandler.js";

export default class CidadesCSVHandler extends CidadesHandler {
  handleRequest(format) {
    if(format.toLowerCase() === 'csv') {
      return "manipulando csv";
    } else {
      return super.handleRequest(format);
    }
  }
}