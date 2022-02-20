/*Epressões Regulares*/
let regEx1 = /\d/,		/*  \d ou [0-9] numeros */
regEx2 = /[a-z]/,	/*  letras de a-z       */
regEx3 = /\W/,		/*  simbolos            */
regEx4 = /[A-Z]/;	/*  letras de A-Z       */

function validaSenha(value) {
    let nivel = 0;
    /*if ternario*/
    if (value.length > 5) {
        regEx1.test(value) ? ++nivel : '';
        regEx2.test(value) ? ++nivel : '';
        regEx3.test(value) ? ++nivel : '';
        regEx4.test(value) ? ++nivel : '';
    }
    return nivel
}
function mensagem(index) {
    let mensagem = [
        'Menor que 6',
        'Pessimo',
        'Fraco',
        'Médio',
        'Alto',
        'Forte'
    ]
    return mensagem[index]
}