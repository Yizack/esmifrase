const Twit = require('twit');
const fs = require('fs');
const config = require("./config.json");

var T = new Twit(config);

var frases = fs.readFileSync('lista_de_frases.txt').toString().split("\n"); // Leer todas las frases de lista_de_frases.txt
var indice = fs.readFileSync('indice.txt').toString(); // Leer índice de las frases
var MAX_FRASES = 0;
const hora = 12;
const minuto = 0;

for(let i in frases) 
    MAX_FRASES = i;
    
setInterval(tweet, 60000)

function tweet() {
    var datetime = new Date();
    if(hora == datetime.getHours() && minuto == datetime.getMinutes()){
        publicar(frases[indice]);
        console.log(datetime.getHours() + ":" + datetime.getMinutes());
        if(indice == MAX_FRASES)
            indice = 0;
        else
            indice++;
        fs.writeFile('indice.txt', indice, (err) => {  
            if (err) throw err;
            console.log("Siguiente frase, línea: " + (indice + 1)); // Índice de la siguiente frase
        });
    }
}

function publicar(frase){
    T.post('statuses/update', { status: frase }, function(err, data, response) {
        if (!err){
            if(response){
                console.log("Se ha twiteado una frase.")
                console.log(data.text)
            }
        }
        else
            console.log("Ha ocurrido un error: " + err);
    });
}
