
const botoes = document.querySelectorAll(".botao");
const titulos = document.querySelectorAll(".titulo");

botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarTitulo();

		botao.classList.add("selecionado");
		titulos[indice].classList.add("selecionado");
	});
});

function desselecionarTitulo() {
	const tituloSelecionado = document.querySelector(".titulo.selecionado");
	tituloSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
	const botaoSelecionado = document.querySelector(".botao.selecionado");
	botaoSelecionado.classList.remove("selecionado");
}
