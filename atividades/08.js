function Produto(nome, valor) {
    this.nome = nome
    this.valor = valor
}

function Item(produto, quantidade) {
    this.produto = produto
    this.quantidade = quantidade
    
}


let a = [new Produto("Dado", 2.50), new Produto("Lampada", 5.00), new Produto("Refrigerante", 3.40)]

let b = new Item(a, 2)
a.forEach(function(a, b){
    console.log(`produto ${a.nome} com o valor ${a.valor} e a quantidade ${a.b}`)
})


console.log(a)
console.log(b)
