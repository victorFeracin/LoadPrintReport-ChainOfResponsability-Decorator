import CidadesHandler from "./CidadesHandler.js";

class CidadesHTMLHandler extends CidadesHandler {

  handleRequest(request, format) {
    if (format.toLowerCase() === 'html') {
      const bufferToStr = super.getCidades().toString(); // Transforma o arquivo lido para String
      const regex = /<li>(.*?)<\/li>/g; // Regex para obter tudo que está dentro da lista no HTML
      const formattedCities = [];
      let i;

      while((i = regex.exec(bufferToStr)) !== null) { //Continua buscando na String até não ter mais nenhum item na lista
        formattedCities.push(i[1]);
      }

      return formattedCities;
    } else {
      return super.handleRequest(request, format); // Caso o formato não seja o especificado para este método, o handler trata
    }
  }
}

export default CidadesHTMLHandler;