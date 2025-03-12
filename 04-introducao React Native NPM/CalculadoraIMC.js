// Sistema de Modulos (ES6)-> Exportando

export const TabelaIMC = [
    {limite: 18.5,classificado: "Magreza"},
    {limite: 24.9,classificado: "Normal"},
    {limite: 29.9,classificado: "Sobrepeso"},
    {limite: 34.9,classificado: "Obesidade Grau I"},
    {limite: 39.9,classificado: "Obesidade Grau II"},
    {limite: 40,classificado: "Obesidade Grau III"},
]

export const calcularIMC = (peso, altura) => {
    return peso / (altura * altura)
}