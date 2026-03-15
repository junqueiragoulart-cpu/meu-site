console.log("JavaScript carregado com sucesso!");

// Só roda se o botão existir na página
const botao = document.getElementById("botao-teste");
const mensagem = document.getElementById("mensagem");

if (botao && mensagem) {
    botao.addEventListener("click", function() {
        mensagem.textContent = "Você clicou no botão! JavaScript funcionando!";
    });
}
