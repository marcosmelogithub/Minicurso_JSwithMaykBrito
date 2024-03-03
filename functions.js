// trabalhando com array

// função para exibir o array no console do DevTools (F12 do Browser)
function showArrTechs(msgParam, arrayParam){
  console.log(`${msgParam}: ${arrayParam}`);
}

// declara array vazio
let arrTechs = [];
showArrTechs('Criando array vazio',arrTechs);

// adicionar elemento ao array
arrTechs.push('js'); // adiciona sempre no final do array
console.log("=====================================");
showArrTechs('Add 1o elemento ao array', arrTechs);

// adicionar mais elementos no final do array
arrTechs.push('html');
console.log("=====================================");
showArrTechs('Add 2o elemento no fim do array', arrTechs);
arrTechs.push('css');
console.log("=====================================");
showArrTechs("Add 3o elemento no fim do array", arrTechs)

// adicionar elemento no início do array
arrTechs.unshift('sql');
console.log("=====================================");
showArrTechs('Add elemento no início do array', arrTechs);

// remover elemento do fim do array
console.log("=====================================");
showArrTechs("Array antes da remoção do fim", arrTechs);
showArrTechs('Remove elemento no fim do array', arrTechs.pop());
showArrTechs("Array após remoção do fim", arrTechs);

// remover elemento do inicio do array
console.log("=====================================");
showArrTechs("Array antes da remoção do inicio", arrTechs);
showArrTechs('Remove elemento no início do array', arrTechs.shift());
showArrTechs("Array após remoção do inicio", arrTechs);

// readicionar os elementos no array para continuar os exemplos
arrTechs.push('css');
arrTechs.push('sql');
arrTechs.push('nodejs');
console.log("=====================================");
showArrTechs("Back elementos ao array", arrTechs);

// obter posição do elemento no array
console.log("=====================================");
showArrTechs("A posição do elemento css é ", arrTechs.indexOf('css'));

// obter somente alguns elementos do array
console.log('=====================================');
showArrTechs("Array antes da obtenção de elementos", arrTechs);
showArrTechs('Obter 3 elementos a partir do elemento 0', arrTechs.slice(0,3));
showArrTechs("Array após da obtenção de elementos", arrTechs);

// remover 1 ou mais elementos do array
console.log("=====================================")
showArrTechs("Array antes da remoção de elementos", arrTechs);
showArrTechs("Remover 2 elementos a partir do elemento 1", arrTechs.splice(1, 2));
showArrTechs("Array após remoção de elementos",arrTechs);









