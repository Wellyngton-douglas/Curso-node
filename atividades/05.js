


function credito(saldo_medio) {
    if (saldo_medio <= 200) {
        return "Nenhum crédito disponivel"
    }else if (saldo_medio >= 201 && saldo_medio <=400) {
        console.log(`Seu saldo medio é :${saldo_medio} e seu valor de credito é: 20%`)
    }else if (saldo_medio >= 401 && saldo_medio <=600) {
        console.log(`Seu saldo medio é :${saldo_medio} e seu valor de credito é: 30%`)
    }else{
        console.log(`Seu saldo medio é :${saldo_medio} e seu valor de credito é: 40%`)
    }
}
