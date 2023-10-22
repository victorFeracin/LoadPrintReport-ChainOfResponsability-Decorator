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

switch(formatPrint) {
  case "xml":
      console.log('XML:');
      console.log(new XMLFormatter(dataFormatter).format());
      break;
  case "csv":
      console.log('\nCSV:');
      console.log(new CSVFormatter(dataFormatter).format());
      break;
  case "html":    
      console.log('\nHTML:');
      console.log(new HTMLFormatter(dataFormatter).format());
      break;
  case "yaml":
    console.log('\nYAML:');
    console.log(new YAMLFormatter(dataFormatter).format());
    break;
}