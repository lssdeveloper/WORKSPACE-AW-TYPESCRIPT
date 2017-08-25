//boolean
var estaPago = true;
//number
var idade = 41;
var valor = 29.99;
//String
var nome = "Leandro";
//template string
console.log("Ol\u00E1, meu nome \u00E9 " + nome + " e tenho " + idade + " anos e minhas contas est\u00E3o pagas? " + estaPago + " ");
//arrays
var notas = [8, 6, 7, 9];
//tuple
var alunos = ["João", 9, "Matemática"];
console.log(alunos[0]);
console.log(alunos[1]);
//enum é semelhante no Java aqui estou criando um novo tipo de dados
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
    Cor[Cor["Branco"] = 3] = "Branco";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
console.log("Cor de fundo : " + corFundo);
//Any = qualquer valor, não usar a tipagem do typescript
var algumValor = 4;
algumValor = 'Agora é uma string...';
algumValor = true;
//void é oposto do Any é uma função que não retorna nada
function alerta() {
    //..alert('Operação não permitida');
}
//null e undefined -> isso não faz muito sentido!
var u = undefined;
var n = null;
// null e undefined são subtipos dos outros tipos
//pode-se pegar uma variável com valor e definir como null ou undefined
//limpar o valor da variável
nome = undefined;
nome = null;
