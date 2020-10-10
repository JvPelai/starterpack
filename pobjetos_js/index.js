class Cliente {
    nome;
    cpf;
    rg;
}

class contaCorrente {
    agencia;
    saldo;
    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}

contaCorrenteRicardo = new contaCorrente();

contaCorrenteRicardo.saldo = 100;
contaCorrenteRicardo.agencia = 1001;
console.log(contaCorrenteRicardo.saldo);
contaCorrenteRicardo.sacar(50);
console.log(contaCorrenteRicardo.saldo);

