var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll('.paciente');

for(let i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = parseFloat(paciente.querySelector('.info-peso').textContent);
    var altura = parseFloat(paciente.querySelector('.info-altura').textContent);
    var tdImc = paciente.querySelector(".info-imc");

    var peso_valido = validaPeso(peso);
    var altura_valida = validaAltura(altura);
    
    if(!peso_valido){
        console.log("Peso Inválido");
        peso_valido = false;
        tdImc.textContent = "Peso Inválido";
    }
    
    if(!altura_valida){
        console.log("Altura Invalida");
        altura_valida = false;
        tdImc.textContent = "Altura Inválida";
    }
    
    if(peso_valido && altura_valida){
        tdImc.textContent = calculaImc(peso,altura);
    }else if(!peso_valido && !altura_valida){
        tdImc.textContent = "Peso e altura Inválidos";
        paciente.classList.add("paciente-invalido");
    }else{
        paciente.classList.add("paciente-invalido");
    }

}

function validaPeso(peso){
    if(peso >= 0 && peso <= 1000){
        return true;
    }else{
        return false; 
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2)
}