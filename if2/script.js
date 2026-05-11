function idade2(){
    let idade1 = document.getElementById("idade1").value;
    if (idade1 <= 0){
      document.getElementById("par1").textContent = "Erro"
    }
    else if(idade1 <=12){
     document.getElementById("par1").textContent = "Você é uma criança"
    }
    else if (idade1 >= 12 && idade1 <=17){
    document.getElementById("par1").textContent = "Você é um adolecente"
    }
    else if (idade1 >= 18 && idade1 <= 59 ){
    document.getElementById("par1").textContent = "Você é um adulto"
    }
    else if (idade1 >= 60)
      document.getElementById("par1").textContent = "Você é um idoso"

}

function senha2(){
    let usuario = document.getElementById("usuario1").value;
    let senha = document.getElementById("senha1").value;
    let p = document.getElementById("resultado");
    if (usuario == "admin" && senha == 1234){
        p.textContent="Login realizado com sucesso"
    }
    else if (usuario == "professor" && senha =="senac"){
        p.textContent= "Bem-Vindo, professor"
    }
    else if(usuario == "" && senha ==""){
        p.textContent="Usuário ou senha incorretos"
    }
}

function desconto(){
    let valor = document.getElementById("input1").value;
    let vip = document.getElementById("input2").value;
    let cupom = document.getElementById("input3").value;
    let desconto = document.getElementById("p1");
    if ( valor >= 500 && vip == "sim"){
        desconto = valor * 0.20;
        p1.textContent = valor -  desconto;
    }
}