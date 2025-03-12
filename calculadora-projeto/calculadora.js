// funções.js

// Função para soma
function soma(a, b) {
    return a + b;
  }
  
  // Função para subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função para multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função para divisão
  function divisao(a, b) {
    if (b === 0) {
      throw new Error('Divisão por zero não permitida');
    }
    return a / b;
  }
  
  // Exportando as funções
export {soma, subtracao, multiplicacao, divisao}