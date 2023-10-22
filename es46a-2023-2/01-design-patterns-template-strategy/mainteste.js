import CidadesFormatter from "./src/PrintDecorator/CidadesFormatter.js";
import CSVFormatter from "./src/PrintDecorator/CSVFormatter.js";
import HTMLFormatter from "./src/PrintDecorator/HTMLFormatter.js";
import JSONFormatter from "./src/PrintDecorator/JSONFormatter.js";
import XMLFormatter from "./src/PrintDecorator/XMLFormatter.js";

// Your example usage code here

const dataList = [
  { name: 'João', age: 30, city: 'São Paulo' },
  { name: 'Maria', age: 25, city: 'Rio de Janeiro' },
];

const dataFormatter = new CidadesFormatter(dataList);

console.log('XML:');
console.log(new XMLFormatter(dataFormatter).format());

console.log('\nCSV:');
console.log(new CSVFormatter(dataFormatter).format());

console.log('\nHTML:');
console.log(new HTMLFormatter(dataFormatter).format());

console.log('\nJSON:');
console.log(new JSONFormatter(dataFormatter).format());
