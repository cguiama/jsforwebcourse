function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}



const listaDeTeclas = document.querySelectorAll('.tecla');
let n = 0;

while(n<listaDeTeclas.length){

    const tecla = listaDeTeclas[n];

    const instrumento = tecla.classList[1];
    //template String
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio);
    };
    n++;
}