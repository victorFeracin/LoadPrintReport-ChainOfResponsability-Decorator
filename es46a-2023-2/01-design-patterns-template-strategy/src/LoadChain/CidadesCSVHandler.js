import CidadesHandler from "./CidadesHandler.js";
export default class CidadesCSVHandler extends CidadesHandler {
  handleRequest(format) {
    if(format.toLowerCase() === 'csv') {
      this.ler('./data/cidades.csv');
      const lines = this.getCidadesString().split('\n'); //Divide a string em um array contendo cada linha
      lines.shift(); //Remove a linha contendo os nomes das colunas
      const formattedCities = [];

      for(const line of lines) {
          const city = line.trim().split(',')[2]; //Formata a linha para remover o código, UF e espaços vazios
          formattedCities.push(city); //Empilha a cidade no array
      }
      
      return formattedCities; //Retorna o array formatado
    } else {
      return super.handleRequest(format); //Caso o formato não seja o especificado para este método, o handler trata
    }
  }
}