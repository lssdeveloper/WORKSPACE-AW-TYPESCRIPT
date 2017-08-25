class Cliente{
    nome: string;
    idade: number;
    sexo: string;

    constructor(nome: string, idade: number, sexo: string){
        this.idade = idade;
        this.nome = nome;
        this.sexo = sexo;
    }

    apresentar(){
        return `Olá, eu sou ${this.nome} e tenho ${this.idade}  e sou muito ${this.sexo}`;
    }
}

let valor: number = 29.90;
let joao: Cliente = new Cliente("João das Coves", 25, "M");
console.log(joao.idade);
console.log(joao.apresentar());

let apresentacao: string = joao.apresentar();
console.log("Apresentação:");
console.log(apresentacao);