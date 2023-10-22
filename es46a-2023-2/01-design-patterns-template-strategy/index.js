import Client from "./src/LoadChain/Client.js";
import CidadesFormatter from "./src/PrintDecorator/CidadesFormatter.js";
import CSVFormatter from "./src/PrintDecorator/CSVFormatter.js";
import HTMLFormatter from "./src/PrintDecorator/HTMLFormatter.js";
import YAMLFormatter from "./src/PrintDecorator/YAMLFormatter.js";
import XMLFormatter from "./src/PrintDecorator/XMLFormatter.js";

const [cmd, filename, formatLoad, formatPrint] = process.argv;

let loader = new Client(); //Instancia de client
const arrayCitiesList = loader.loadFile(formatLoad); //Essa const salva o array contendo as cidades

if (arrayCitiesList) { //Caso o array esteja preenchido, inicia o processo de impressão
  const dataFormatter = new CidadesFormatter(arrayCitiesList); //Instância do formatter inicial

  switch(formatPrint) { //Impressão de acordo com o formatPrint, que foi especificado pelo usuário
    case "xml":
        console.log('XML:');
        console.log(new XMLFormatter(dataFormatter).format()); //Imprime a formatação XML
        break;
    case "csv":
        console.log('\nCSV:');
        console.log(new CSVFormatter(dataFormatter).format()); //Imprime a formatação CSV
        break;
    case "html":    
        console.log('\nHTML:');
        console.log(new HTMLFormatter(dataFormatter).format()); //Imprime a formatação HTML
        break;
    case "yaml":
      console.log('\nYAML:');
      console.log(new YAMLFormatter(dataFormatter).format()); //Imprime a formatação YAML
      break;
    case undefined:
      console.log('\nErro ao imprimir: extensão para impressão não especificada.');
      break;
    default:
      console.log(`\nErro ao imprimir: Formato ".${formatPrint.toUpperCase()}" não suportado.`);
      break;
  }
}