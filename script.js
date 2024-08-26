const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você gostaria de contribuir para com o meio-ambiente?",
        alternativas: [
            {
                texto: "SIM, me importo com o bem-estar do nosso planeta",
                afirmacao: "Muito bom que ainda existam pessoas como você."
            },
            {
                texto: "NÃO, isso é indiferente para minha vida",
                afirmacao: "Por mais que não haja motivação, é importante que cada um faça sua parte"
            }
        ]
    },
    {
        enunciado: "Você se esforçaria para tentar salvar o planeta?",
        alternativas: [
            {
                texto: "SIM, acho que todos deveriam cuidar da nossa casa",
                afirmacao: "Há muitas maneiras de ajudarmos o nosso planeta, poderíamos começar com a conscientização."
            },
            {
                texto: "NÃO. contribuiria, mas sem esforço",
                afirmacao: ", e que bom que faria a sua parte, é algo precioso"
            }
        ]
    },
    {
        enunciado: "Qual dessas opções mais se encaixa em sua preferência?",
        alternativas: [
            {
                texto: "Doações",
                afirmacao: "Doações são boas obras que contribuem de maneira excelente em todas as áreas da sociedade, fortalecendo e até mesmo sustentando"
            },
            {
                texto: "Marketing verde",
                afirmacao: "O marketing verde é uma abordagem que destaca como produtos e serviços são mais amigáveis ao meio ambiente, uma aternativa muito boa a se tratar. "
            }
        ]
    },
    {
        enunciado: "Por que você acha importante esse tipo de ajuda para com a Terra?",
        alternativas: [
            {
                texto: "Para que meus filhos tenham, de certa forma, um planeta habitável",
                afirmacao: "Pensando nas gerações futuras levantamos esse tipo de questão, será que estamos fazendo nosso máximo? Podemos incentivá-los a seguir essa mesma lógica? Já é um grande passo você pensar dessa maneira"
            },
            {
                texto: "Porque eu não gostaria de viver em um lugar doente, porém, não faço muita questão",
                afirmacao: ""
            }
        ]
    },
    {
        enunciado: "? ",
        alternativas: [
            {
                texto: ".",
                afirmacao: "."
            },
            {
                texto: ".",
                afirmacao: "."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();