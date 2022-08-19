

var tabela = document.querySelector("#tabela-pacientes"); //todas as linhas de informação da tabela 

tabela.addEventListener("dblclick", function(event) { //o duplo click vai executar a function
    event.target.parentNode.classList.add("fadeOut"); // add uma classe com estilo de opacidade e transiçao 

    setTimeout(function() {  // para dar tempo de acontecer a animaçao add o setTimeout
        event.target.parentNode.remove(); // vai remover o pai do evento recebido
    }, 300);


 

    ///COMO FUNCIONA A LOGICA DE RECEBIMENTO DO CAMPO
    // var alvoEvento = event.target;
    // var paiDoAlvo = alvoEvento.parentNode; // TR = paciente = remover 
    // paiDoAlvo.remove();

// Não funciona nos novos pacientes
// var pacientes= document.querySelectorAll(".paciente");

// pacientes.forEach(function (paciente){
//     paciente.addEventListener("dblclick", function(){
//         this.remove();
//     });
// });
});