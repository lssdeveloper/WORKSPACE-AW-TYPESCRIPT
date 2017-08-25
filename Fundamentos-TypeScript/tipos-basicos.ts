//boolean
let estaPago: boolean = true;

//number
let idade: number = 41;
let valor: number = 29.99;

//String
let nome: string = "Leandro";
//template string
console.log(`Olá, meu nome é ${nome} e tenho ${idade} anos e minhas contas estão pagas? ${estaPago} `);

//arrays
let notas: number[]=[8, 6, 7, 9];
//tuple
let alunos: [string, number, string] = ["João", 9, "Matemática"];
console.log(alunos[0]);
console.log(alunos[1]);
//enum é semelhante no Java aqui estou criando um novo tipo de dados
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo: Cor = Cor.Verde;
console.log(`Cor de fundo : ${corFundo}`);

//Any = qualquer valor, não usar a tipagem do typescript
let algumValor: any = 4;
algumValor = 'Agora é uma string...';
algumValor = true;

//void é oposto do Any é uma função que não retorna nada

function alerta(): void{
    //..alert('Operação não permitida');
}

//null e undefined -> isso não faz muito sentido!
let u: undefined = undefined;
let n: null = null;

// null e undefined são subtipos dos outros tipos
//pode-se pegar uma variável com valor e definir como null ou undefined
//limpar o valor da variável
nome = undefined;
nome = null;
