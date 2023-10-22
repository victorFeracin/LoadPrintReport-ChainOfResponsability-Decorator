import Client from "./src/LoadChain/Client.js";
import CidadesFormatter from "./src/PrintDecorator/CidadesFormatter.js";

const [cmd, filename, formatLoad, formatPrint] = process.argv;

let loader = new Client(); //Instancia de client
const arrayCitiesList = loader.loadFile(formatLoad); //Essa const salva o array contendo as cidades

let printer = new CidadesFormatter(arrayCitiesList);

console.log(FormatterXML(printer).format());