class Funcionario{

    nome: string;
    salario: number;

    constructor(nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    pagarImposto(taxa: number=7.5){
        console.log(`Pagando ${this.salario*taxa/100} de imposto.`);
    }
}

class Secretario extends Funcionario{

}
class Executivo extends Funcionario{

    pagarImposto(taxa: number=7.5){
        console.log(`Executivo paga ${this.salario*taxa/100} de imposto.`);
        super.pagarImposto(taxa);
    }

}
let joana = new Secretario("Joana das Couves", 1500);
joana.pagarImposto();

let anderson = new Executivo("Anderson Azevedo", 5000);
anderson.pagarImposto();