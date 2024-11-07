

function eventoClick(){
    document.body.style.backgroundColor = "green"
}
function eventoDblClick(){
    //alert('Evento de clique duplo');
}
function viraVermelho(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red";
}

function viraAzul(){
    let div = document.getElementById("teste");
    div.style.backgroundColor = "blue"; 
}
function adicionaTexto(){
    let p = document.getElementById("texto");
    p.append ('O mouse moveu <br>')
}
function mudou(){
    console.log('Mudou')
}
function teclaPressionada(){
    let input = document.getElementById("campoTexto").value;
    console.log(input);
}

