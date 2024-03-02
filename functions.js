// callback function
// é simplesmente quando se passa uma função como parâmetro para outra função executar em um determinado ponto da sua execução

// declarando uma função de forma padrão
function FuncaoMaster(funcaoParam) {
  console.log('antes de executar a funcão recebida como parametro');
  funcaoParam();
  console.log('depois que executou a função recebida como parametro');
}
// executando a FuncaoMaster passando uma função como parametro
FuncaoMaster(() => {console.log('executando a função passada como parametro')});


console.log('=======================================');
console.log('INSTRUÇÃO: de uma forma diferente, declarar a função antes e passar como parametro');
console.log("=======================================")


// numa forma diferente, declara-se primeiro a função que será passda como parametro
function FuncaoPassadaComoParametro() {
  console.log('executando função passada como parametro, porém declarada antes');
}

// quando passar uma função como parametro que foi declarada, não usar os parenteses, passar somente o nome da função
FuncaoMaster(FuncaoPassadaComoParametro);

