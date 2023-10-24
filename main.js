//declaração/criando função tocaSomPom
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

function tocaSomClap(){
    document.querySelector('#som_tecla_clap').play();
}

//chamando/invocando a função tocaSomPom pelo click do botão
document.querySelector('.tecla_pom').onclick = tocaSom;

const listaDeTeclas = document.querySelectorAll('.tecla');
listaDeTeclas[1].onclick = tocaSomClap;
//referencia constante listaDeTeclas, buscandotodos os botões

//chamando a função tocaSomPom pelo item "0" da listaDeTecla
listaDeTeclas[0].onclick = tocaSom;

let contador = 0;
while(contador < listaDeTeclas.length){
listaDeTeclas[contador].onclick =function(){
    
};

contador = contador + 1;
console.log(contador);
}
