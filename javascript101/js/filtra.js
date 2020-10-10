var campoFiltro = document.querySelector("#filtrar-tabela");

console.log(campoFiltro);

campoFiltro.addEventListener("input", function(){
    console.log("Digitaram no campo");
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){

        for(let i = 0;i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");

            var expressao = new RegExp(this.value, "i");
            
            var nome = tdNome.textContent;

            
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel")
            }
        }
    }else{
        for(var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    };
});