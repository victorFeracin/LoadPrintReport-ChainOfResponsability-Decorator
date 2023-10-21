import CidadesHandler from "./CidadesHandler.js";

export default class CidadesYAMLHandler extends CidadesHandler {
  handleRequest(request, format) {
    if(format.toLowerCase() === 'yaml') {
      

      return "manipulando yaml";
    } else {
      return super.handleRequest(request, format);
    }
  }
}