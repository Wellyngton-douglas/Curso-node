function Roda(rodas, calibragem, peso, anoFabricacao) {
    this.aro = rodas
    this.calibragem = calibragem
    this.peso = peso
    this.anoFabricacao = anoFabricacao

}
function Veiculo(marca, anoFabricacao, Roda) {
    this.marca = marca
    this.anoFabricacao = anoFabricacao
    this.roda = Roda
}




let p = new Roda(16, 22, 250, 2019)
let a = new Veiculo("chevrole", 2007, p)


console.log(p)
console.log("-----------")
console.log(a)