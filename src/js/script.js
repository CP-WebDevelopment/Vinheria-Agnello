//NOME DO VINHO
var nome_vinho= prompt("Digite o nome do vinho: ");
if (nome_vinho==""){
    alert("Nome do vinho não inserido");
    var nome_vinho= prompt("Digite o nome do vinho: ");
}
console.log("Nome do vinho: ", nome_vinho)

//TIPO DO VINHO
var tipo_vinho= prompt("Digite o tipo do vinho: ");
if (tipo_vinho==""){
    alert("Tipo do vinho não inserido");
    var tipo_vinho= prompt("Digite o tipo do vinho: ");
}
console.log("Tipo do vinho: ", tipo_vinho)

//SAFRA DO VINHO
var safra_vinho= prompt("Digite o Safra do vinho: ");
if (safra_vinho==""){
    alert("Safra do vinho não inserida");
    var safra_vinho= prompt("Digite a safra do vinho: ");
}
console.log("Safra do vinho: ", safra_vinho)

//QUANTIDADE DO VINHO
var qtd_vinho= prompt("Digite a quantidade do vinho: ");
if (qtd_vinho==""){
    alert("Quantidade do vinho não inserida");
    var qtd_vinho= prompt("Digite a quantidade do vinho: ");
}
if (qtd_vinho<5){ //SE FOR MENOR QUE 5 EXIBIR O ALERT
    alert("Estoque baixo")
}
console.log("Estoque do vinho: ", qtd_vinho)
alert("Cadastro realizado! Veja as informações no console.")