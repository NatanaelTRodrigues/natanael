import moment from 'moment';

// Função para calcular a idade
function calcularIdade(anoNascimento) {
  // Obter o ano atual
  const anoAtual = moment().year();
  
  // Calcular a idade
  const idade = anoAtual - anoNascimento;
  
  return idade;
}

// Exemplo de uso
const anoNascimento = 1999;
const idade = calcularIdade(anoNascimento);
console.log(`Idade: ${idade} anos`);
