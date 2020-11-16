const http = require('http');
const serveur = http.createServer((req, res) => {
    res.end('Marvy');
    //console.log("CONSOLEEEEEEEEEEEEEE");
});

serveur.listen(3000);