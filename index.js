import bodyParser from "body-parser"
import express from "express"

const app = express()
const port = 3000

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
 res.render("index.ejs")
})

app.post("/submit", (req, res) =>{

    const resposta = req.body["resposta"]
       console.log(resposta)
    res.render("index.ejs", {responstaUser: resposta})
})

app.listen(port, () => {
    console.log(`Servidor logado na porta ${port}`)
})