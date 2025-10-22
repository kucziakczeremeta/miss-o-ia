const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultados = document.querySelector(".caixa-resultados");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-botao");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.querySelector(".iniciar-botao");

let atual = 0;
let perguntasAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click,iniciaJogo');
function iniciaJogo (){
    atual = 0;
    historiaFinal = "";
    telaInicial.computedStyleMap.display = 'none';
    caixaPerguntas.classList.remove("mostrar");
    caixaAlternativas.classList.remove("mostrar");
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta (){
    if (atual >= perguntas.length){
        mostraResultados();
        return;
    }
    perguntasAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntasAtual.enunciado;
    caixaAlternativas.textContent = '';
    mostraAlternativas();
}

function mostraAlternativas(){
    for (const alternativas of perguntasAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativas.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
    }
}