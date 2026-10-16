
function abrirPresente() {
    const mensagem = document.getElementById("mensagem");
    const botao = document.getElementById("botao");
    const xicara = document.getElementById("xicara");

    // Revela a mensagem de aniversário
    mensagem.classList.remove("escondida");

    botao.textContent = "💗 Surpresa revelada!";
    botao.disabled = true;

    // Faz a xícara se mexer
    xicara.style.animation = "flutuar 0.5s ease-in-out 3";

    // Faz cair flores, corações e estrelinhas
    for (let i = 0; i < 25; i++) {
        const flor = document.createElement("span");

        const enfeites = ["🌸", "💗", "✨", "🌷", "💕", "🌼"];

        flor.textContent =
            enfeites[Math.floor(Math.random() * enfeites.length)];

        flor.style.position = "fixed";
        flor.style.left = Math.random() * 100 + "vw";
        flor.style.top = "-40px";
        flor.style.fontSize = (18 + Math.random() * 20) + "px";
        flor.style.zIndex = "999";
        flor.style.pointerEvents = "none";
        flor.style.animation =
            `cair ${2 + Math.random() * 3}s linear forwards`;

        document.body.appendChild(flor);

        setTimeout(() => flor.remove(), 5500);
    }

    // Leva a tela até a mensagem
    mensagem.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Cria a animação dos enfeites caindo
const estiloFlores = document.createElement("style");

estiloFlores.textContent = `
    @keyframes cair {
        to {
            transform: translateY(110vh) rotate(360deg);
            opacity: 0;
        }
    }
`;

document.head.appendChild(estiloFlores);
