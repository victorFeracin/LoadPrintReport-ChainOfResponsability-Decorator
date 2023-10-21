import CidadesHandler from "./CidadesHandler.js";

export default class CidadesXMLHandler extends CidadesHandler {
  handleRequest(format) {
    if(format.toLowerCase() === 'xml') {
      this.ler('./data/cidades.xml');
      const regex = /<cidades>(.*?)<\/cidades>/g; //Expressao para obter tudo que está dentro da lista no XML
      const formattedCities = [];
      let i;

      while((i = regex.exec(this.getCidadesString())) !== null) { //Continua buscando na String até não ter mais nenhum item na lista
        formattedCities.push(i[1]); //i[0] contém a linha completa (<cidades>Exemplo</cidades>), enquanto que i[1] traz somente o que está dentro das tags
      }

      return formattedCities; //Retorna o array formatado
    } else {
      return super.handleRequest(format); //Caso o formato não seja o especificado para este método, o handler trata
    }
  }
}