
let produtos = [];
let preços = []
let posicao = 0
let quantidade = 0

function guardar(){
    let produto = document.getElementById("produto").value;
    let preco = document.getElementById("preco").value;
    let lista = document.getElementById("mensagem3");
     
    if(produto == "" || preco == ""){
        document.getElementById("mensagem").textContent = "Preencha todos os campos";
        document.getElementById("mensagem").style.color = "red";
    }
    else if( preco <= 0){
        document.getElementById("mensagem").textContent = "O valor precisa ser maior que 0";
        document.getElementById("mensagem").style.color = "red";
    }
    else{
        produtos.push(produto + " R$ " + preco);
        preços.push(preco);
        document.getElementById("mensagem").textContent = "Produto Cadastrado";
        document.getElementById("mensagem").style.color = "green";
        quantidade = quantidade + 1
        document.getElementById("mensagem3").textContent = quantidade;
    }

    


}
function cadastrar(){
    let qnt = document.getElementById("quantidade");
    let lista = document.getElementById("lista");
    
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

     for (let i = 0; i < produtos.length; i++) {
        let item = document.createElement("li");
        item.textContent = produtos[i];
        lista.appendChild(item);
        quantidade.textContent = "quantidade de produtos cadastrados  " + produtos.length;
     }
}