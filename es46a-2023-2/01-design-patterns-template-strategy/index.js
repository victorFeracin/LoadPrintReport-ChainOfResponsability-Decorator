import Client from "./src/LoadChain/Client.js";
import CidadesFormatter from "./src/PrintDecorator/CidadesFormatter.js";
import CSVFormatter from "./src/PrintDecorator/CSVFormatter.js";
import HTMLFormatter from "./src/PrintDecorator/HTMLFormatter.js";
import JSONFormatter from "./src/PrintDecorator/JSONFormatter.js";
import XMLFormatter from "./src/PrintDecorator/XMLFormatter.js";

const [cmd, filename, formatLoad, formatPrint] = process.argv;

let loader = new Client(); //Instancia de client
const arrayCitiesList = loader.loadFile(formatLoad); //Essa const salva o array contendo as cidades

const dataFormatter = new CidadesFormatter(arrayCitiesList);

console.log('XML:');
console.log(new XMLFormatter(dataFormatter).format());

console.log('\nCSV:');
console.log(new CSVFormatter(dataFormatter).format());

console.log('\nHTML:');
console.log(new HTMLFormatter(dataFormatter).format());

console.log('\nJSON:');
console.log(new JSONFormatter(dataFormatter).format());