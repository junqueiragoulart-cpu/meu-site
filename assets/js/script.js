console.log("JavaScript carregado com sucesso!");

const botao = document.getElementById("botao-teste");
const mensagem = document.getElementById("mensagem");

if (botao && mensagem) {
    botao.addEventListener("click", function() {
        mensagem.textContent = "Você clicou no botão! JavaScript funcionando!";
    });
}
