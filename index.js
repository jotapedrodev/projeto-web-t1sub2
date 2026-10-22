const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())

let filmes =[
    {
        titulo: "Matrix",
        sinopse: "Matrix é um marco da ficção científica e ação que acompanha Neo, um hacker que descobre que o mundo real é, na verdade, uma simulação criada por máquinas para controlar a humanidade. Ao ser convidado por resistência liderada por Morpheus e Trinity, ele precisa escolher entre permanecer na ilusão ou enfrentar a verdade. Com visuais inovadores, filosofia e cenas de ação icônicas, é altamente recomendado para quem busca entretenimento e reflexão.",
    },
    
    {
        titulo: "Homem-Aranha no Aranhaverso",
        sinopse: "Homem-Aranha no Aranhaverso acompanha Miles Morales, um adolescente do Brooklyn que ganha poderes de aranha e descobre um multiverso com diferentes versões do herói. Com um visual inovador e estilo de quadrinhos em movimento, mistura ação, humor e emoção, explorando temas de identidade e legado. Aclamado pela crítica e vencedor do Oscar de Melhor Animação, é altamente recomendado pela narrativa cativante e criatividade visual.",
    },
    
    {
        titulo: "The First Slam Dunk",
        sinopse: "The First Slam Dunk acompanha Ryota Miyagi, jovem armador do time Shohoku, determinado a realizar o sonho do irmão e conquistar destaque no basquete escolar enfrentando os atuais campeões. Vale assistir pela animação que mescla 2D e CGI com grande qualidade, direção do próprio criador do mangá e emoção equilibrada entre drama e ação, recebendo críticas positivas pela energia e imersão.",
    }
]
// GET: http://localhost:3000/oi consulta
app.get('/oi', (req, res) => {
    res.send('oi')
})

// get: http:localhost:3000/filmes
app.get('/filmes', (req, res) => {
    res.json(filmes)
})

app.listen(3000), () => console.log("server up & running")

// Post adiciona

app.post('/filmes', (req, res) => {
    const titulo = req.body.titulo
    const sinopse = req.body.sinopse
    const filme = {titulo: titulo, sinopse: sinopse}
    filmes.push(filme)
    res.json(filmes)
})

app.listen(3000, () => console.log("server up & running"))