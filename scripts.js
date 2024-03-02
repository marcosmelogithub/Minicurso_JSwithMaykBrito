let testVariavel // apenas declarou a variável e não associou qq valor
alert("Conteúdo da var: " + testVariavel + " tipo: " + typeof testVariavel) // a variável será do tipo undefined

testVariavel = "texto" // altera o conteúdo da variável com um texto
alert("Conteúdo da var: " + testVariavel + " tipo: " + typeof testVariavel) // agora a variável será do tipo string

testVariavel = true // altera o conteúdo da variável para true
alert("Conteúdo da var: " + testVariavel + " tipo: " + typeof testVariavel) // agora a variável será do tipo boolean

testVariavel = 45 // altera o conteúdo da variável para um número
alert("Conteúdo da var: " + testVariavel + " tipo: " + typeof testVariavel) // agora a variável será do tipo number
