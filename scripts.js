// criando um objeto
const person = {
  name: 'john',
  age: 30,
  weight: 88.6,
  isAdmin: true
}

// exibindo na console do DevTools (F12 do Browser)
console.log(person); // exibirá todo o conteúdo do objeto
console.log(person.name); // exibirá o atributo da propriedade name
console.log(person.age); // exibirá o atribudto da propriedade age

// exibindo usando interpolação texto e variável
console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight} quilos`);