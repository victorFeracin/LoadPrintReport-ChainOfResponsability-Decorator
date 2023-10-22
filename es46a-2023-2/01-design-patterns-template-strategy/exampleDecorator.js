class DataFormatter {
  constructor(data) {
    this.data = data;
  }

  format() {
    return this.data;
  }
}

class FormatterDecorator extends DataFormatter {
  constructor(dataFormatter) {
    super(dataFormatter.data);
    this.dataFormatter = dataFormatter;
  }
}

class XMLFormatter extends FormatterDecorator {
  format() {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<data>\n';

    this.data.forEach((item) => {
      for (const key in item) {
        xml += `<${key}>${item[key]}</${key}>\n`;
      }
    });

    xml += '</data>';
    return xml;
  }
}

class CSVFormatter extends FormatterDecorator {
  format() {
    if (this.data.length === 0) {
      return '';
    }

    let csv = '';
    const keys = Object.keys(this.data[0]);
    csv += keys.join(',') + '\n';

    this.data.forEach((item) => {
      csv += keys.map((key) => item[key]).join(',') + '\n';
    });

    return csv;
  }
}

class HTMLFormatter extends FormatterDecorator {
  format() {
    let html = '<table>\n';

    this.data.forEach((item) => {
      for (const key in item) {
        html += `<tr><td>${key}</td><td>${item[key]}</td></tr>\n`;
      }
    });

    html += '</table>';
    return html;
  }
}

class JSONFormatter extends FormatterDecorator {
  format() {
    return JSON.stringify(this.data, null, 2);
  }
}

// Exemplo de uso com uma lista de objetos:
const dataList = [
  { name: 'João', age: 30, city: 'São Paulo' },
  { name: 'Maria', age: 25, city: 'Rio de Janeiro' },
];

const dataFormatter = new DataFormatter(dataList);

console.log('XML:');
console.log(new XMLFormatter(dataFormatter).format());

console.log('\nCSV:');
console.log(new CSVFormatter(dataFormatter).format());

console.log('\nHTML:');
console.log(new HTMLFormatter(dataFormatter).format());

console.log('\nJSON:');
console.log(new JSONFormatter(dataFormatter).format());
