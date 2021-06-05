console.log("-------------Atividade 01-------------")

// let x = 6
// let y = 1
// let metade = x/2
// let soma = 0

// while (y <= metade) { //enquanto y for menor que a metade de x o 
//     //programa vai verificar se o resto da divisão é igual a 0
    
//     if (x % y == 0)
//         soma = soma + y
//     y++
// }

// if (soma == x) {
//     console.log("O número " + x + " é um numero perfeito")
//     console.log("---------------------------------")     
// }else{
//     console.log("O número " + x + " não é numero perfeito")  
//     console.log("---------------------------------")   
// }


let x = 6
let metade = x/2
let soma = 0

for(let y = 0; y <= metade; y++){
   if (x % y == 0)
       soma = soma + y
}
if (soma == x) {
    console.log("O número " + x + " é um numero perfeito")
    console.log("---------------------------------")     
}else{
    console.log("O número " + x + " não é numero perfeito")  
    console.log("---------------------------------")   
}
