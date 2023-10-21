import CidadesHandler from "./CidadesHandler.js";

export default class CidadesYAMLHandler extends CidadesHandler {
  handleRequest(format) {
    if(format.toLowerCase() === 'yaml') {
      this.ler('./data/cidades.yaml');
      const lines = this.getCidadesString().split('\n'); //Divide a string em um array contendo cada linha
      const formattedCities = [];

      let state = null;

      for (const line of lines) {
        if (line.trim().startsWith('cidades:')) { //Inicia a leitura das cidades cada vez q encontra o atributo "cidades"
          state = [];

        } else if (line.trim().startsWith('- sigla: AC')) { //Inicia a leitura das cidades a partir do primeiro estado em na ordem alfabética
          state = [];

        } else if (line.trim().startsWith('- ') && !line.trim().startsWith('- sigla: ')) { //Caso a linha comece com "- " e ñ seja uma sigla, quer dizer que estamos lendo uma cidade
          const city = line.trim().substring(2); //Remove o "-" e o " " antes e depois do nome das cidades
          if (state) { //Se o estado não for null, empilha a cidade no array
            state.push(city);
          }

        } else if (state && state.length > 0) { //Caso o estado esteja completo, ele adicionara as cidades no array principal
          formattedCities.push(...state);
          state = null; //Reseta o estado para uma nova iteração

        }
      }

      return formattedCities; //Retorna o array formatado
    } else {
      return super.handleRequest(format); //Caso o formato não seja o especificado para este método, o handler trata
    }
  }
}