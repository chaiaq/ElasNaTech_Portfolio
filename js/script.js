
/* script para formulario */

document.getElementById("enviar").addEventListener("click", validaForm)

function validaForm () {
  var name = document.getElementById("name").value
  var email = document.getElementById("email").value
  var msg = document.getElementById("msg").value
  if (name != "" && email != "" && msg != "") {
    alert("Obrigada, assim que possível retorno seu contato!")
  } else {
    alert("Preencha todos os campos do formulário, por favor ;)")
  }
}

/* script modo escuro */

function darkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

/* script para galeria linguagens*/

var proximaImagem = 1;
var zIndexAtual = 0;
var imagens = document.getElementById("container").children;

function avancarImagem(){
    imagem = imagens[proximaImagem];
    imagem.style.zIndex = ++zIndexAtual;
    imagem.style.marginLeft = "0%";

    proximaImagem++;

 
    if(proximaImagem >= imagens.length){
        proximaImagem = 0;
    }

    
    setTimeout(resetarImagens,500);
}

function resetarImagens(){
    imagemVisivel = proximaImagem -1;

    
    if(imagemVisivel < 0){
        
        imagemVisivel = imagens.length - 1;
    }

    
    for(var i = 0; i < imagens.length; i++){
        if(i != imagemVisivel){
            imagens[i].style.marginLeft = "100%";
        }
    }
}

var intervalo = setInterval(avancarImagem,2000);