import Client from "./src/LoadChain/Client.js";
import CidadesFormatter from "./src/PrintDecorator/CidadesFormatter.js";
import CSVFormatter from "./src/PrintDecorator/CSVFormatter.js";
import HTMLFormatter from "./src/PrintDecorator/HTMLFormatter.js";
import YAMLFormatter from "./src/PrintDecorator/YAMLFormatter.js";
import XMLFormatter from "./src/PrintDecorator/XMLFormatter.js";

const [cmd, filename, formatLoad, formatPrint] = process.argv;

let loader = new Client(); //Instancia de client
const arrayCitiesList = loader.loadFile(formatLoad); //Essa const salva o array contendo as cidades

const dataFormatter = new CidadesFormatter(arrayCitiesList);

switch(formatPrint) { //switch case para usuário selecionar tipo de impressão
  case "xml": //switch case para XML
      console.log('XML:');
      console.log(new XMLFormatter(dataFormatter).format());
      break;
  case "csv": //switch case para CSV
      console.log('\nCSV:');
      console.log(new CSVFormatter(dataFormatter).format());
      break;
  case "html": //switch case para HTML
      console.log('\nHTML:');
      console.log(new HTMLFormatter(dataFormatter).format());
      break;
  case "yaml": //switch case para YAML
    console.log('\nYAML:');
    console.log(new YAMLFormatter(dataFormatter).format());
    break;
  case undefined: //switch case para erro
    console.log('\nErro ao imprimir: extensão não especificada.');
    break;
  default: //switch case para erro
    console.log(`\nErro ao imprimir: Formato .${formatPrint.toUpperCase()} desconhecido.`);
    break;
}