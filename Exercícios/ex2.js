var num = 89
var lista = [0, 1]
var soma = 0
var aux = false

for (var i = 0; soma < num; i++){
    soma = 0 
    lista.map(function(e, i) {
       var length = lista.length
    
       if ((i == length - 1) || (i == length - 2)){
        soma += e
       }
    })
    if (soma <= num){
        lista.push(soma)
        aux = true
    }else {
        aux = false
    }
}

if (aux == true){
    console.log("esse numero pertence a sequencia de Fibonacci")
    console.log(lista)
}else {
    console.log("esse numero não pertence a sequencia de Fibonacci ")
}
