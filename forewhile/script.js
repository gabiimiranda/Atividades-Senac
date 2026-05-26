produtos = [
    "Mouse",
    "Teclado",
    "Monitor",
    "Cabo HDMI",
    "Pendrive",
    "Webcam"
]
posicao = 0
preços = []

function mostrar() {
    let lista = document.querySelector("#produtos ul");
    lista.textContent = "";
    for (let i = 0; i < produtos.length; i++) {
        let li = document.createElement("li");
        li.textContent = produtos[i];
        lista.appendChild(li);
    }
}

function calcular() {
    let resultado = document.getElementById("total");
    const mouse = document.getElementById("p1").checked;
    const teclado = document.getElementById("p2").checked;
    const monitor = document.getElementById("p3").checked;
    const cabo = document.getElementById("p4").checked;
    const pendrive = document.getElementById("p5").checked;
    const webcam = document.getElementById("p6").checked;
    let total = 0;
    if (mouse) {
        total += 80;
    }
    if (teclado) {
        total += 100;
    }
    if (monitor) {
        total += 500;
    }
    if (cabo) {
        total += 50;
    }
    if (pendrive) {
        total += 100;
    }
    if (webcam) {
        total += 200;
    }
    resultado.textContent = `Total: R$${total.toFixed(2)}`;
}

let contadordeten = 0;
function gerarSenha() {
    const senhaElement = "1234";
    const senhaGerada = document.getElementById("senha").value;
    const resultadoSenha = document.getElementById("resultadosenha");
    let ten = document.getElementById("tentativa");

    contadordeten++;
    if (senhaGerada === senhaElement) {
        resultadoSenha.textContent = "Senha correta!";
        resultadoSenha.style.color = "green";
        resultadoSenha.style.backgroundColor = "white";
        ten.textContent = "Acesso permitido! Tentativas:" + contadordeten;
    } else {
        resultadoSenha.textContent = "Senha incorreta!";
        resultadoSenha.style.color = "red";
        resultadoSenha.style.backgroundColor = "white";
        ten.textContent = "Acesso negado! Tentativas:" + contadordeten;
    }


}

function gerarNota() {
    let alunos = ["Ana", "Bruno", "Carla", "Diego", "Eduarda"];
    let notas = [8.5, 2.0, 9.0, 6.5, 4.0];
    let lista = document.getElementById("nota");


    lista.textContent = "";

    let somaNotas = 0;

    for (let i = 0; i < alunos.length; i++) {
        let linha = document.createElement("li");
        let situacao = notas[i] >= 6 ? "Aprovado" : "Recuperação";


        linha.textContent = `Aluno: ${alunos[i]} | Nota: ${notas[i].toFixed(1)} | Situação: ${situacao}`;
        lista.appendChild(linha);

        somaNotas += notas[i];
    }


    let media = somaNotas / alunos.length;
    let linhaMedia = document.createElement("li");
    linhaMedia.textContent = `Média final da turma: ${media.toFixed(2)}`;
    linhaMedia.style.marginTop = "15px";
    lista.appendChild(linhaMedia);
}


let media = somaNotas / alunos.length;

resultado += "Média final da turma: " + media.toFixed(2);

document.getElementById("nota").textContent = resultado;


function conf() {
    let valor = Number(prompt("Digite um valor (0 para encerrar):"));
    let soma = 0;
    let contagem = 0;

    while (valor !== 0) {
        soma += valor;
        contagem++;
        valor = Number(prompt("Digite um valor (0 para encerrar):"));
    }
    textContent = `Soma final: ${soma}`;
    document.getElementById("resultado").textContent = textContent;

}
