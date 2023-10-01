// Define a classe base Handler
class Handler {
  constructor() {
    this.successor = null;
  }

  setSuccessor(successor) {
    this.successor = successor;
  }

  handleRequest(request) {
    if (this.successor) {
      this.successor.handleRequest(request);
    }
  }
}

// Crie classes concretas de manipuladores que estendem a classe Handler
class ConcreteHandler1 extends Handler {
  handleRequest(request) {
    if (request === 'RequestType1') {
      console.log('ConcreteHandler1 está lidando com a solicitação');
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandler2 extends Handler {
  handleRequest(request) {
    if (request === 'RequestType2') {
      console.log('ConcreteHandler2 está lidando com a solicitação');
    } else {
      super.handleRequest(request);
    }
  }
}

class ConcreteHandler3 extends Handler {
  handleRequest(request) {
    if (request === 'RequestType3') {
      console.log('ConcreteHandler3 está lidando com a solicitação');
    } else {
      console.log('Solicitação não pôde ser tratada.');
    }
  }
}

// Configurar a cadeia de responsabilidade
const handler1 = new ConcreteHandler1();
const handler2 = new ConcreteHandler2();
const handler3 = new ConcreteHandler3();

handler1.setSuccessor(handler2);
handler2.setSuccessor(handler3);

// Teste a cadeia
handler1.handleRequest('RequestType1'); // Saída: ConcreteHandler1 está lidando com a solicitação
handler1.handleRequest('RequestType2'); // Saída: ConcreteHandler2 está lidando com a solicitação
handler1.handleRequest('RequestType3'); // Saída: ConcreteHandler3 está lidando com a solicitação
handler1.handleRequest('OutraSolicitacao'); // Saída: Solicitação não pôde ser tratada.
