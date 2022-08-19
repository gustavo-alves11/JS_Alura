var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");
    console.log(this.value.length)
    if (this.value.length > 0) {// se o comprimento do input for maior que 0
        for (var i = 0; i < pacientes.length; i++) { /// percore todos as linhas de pacientes
        var paciente = pacientes[i];   
        var tdnome = paciente.querySelector(".info-nome")// pega o td de dentro de cada paciente
        var nome= tdnome.textContent;
        // abaixo instanciamos o objeto expressao
        var expressao = new RegExp(this.value, "i"); // Expressão regular recebe o valor que vai ser analizado
                                                    //o i significa que não é caseSensitive
        if (!expressao.test(nome)) { // aqui vai usar o mêtodo test para testar se nome é igual de alguma forma com o valor atribuido
            paciente.classList.add("invisivel"); // se comparar algo igual add a classe invisivel
        }else {                                   //OBS: classe invisivel é criada no css para alterar o visual.
            paciente.classList.remove("invisivel"); //se nao remove a classe
        } 
};
}else { // se o comprimento do input for maior que 0
    for (var i = 0; i < pacientes.length; i++) {  // vai passar por todas as linhas 
        var paciente = pacientes[i];                // excluindo a classe invisivel 
        paciente.classList.remove("invisivel");
    }
}
});