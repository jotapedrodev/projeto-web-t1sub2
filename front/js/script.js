const protocolo = 'http://'
const baseURL = 'localhost:3000'
const filmesEndPoint = '/filmes'

async function obterFilmes() {
    console.log("teste")
        const URLCompleta = `${protocolo}${baseURL}${filmesEndPoint}`
        const filmes = (await axios.get(URLCompleta)).data
        // console.log(filmes);
        let tabela = document.querySelector('.filmes')
        let corpoTabela = tabela.getElementsByTagName('tbody')[0]
        for (let filme of filmes) {
            let linha = corpoTabela.insertRow()
            let celulaTitulo = linha.insertCell(0)
            let celulaSinopse = linha.insertCell(1)
            celulaTitulo.innerHTML = filme.titulo
            celulaSinopse.innerHTML = filme.sinopse
        }
        
}

function cadastrarFilme() {
    console.log("cadastrando...");
    
    
}