// funções são linhas de códigos que executam ações pré-programadas

//===========================================================
// Função Explícita
//===========================================================
// declarar uma função
function CreatePhrases() {
  console.log("Estudar é muito bom!")
  console.log("Paciência e persistência!")
  console.log("Revisão é mãe do aprendizado")
}

// executar a função declarada
CreatePhrases()

//===========================================================
// Função Expression ou Anonymous
// quando a função é criada dentro de uma variável ou objeto
//===========================================================
const SumNumbers = function () {
  return 10 + 20
}
// executar a constante SumNumbers, que é uma função, exibindo na console do DevTools
console.log(SumNumbers())

// passando parâmetros para a função
// a função SumNumbersWithParameters receberá como parâmetros number1 e number2
const SumNumbersWithParameters = function (number1, number2) {
  return number1 + number2
}
// executar a constante SumNumbersWithParameters, exibindo na console do DevTools
console.log(SumNumbersWithParameters(22, 40));
// executar agora com interpolação - sempre usar crase ao invés de aspas ou apóstofre
console.log(`O total da soma será ${SumNumbersWithParameters(60,100)}`);

