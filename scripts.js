// Como estamos em um arquivo .js, o escopo geral é todo o arquivo, não necessitando
// abrir e fechar com chaves "}"

// declarar variável constante
// exibir no console do DevTools (F12 do Browser)
const varConstGlobal = "** Constante Global **"
console.log("Exibindo uma constante global: ", varConstGlobal)

// declarar um escopo (ou bloco), abrindo com { e fechando com },
// declarar variável com var dentro do escopo, será uma variável global
// exibir no console do DevTools (F12 do Browser)
{
  var varGlobal = "** Variável Global **"
  console.log(
    "Exibindo variável global declarada dentro do escopo: ",
    varGlobal
  )
}

// alterar o conteúdo da variável global declarada dentro de um escopo
// exibir variável global declarada dentro de um escopo no DevTools (F12 do Browser)
varGlobal = "** valor alterado da variável global **"
console.log("Exibindo alteração da variável global: ", varGlobal)

// declarar outro escopo
// criar variável local com let
// exibir no console do DevTools (F12 do Browser)
{
  let varLocal = "** variável local **"
  console.log("Exibindo variável local com let: ", varLocal)
}

// tentar exibir, fora do escopo, na console do DevTools (F12 do Browser) a variável local
// ocorrerá erro porque a variável é local do escopo onde foi declarada
console.log("Tentando exibir variável local de um escopo: ", varLocal)
