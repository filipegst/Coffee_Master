

const listaCafes = document.querySelector(".listaCafes")

async function buscarEMostrarCafes() {
    const url = "https://filipegst.github.io/Coffee_Master_Dados/dados.json"

    try{
        const buscarCafes = await axios.get(url)
        const cafes = buscarCafes.data.cafes

        cafes.forEach(cafe => {
            listaCafes.innerHTML+=
            `
            <li class="cafes">
                <a href="${cafe.link}" class="linkCafe"><img class="cafeImagem" src="${cafe.imagem}" alt="Embalagem do café ${cafe.nome}"></a>
                <h2 class="cafeTitulo">${cafe.nome}</h2>
                <p class="cafeSubtitulo">${cafe.notas}</p>
                <a href="${cafe.link}" class="linkCafe"><img class="cafeTorra" src="${cafe.torra}" alt="Nivel de torra do café ${cafe.nome}"></a>
                </li>
            `
            
        });

    } catch (error) {
        listaCafes.innerHTML = `<p> Houve um erro ao carregar a página: ${error.message}</p>`;
    }

}


buscarEMostrarCafes();