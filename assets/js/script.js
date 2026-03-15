console.log("JavaScript carregado com sucesso!");
const botao = document.getElementById("botao-teste");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.textContent = "Você clicou no botão! JavaScript funcionando!";
});
