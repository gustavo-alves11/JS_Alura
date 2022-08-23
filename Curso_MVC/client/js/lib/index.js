campos = document.querySelector(".form");
button = document.querySelector("#include")


button.addEventListener("click", function (event) {
    event.preventDefault();
    operacao = takeValues(campos);
    criarlinha(operacao); 
    
console.log(operacao);

});

function takeValues(campos){
    var operacao = {
        data: campos.data.value,
        quantidade: campos.quantidade.value,
        valor: campos.valor.value
    };
    return operacao;
}

function criarCampo(dado){
    td= document.createElement("td");
    td.textContent = dado; 
    return td;

}

function criarlinha(operacao){
    
    var tr = document.createElement("tr");
    var tabela = document.querySelector("table")
    tr.appendChild(criarCampo(operacao.data));
    tr.appendChild(criarCampo(operacao.quantidade));
    tr.appendChild(criarCampo(operacao.valor));
    tr.appendChild(criarCampo(calcular(operacao.quantidade, operacao.valor)));
    tabela.appendChild(tr);
};

function calcular(campos, campos1){
    total = campos * campos1
    return total
}