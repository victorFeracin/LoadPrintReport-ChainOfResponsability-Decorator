import * as fs from 'node:fs';

export default class CidadesFormatter {
  constructor(data) {
    this.data = data;
    
  }

  format() {
    return this.data;
  }
}