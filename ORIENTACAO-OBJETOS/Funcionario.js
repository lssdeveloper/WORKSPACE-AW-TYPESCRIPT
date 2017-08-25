var Funcionarios = (function () {
    function Funcionarios(nome, cargo, idade) {
        this.cargo = cargo;
        this.idade = idade;
        this.nome = nome;
    }
    Funcionarios.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou " + this.nome + ", tenho " + this.idade + ", e sou " + this.cargo + ".";
    };
    return Funcionarios;
}());
var zezinho = new Funcionarios("Zezinho Ribeiro", "Motorista", 50);
var funcionario = zezinho.apresentar();
console.log(funcionario);
