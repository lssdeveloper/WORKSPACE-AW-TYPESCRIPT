var Cliente = (function () {
    function Cliente(nome, idade, sexo) {
        this.idade = idade;
        this.nome = nome;
        this.sexo = sexo;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou " + this.nome + " e tenho " + this.idade + "  e sou muito " + this.sexo;
    };
    return Cliente;
}());
var valor = 29.90;
var joao = new Cliente("João das Coves", 25, "M");
console.log(joao.idade);
console.log(joao.apresentar());
var apresentacao = joao.apresentar();
console.log("Apresentação:");
console.log(apresentacao);
