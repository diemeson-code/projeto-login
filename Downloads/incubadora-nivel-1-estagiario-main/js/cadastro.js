document.getElementById("formCadastro").addEventListener("submit", function(event){

event.preventDefault();

let nome = document.getElementById("nome").value;

document.getElementById("mensagem").innerText =
`Usuário ${nome} cadastrado com sucesso`;

});