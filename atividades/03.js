console.log("-------------Atividade 03-------------")

function fatorial(numero){
    console.log(numero, '*')

    if (numero != 1){
        return numero * fatorial(numero -1)
    }

    return 1
}



let resultado = fatorial(5)

console.log(resultado)