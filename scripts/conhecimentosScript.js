

const cartoesConhecimento = document.querySelector(".cartoesConhecimento");

async function buscarEMostrarConhecimentos() {
    const url = "https://filipegst.github.io/Coffee_Master_Dados/dados.json";

    try {
        const buscarConhecimento = await axios.get(url);
        const conhecimentos = buscarConhecimento.data.conhecimentos; 

        conhecimentos.forEach(conhecimento => {
            cartoesConhecimento.innerHTML += 
            `
            <li class="cartao">
                <div class="cartaoImagem">
                    <img src="${conhecimento.imagem}">
                </div>

                <div class="cartaoTexto">
                    <h3>${conhecimento.titulo}</h3>
                    <p>${conhecimento.descricao}</p>
                </div>

                <a href="${conhecimento.link}"> <button class="cardBotao"> Saiba Mais </button></a>
            </li>
            `;
        });

    } catch (error) {
        cartoesConhecimento.innerHTML = `<p> Houve um erro ao carregar a página: ${error.message}</p>`;
    }
}

buscarEMostrarConhecimentos();