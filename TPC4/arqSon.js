const http = require('http');
const fs = require('fs').promises;

const db = "data/doc";

var server = http.createServer((req, res) => {
    console.log("Pedido realizado com sucesso!");

    if (req.url.split('/')[1] === "css") {
        console.log(req.url.split('/')[2]);
        fs.readFile(req.url.split('/')[2]).then(res.end.bind(res));
    }
    if (req.url.split('/')[1] === "musica" && req.method === "GET") {
        if(req.url.split('/')[2] == "doc2html.xsl") 
            fs.readFile(req.url.split('/')[2], "utf8").then(res.end.bind(res)).catch(console.log);
        else 
            fs.readFile(db + req.url.split('/')[2] + ".xml", "utf8").then(res.end.bind(res)).catch(console.log);
    }

})

server.listen(4444);