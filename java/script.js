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
    caixaResultado.classList.remove("mostrar");
    mostraPergunta();
}

function mostraPergunta (){
    if (atual >= perguntas.length){
        mostraResultado();
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
        caixaAlternativas.appendChild(botaoAlternativas);
    }
    function mostraAfirmacoes(){
        for(const afirmacoes of perguntasAtual.afirmacoes){

        }
    }
}
function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacoes);
    historiaFinal += afirmacoes + "";
    if (opcaoSelecionada.proxima !== undefined){
        atual = opcaoSelecionada.proxima;
    }else{
        mostraResultado();
        return;
    }
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = 'Em 2050, $(nome)';
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
    caixaResultados.classList.add("mostrar");
    botaoJogarNovamente.addEventListener(click, jogaNovamente);
}
function jogaNovamente(){
    atual = 0;
    historiaFinal  = "";
    caixaResultados.classList.remove("mostrar");
    mostraPergunta();
}
function substituiNome(){
    for (const pergunta of perguntas){
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();