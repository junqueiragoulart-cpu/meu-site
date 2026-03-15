console.log("JavaScript carregado com sucesso!");
/*
const botao = document.getElementById("botao-teste");
const mensagem = document.getElementById("mensagem");

if (botao && mensagem) {
    botao.addEventListener("click", function() {
        mensagem.textContent = "Você clicou no botão! JavaScript funcionando!";
    });
}
*/
/* APRENDENDO JS */
const botaoTema = document.getElementById("tema-btn");

if (botaoTema) {
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}
// Trocar o texto automaticamente
// const botaoTema = document.getElementById("tema-btn");

if (botaoTema) {
    botaoTema.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            botaoTema.textContent = "Modo claro";
        } else {
            botaoTema.textContent = "Modo escuro";
        }
    });
}
