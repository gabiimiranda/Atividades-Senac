function leticia() {
  alert("Olá mundo");
  let nome = ("Gabriela");
  alert(nome);
  let idade = 17;
  let numero = 10;
  alert(idade + numero);

  let arroz = document.getElementById("par");
  let caixa = document.getElementById("numero");
  let escrita = arroz.textContent;
  caixa.value = escrita;

}

function leticia2() {
  let texto = document.getElementById("textinho");
  texto.textContent = "O melhor time do mundo!";
  
  
}

function leticia3() {
  let texto = document.getElementById("textinho2").style.background = "red";
  let texto2 = document.getElementById("textinho3").style.background = "white";
  let texto3 = document.getElementById("textinho4").style.background = "black";
}
function leticia4(){
let clic = document.getElementById("clic")
clic.textContent = "Não existe"
}

function leticia5(){
  let aaa = document.getElementById ("par1").textContent =""
}

function soma(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let resultado = Number(num1) + Number(num2);
let local = document.getElementById("resultado");
local.textContent = resultado;
}

function body1(){
  document.getElementById("body1").style.background = "pink";
}

function tam1(){
  let pargg = document.getElementById("pargg");
  pargg.style.fontSize = "30px";
}

function tam2(){
  let pargg = document.getElementById("pargg");
  pargg.style.fontSize = "5px";
}

function corp1(){
  let pargg = document.getElementById("pargg")
  pargg.style.backgroundColor = "red";
}

function elem1(){
  let par4 = document.getElementById("par4");
  par4.style.color = "purple";
  let par5 = document.getElementById("par5");
   par5.style.color = "yellow";

}

function tudo1(){
  let par6 = document.getElementById("par6")
   par6.style.color = "red";
   par6.style.fontSize = "55px";
}
function tudico(){
  let par8 = document.getElementById("par8");
  let coiso1 = document.getElementById("coiso1");
  let coiso2 = document.getElementById("coiso2");
  let escrita = par8.textContent;
  coiso1.value = escrita;
  coiso2.value = escrita;

}

function textm1(){
  let par9 = document.getElementById("par9");
  par9.textContent = "TUDO BEM?";
}

function colorm1(){
  let par9 = document.getElementById("par9");
  par9.style.color = "green";
}

function tam3(){
  let par9 = document.getElementById("par9");
  par9.style.fontSize = "55px";
}

function duas1(){
  let div1 = document.getElementById("div1");
  div1.style.backgroundColor = "aquamarine";
  let div2 = document.getElementById ("div2");
  div2.style.backgroundColor = "green";
}

function valor1(){
let trem1 = document.getElementById("trem1")
document.getElementById("par12").textContent = trem1.value
document.getElementById("par12").style.color="blue"
}

function soma3(){
  let soma1 = document.getElementById("soma1").value;
  let soma2 = document.getElementById("soma2").value;
  let soma03 = Number(soma1) + Number(soma2);
  let palmeiras = document.getElementById("resultado2").textContent = soma03;
}

function limpa2(){
  document.getElementById ("resultado2").textContent = " "
}

function tudo5(){
document.getElementById("body1").style.color="white"
document.getElementById("body1").style.backgroundColor="purple"
document.getElementById("textinho").style.fontSize = "150px";
document.getElementById("par1").style.color="pink"
document.getElementById("par1").style.fontSize = "6px";
document.getElementById("par8").style.fontSize = "90px";
document.getElementById("par3").style.fontSize = "10px";

}