var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente"); // seleciona todas as linhas da tabela em forma de array

for (var i = 0; i < pacientes.length; i++) {  //for para repetir o cod em todas as linhas

    var paciente = pacientes[i];  // variavel paciente a cada for vai armazenar o valor de uma linha

    var tdPeso = paciente.querySelector(".info-peso");    
    var peso = tdPeso.textContent;       // pegando o peso da linha em questão

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;    // pegando a altura da linha em questão

    var tdImc = paciente.querySelector(".info-imc");  //pegando o campo do imc

    var pesoEhValido = true;    ///atribundo que os valores são validos
    var alturaEhValida = true;

    if (peso <= 0 || peso >= 1000) {    /// validando se realmente são validos
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");
    }

    if (altura <= 0 || altura >= 3.00) { /// validando se realmente são validos
        console.log("Altura inválida!");
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");
    }

    if (pesoEhValido && alturaEhValida) {   // se passarem como válidos calcular o imc
        var imc = calcularImc(peso, altura);
        tdImc.textContent = imc; // e mostrar na tela com apenas 2 casas decimais (toFixed(2))
    }
}
    function calcularImc(peso, altura){
        var imc = 0
        imc = peso / (altura * altura);
        return imc.toFixed(2);
    }

