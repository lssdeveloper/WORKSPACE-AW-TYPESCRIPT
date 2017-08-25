class Funcionarios{
    nome: string;
    cargo: string;
    idade: number;

    constructor(nome: string, cargo: string, idade: number){
        this.cargo = cargo;
        this.idade = idade;
        this.nome = nome;
    }
    apresentar(){
        return `Olá, eu sou ${this.nome}, tenho ${this.idade}, e sou ${this.cargo}.`;
    }
}
let zezinho = new Funcionarios("Zezinho Ribeiro", "Motorista", 50);
let funcionario: string = zezinho.apresentar();
console.log(funcionario);