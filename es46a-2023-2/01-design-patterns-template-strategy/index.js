// import CidadesHTMLReport from './OldFiles/CidadesHTMLReporter.js';
// import CidadesTXTReport from './OldFiles/CidadesTXTReporter.js';
import Client from './src/LoadChain/Client.js';

const [cmd, filename, format] = process.argv;

let loader = new Client();
console.log(loader.loadFile('./data/cidades-2.json', format));

// if (format === 'html') {
//   let reporter = new CidadesHTMLReport();
//   reporter.ler('./data/cidades-2.json');
//   reporter.parse();
//   let html = reporter.reportar();
//   console.log(html);
// }
// if (format === 'txt') {
//   let reporter = new CidadesTXTReport();
//   reporter.ler('./data/cidades-2.json');
//   reporter.parse();
//   let html = reporter.reportar();
//   console.log(html);
// }
