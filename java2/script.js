function verificar(){

    let idade = document.getElementById("caixaidade").value;
    if (idade >= 10){
        alert ("10 ou mais");
    }
    else{
        alert ("Você é menor");
    }

}

function nome(){

    let nome1 = document.getElementById("nome1").value;
    if (nome1 == "Gabriela"){
        alert ("Meu nome")
    }
}

function ok(){
    let ok1 = document.getElementById("ok1").value;
    if (ok1 == "ok"){
        alert ("você escreveu OK");
    }

}

function numero5(){
      let num5 = document.getElementById("5").value;
         if (num5 == "5"){
        alert ("você acertou");
         }
}

function correto(){
        let corr1 = document.getElementById("correto1").value;
        if (corr1 == "admin"){
            let par1 = document.getElementById("par1")
            par1.textContent = "Correto"

        }
}


function teste(){
        let test1 = document.getElementById("teste2").value;
        if (test1 == "teste"){
            let test1 = document.getElementById("par2")
            test1.textContent = "Corretaa"

        }
}

function cor1(){
    let div1 = document.getElementById("div1");
    let cor2 = document.getElementById("cor2").value
    if (cor2 == "azul"){
       div1.style.backgroundColor = "aquamarine";
    }
}

function number(){
    
    let number1 = document.getElementById("number1").value;
    if (number1 >= 11){
        alert ("É maior.");
    }
   
    

}

function number2(){
    
    let number2 = document.getElementById("number2").value;
    if (number2 <= 50){
        alert ("É menor.");
    }
   
    

}

function senha(){
    let senha1 = document.getElementById("senha1").value;
    if (senha1 == "senha"){
      let senha2 = document.getElementById("senha2")
      senha2.textContent = "S-E-N-H-A"
    }

}

function corf(){
    let corf2 = document.getElementById("corf2").value;
    if (corf2 == "escuro"){
        let bodyc = document.getElementById("bodyc")
        bodyc.style.backgroundColor = "black"
        bodyc.style.color = "white"
    }
}

function texcor(){
    let texcor2 = document.getElementById("texcor2").value
    if (texcor2 = "linda"){
        let texcor3 = document.getElementById("texcor3")
        texcor3.textContent = "acertou"
        let texcor2 = document.getElementById("texcor2")
        texcor2.style.color = "pink"

    }
}


function ok3(){
    let ok4 = document.getElementById("ok4")
    if (ok4 = "ok"){
       let bodyc = document.getElementById("bodyc");
        bodyc.style.backgroundColor = "red"
        let maint = document.getElementById("maint");
        maint.style.backgroundColor = "pink"
        maint.style.fontSize = "2px"
    }
}

function vinte (){
    let vinte1 = document.getElementById("vinte1")
    if (vinte1 >= "20"){
        let par6 = document.getElementById("par6")
        par6.textContent = "six-seven"
        par6.style.fontSize = "40px"

    }
}

function nome3(){
    let nome2 = document.getElementById("nome2")
    if (nome2 = "admin"){
        alert ("Seja Bem-Vindo")
    }
}


function texcor7(){
    let texcor6 = document.getElementById("texcor6").value;

    if (texcor6 == 9){
        let texcor6 = document.getElementById("texcor6");
        
        texcor4.textContent = "A gabi nao tem nada";
        texcor4.style.color = "green";
        texcor4.style.fontSize = "35px";
    }
}
function mudarele() {
    let input1 = document.getElementById("texcor7");
    if (input1 = "mudar elementos") {
        let bodyc = document.getElementById ("bodyc");
        bodyc.style.backgroundColor = "grey";
        bodyc.style.color = "white";
        bodyc.style.textDecoration = "underline";
    }
}
function usuario1() {
    let input2 = document.getElementById("text8");
    if (input2 >= "100") {
        let bodyc = document.getElementById ("bodyc");
        bodyc.style.backgroundColor = "aliceblue";
    }
}
function usuario2() {
    let input3 = document.getElementById("text9");
    if (input3 = "copiar") {
        let valor1 = document.getElementById("valor");
        valor.textContent = "gabi betinha";
    }
}
function usuario3() {
    let input4 = document.getElementById("text10")
    if (input4 = "mudar") {
        let div1 = document.getElementById("divs1");
        div1.style.backgroundColor = "Green"
        let div2 = document.getElementById("divs2");
        div2.style.backgroundColor = "blue";
    }
}
function usuario4() {
    let input5 = document.getElementById("text11");
    if (input5 = "gabichata") {
        let bodyc = document.getElementById("bodyc");
        bodyc.style.backgroundColor = "crimson";
        bodyc.style.color = "white";
        bodyc.style.fontSize = "small";
    }
}