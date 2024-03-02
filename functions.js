// escrevendo arrow function
// é uma outra forma de declarar uma função sem a necessidade de usar a palavra-chave function e funciona do mesmo jeito
// um detalhe importante, é tentar sempre declarar a variável que for uma função com const para evitar que em algum ponto do JS esta variável tenha o seu conteúdo alterado e aí será perdida a função declarada para esta variável

// para declarar uma arrow function, basta substituir a palavra-chave function por => e colocar este => depois dos parentêses da função
const MinhaArrowFunction = () => {
  console.log("Escevendo a minha função arrow function");
}
// executando a função
MinhaArrowFunction();