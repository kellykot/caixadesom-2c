//declaração/criando função tocaSomPom
function tocaSomPom(){
    document.querySelector('#son_tecla_pom').play();
}

//chamando/invocando a função tocaSomPom pelo click do botão
document.querySelector('.tecla_pom').onclick = tocaSomPom;

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[1].onclick = TocaSomClap;
//referencia constante listaDeTeclas, buscandotodos os botões

//chamando a função tocaSomPom pelo item "0" da listaDeTecla
listaDeTecklas[0].onclick = tocaSomPom
