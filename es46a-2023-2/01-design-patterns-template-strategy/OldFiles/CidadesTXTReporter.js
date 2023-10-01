import * as fs from 'node:fs';
import CidadesReporter from './CidadesReporter.js';

export default class CidadesTXTReporter extends CidadesReporter{

  reportar() {
    let result = `Relatório de Nomes de Cidades
=============================`;

    for (let i = 0; i < this.cidades.length; i++) {
      result += '* ' + this.cidades[i]['Nome'] + '\n';
    }

    return result;
  }
}

