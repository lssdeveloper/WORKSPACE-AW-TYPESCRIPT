//var, let e const

//var
function iniciarTime(iniciaJogo: boolean){
   /*var nome = 'Messi e Amigos dos amigos!!!';

    if (iniciaJogo) {
        var cidade = 'no Rio de Janeiro';
    }
    console.log('${nome}  vão jogar ${cidade}');
*/
    const estadio: string = "Morumbi";
    let nome: string = 'Messi e Amigos';
    let cidade: string = ' em São Paulo no ' + estadio;
    if (iniciaJogo) {
        cidade = ' no Rio de Janeiro';
    }
    console.log(nome +" vão jogar"+ cidade);
  
}

iniciarTime(true);
iniciarTime(false);