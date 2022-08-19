var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest(); /// classe XMLHttpRequest() instanciada

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); //primeiro metodo .open define o metodo de busca e url

    xhr.addEventListener("load", function() { //quando ocorrer o evento de load executar a function anonima 
        var erroAjax = document.querySelector("#erro-ajax"); //pega o campo spam de erro
        if( xhr.status == 200){ // se nao for 200 terá algum erro ex:404
        erroAjax.classList.add("invisivel")
        var resposta = xhr.responseText; // metodo .responseText pega os dados e por padrão retorna uma string 
        var pacientes = JSON.parse(resposta); // o json.parse tranforma em aray de objetos
        pacientes.forEach(function(paciente) { 
            addPaciente(paciente); //a cada objeto do array retornado vai add um paciente
        });
        }else{ // se tiver erro vai remover a classe invisivel do spam de erro
           erroAjax.classList.remove("invisivel") 
        }
    });

    xhr.send();  // realiza tudo
});