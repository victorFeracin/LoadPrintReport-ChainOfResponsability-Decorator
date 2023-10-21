import CidadesHandler from "./CidadesHandler.js";

class CidadesHTMLHandler extends CidadesHandler {

  handleRequest(request, format) {
    if (format.toLowerCase() === 'html') {
      const regex = /<li>(.*?)<\/li>/g; //Regex para obter tudo que está dentro da lista no HTML
      const formattedCities = [];
      let i;

      while((i = regex.exec(super.getCidadesString())) !== null) { //Continua buscando na String até não ter mais nenhum item na lista
        formattedCities.push(i[1]); //i[0] contém a linha completa (<li>Exemplo</li>), enquanto que i[i] traz somente o que está dentro das tags
      }

      return formattedCities; //Retorna o array formatado
    } else {
      return super.handleRequest(request, format); //Caso o formato não seja o especificado para este método, o handler trata
    }
  }
}

export default CidadesHTMLHandler;