const Twit = require('twit');
const fs = require('fs');
const config = require("./config.json");

var T = new Twit(config);

var frases = fs.readFileSync('lista_de_frases.txt').toString().split("\n"); // Leer todas las frases de lista_de_frases.txt
var indice = parseInt(fs.readFileSync('indice.txt').toString()); // Leer índice de las frases
var MAX_FRASES = 0;
const hora = 12; // Hora que será publicada el tweet
const minuto = 0; // Minuto que será publicado el tweet

for(let i in frases) // Contar la cantidad de frases que hay en lista_de_frases.txt
    MAX_FRASES = i; // Asignar la cantidad todal de frases a MAX_FRASES

setInterval(tweet, 60000); // Verificar cada minuto la hora para publicar un tweet

function tweet() {
    var datetime = new Date(); // Fecha y tiempo actual
    if(hora == datetime.getHours() && minuto == datetime.getMinutes()){ // Si son las 12:00 (formato 24h)
        publicar(frases[indice]); // Publicar frase del índice actual en twitter
        console.log(datetime.getHours() + ":" + datetime.getMinutes()); // Imprimir en consola la hora de publicación
        if(indice == MAX_FRASES) // Si se publica la última frase de la lista
            indice = 0; // Empezar desde el inicio de la lista otra vez
        else // Si no
            indice++; // Sumar +1 al indice
        fs.writeFile('indice.txt', indice, (err) => { // Sobrescribir el número índice de la siguiente frase en el archivo indice.txt para que no se pierda el orden por si se detiene el proceso
            if (err) throw err;
            console.log("Siguiente frase, línea: " + (indice + 1)); // Imprimir la ubicación por línea de la siguiente frase
        });
    }
}

function publicar(frase){
    T.post('statuses/update', { status: frase }, function(err, data, response) { // Publicar una frase en twitter
        if(response)
            console.log("Se ha twitteado una frase.");
        if(err)
            console.log("Ha ocurrido un error: " + err);
    });
}
