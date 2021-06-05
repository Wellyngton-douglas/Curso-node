console.log("-------------Atividade 02-------------")

let valores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let par = []
let impar = []

for (let i = 0; i < valores.length; i++) {
    if (valores[i] % 2 == 0) {
        par[i] = valores[i]
    // console.log("-----")
    // console.log(par[i])
    // console.log("-----")
    } else {
        impar[i] = valores[i]
    // console.log("******")
    // console.log(impar[i])
    // console.log("******")
    }

}
console.log(`Todos os valores do Arrey ${valores}`)
console.log(`Os valor ${par} são pares` )
console.log(`Os valor ${impar} são ímpares` )