const express = require('express');
const app = express();
const exphbs = require('express-handlebars');
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor inicializado escuchando en puerto ${port}`)
});

app.engine("handlebars", exphbs.engine({
    layoutsDir: __dirname + "/views",
    partialsDir: __dirname + "/views/partials",
}));

app.set("view engine", "handlebars");

app.use(express.static("assets"));

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));

let opaco = ""

app.use("/js", express.static(__dirname + "/node_modules/jquery/jquery.js"));

app.get("/", (req, res) => {
    res.render("main", {
        layout: "main",
        producto: [
            "Banana",
            "Cebollas",
            "Lechuga",
            "Papas",
            "Pimenton",
            "Tomate",
        ]
    })
});

let productos = []