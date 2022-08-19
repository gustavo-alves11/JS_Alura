var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = document.querySelector("#form-adiciona");
    var paciente = takeValues(form);
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    // O COD COMENTADO ABAIXO SE TORNOU FUNÇOES SEPARADAS  

    //cria tabela e campos
    // var nomeTd = document.createElement("td");
    // var pesoTd = document.createElement("td");
    // var alturaTd = document.createElement("td");
    // var gorduraTd = document.createElement("td");
    // var imcTd = document.createElement("td");

    // nomeTd.textContent = paciente.nome;
    // pesoTd.textContent = paciente.peso;
    // alturaTd.textContent = paciente.altura;
    // gorduraTd.textContent = paciente.gordura;
    // imcTd.textContent = calcularImc(paciente.peso, paciente.altura)

    
    // var pacienteTr = document.createElement("tr");    
    // pacienteTr.appendChild(nomeTd);
    // pacienteTr.appendChild(pesoTd);
    // pacienteTr.appendChild(alturaTd);
    // pacienteTr.appendChild(gorduraTd);
    // pacienteTr.appendChild(imcTd)


});

function takeValues(form){
    var paciente = {    
        nome : form.nome.value,
        peso : form.peso.value, //numeros decimais devem ser separados por . e não virgula  
        altura : form.altura.value,
        gordura : form.gordura.value,
        imc: calcularImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTd(dado, classe){
    var td = document.createElement("td");
    td.classList.add(classe);
    td.textContent = dado
    return td
}

function montaTr(paciente) {
    //Cria TR
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");
    //Cria as TD's e a adiciona dentro da TR
    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    // retorna a TR
    return pacienteTr;  
}
function calcularImc(peso, altura){
    var imc = 0
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

