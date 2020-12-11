var operacio = '';

$( document ).ready(function() {
  // Handler for .ready() called.
    $('.exercici').click(function(){exercicis(this);});
    $('.btnOp').click(function(){setOperacio(this);});
    $('#valor1').change(function(){calcular();});
    $('#valor2').change(function(){calcular();});
    $('#reset').click(function(){reset();});
});

function exercicis(btn){
    nom = 'exercici'+$(btn).attr('exercici');
    self[nom]();
}

//exercici 1
function exercici1(){
    console.log('Hola Mon');
}

function exercici2(){
    alert('Em dic Serafín');
}

function exercici3(){
    var nom = "Serafín";
    var cognoms= "Castaño Martínez";

    console.log(nom + ' ' + cognoms);

}

function exercici4(){
    var n1 = 20;
    var n2 = 33;

    console.log('La suma de ' + n1 +' i ' + n2 +' és '+ (n1 + n2));

}

function exercici5(){
    var nota_examen = 4.5;
    var nota_aprovat = 5;
    var msg = '';

    msg = (nota_examen<nota_aprovat) ? 'Ha suspès amb una nota de ' : 'Ha aprovat amb un nota de ' ;
    alert(msg + nota_examen);
}

function exercici6(){
    var text = 'Tinc un cotxe de color blau.';

    console.log(text);
    text = text.replace('blau','verd');
    console.log(text);
    text = text.replace(/o/g,'u');
    console.log(text);
}

function exercici7(){
    var objectes =  ['taula', 'cadira', 'ordinador', 'llibreta'];

    for (i=0; i<objectes.length; i++){
        console.log("L'objecte " + objectes[i] + ' està a la posició ' + i) ;
    }
}

function exercici8(){
    var operacions = ['suma','resta','multiplica'];
    var valorsok = /^[0-9]*(\.?)[0-9]+$/;
    var msg = '';

    var operacio = prompt('Operació (suma,resta,multiplica)');

    if (operacions.indexOf(operacio)<0){
        msg = 'operacio incorrecta';
    } else {
        var valor1 = prompt('valor 1');
        var valor2 = prompt('valor 2');
        if (valor1.match(valorsok)){
            if (valor2.match(valorsok)){
                resultat = calculadora(operacio, Number(valor1), Number(valor2));
                msg = 'El resultat és ' + resultat;
            }else{
                msg = 'El valor 2 no és numèric';
            }
        }else {
            msg = 'El valor 1 no és numèric';
        }
    }
    alert(msg);
}

function calcular(){
    var v1,v2,op,resultat;
    v1 = Number($('#valor1').val()) ;
    v2 = Number($('#valor2').val()) ;
    switch (operacio.trim()) {
        case '+':
            resultat = v1+v2;
            break;
        case '-':
            resultat = v1-v2;
            break;
        case '*':
            resultat = v1*v2;
            break;
        case '/':
            if (v2==0){
                resultat = 'ERROR: divisor 0';
            }else {
                resultat = v1/v2;
            }
            break;
        default:
            resultat = '0';
            break;
    }
    $('#resultat').text('= '+resultat);
}

function setOperacio(op){
    operacio = $(op).text();
    calcular();
}

function reset(){
    operacio='';
    $('#valor1').val('0');
    $('#valor2').val('0');
    $('#resultat').text('= 0');

}