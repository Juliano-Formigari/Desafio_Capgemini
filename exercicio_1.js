function gerador() {
    let valorDigitado = document.getElementById('numero').value;

    for (let i = 1; i <= valorDigitado; i++) {
        var escrevendoResultado = ""
        for (let j = valorDigitado - 1; j >= 1; j--) {
            escrevendoResultado += "  "
        }
        for (let j = 1; j <= i; j++) {
            escrevendoResultado += "*"
        }
        criaElemento(escrevendoResultado)
    }
}
function criaElemento(texto) {
    let tipo = document.createElement('h3');
    tipo.style.textAlign = 'right';
    tipo.appendChild(document.createTextNode(texto));
    document.getElementById('retornoGerador').appendChild(tipo);
}
function limpar(){
    document.getElementById('retornoGerador').innerHTML = "";
}