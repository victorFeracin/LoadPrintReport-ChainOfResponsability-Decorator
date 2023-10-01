export default class CidadesReporter {
  // caminho = './data/cidades-2.json';

  #ler (caminho) {
    this.cidades = fs.readFileSync(caminho);
  }

  #parse () {
    this.cidades = JSON.parse(this.cidades);
  }

  output () {

  }

  report (caminho) {
    this.#ler(caminho);
    this.#parse();
    console.log("Output: " + this.output())
    return this.output();
  }

  reportar () {

  }
}