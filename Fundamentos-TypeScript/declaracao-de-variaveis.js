//var, let e const
//var
function iniciarTime(iniciaJogo) {
    /*var nome = 'Messi e Amigos dos amigos!!!';
 
     if (iniciaJogo) {
         var cidade = 'no Rio de Janeiro';
     }
     console.log('${nome}  vão jogar ${cidade}');
 */
    var estadio = "Morumbi";
    var nome = 'Messi e Amigos';
    var cidade = ' em São Paulo no ' + estadio;
    if (iniciaJogo) {
        cidade = ' no Rio de Janeiro';
    }
    console.log(nome + " vão jogar" + cidade);
}
iniciarTime(true);
iniciarTime(false);
