import Client from './src/LoadChain/Client.js';

const [cmd, filename, format] = process.argv;

let loader = new Client(); //Instancia de client
//console.log(loader.loadFile('./data/cidades.html', format)); //Remover o console.log depois
const arrayCitiesList = loader.loadFile('./data/cidades.html', format); //Essa const salva o array contendo as cidades