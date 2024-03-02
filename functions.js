// Function Constuctor ou Função Construtora
// é um recurso para se criar objetos com propriedades e funcionalidades iguais, porém com atributos ou até mesmo métodos diferentes

// declarar um função construtora
function Person(nameParam){
  this.name = nameParam;  // criou-se uma propriedade chama name com o conteúdo do parametro nameParam recebido
}

// declarando variável que irá conter o objeto construído pela função Person
const personNumber1 = new Person('Marcos Melo');
console.log(personNumber1);   // retorna o objeto criado
console.log(personNumber1.name) // retorna o atributo da propriedade name do objeto

// declarando outra variável usando a função construtora Person com outro atributo
const personNumber2 = new Person('Aurora Melo');
console.log(personNumber2);
console.log(personNumber2.name);

// pode-se assim criar objetos inteiros alterando os atributos das propriedades e métodos das funcionalidades, criando uma forma dinâmica de tratar os dados.
// o nome das funções construtoras, como uma regra tácita, sempre começam com letra maiúscula, apesar que se escrever começando com letra minúscula, ou qq caracter válido, também funciona.


// exemplo de funções construtoras pré-existentes no JS

// função construtora: String
const myName = new String('Marcos Melo'); // montará o objeto String{'Marcos Melo'}
console.log(myName); // exibirá o objeto criado
console.log(myName[0]); // por ser string, pode-se acessar cada caracter como array

// função construtora: Date
const actualDate = new Date(); // cria objeto com a data e hora atuais
console.log(actualDate); // exibe a data na console do DevTools
