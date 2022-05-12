let nombre = "pepe";
let edad = 25;
let precio = 1500.50;
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];
let peliculasFavoritas = [
    {
        nombre: 'El lobo de wall street',
        estreno: 2009,
        protagonistas: ["Leonardo Di Caprio", "Margot Robbie"]
    },
    {
        nombre: 'Duro de matar',
        estreno: 1988,
        protagonistas: ["Bruce Willis", "Señor Bruce Willis"]
    }
];

console.log(`Nombre de la variable: ${nombre}`);
console.log(`La edad de la variable es: ${edad}`);
console.log(`Precio: $${precio.toFixed(2)}`);
console.log(`Mis series favoritas son: ${seriesFavoritas}`);
console.log(`SOLO UNA PELICULA: ${peliculasFavoritas[0]}`);
//OPCION 1
console.log("OPCION 1");
for (let i = 0; i < peliculasFavoritas.length; i++) {
    console.log(peliculasFavoritas)
}
//OPCION 2
console.log("OPCION 2");
for (const elementos in peliculasFavoritas) {
    console.log(elementos);
}
//OPCION 3
console.log("OPCION 3");
console.log(JSON.stringify(peliculasFavoritas, null, 2));
console.log(`mi nueva edad es: ${edad + 1}`);

edad = edad + 1;

edad += 1;
console.log(`mi nueva edad es: ${edad}`);

edad++                   // esta es la manera mas comun de sumar 1
console.log(`mi nueva edad es: ${edad}`);

++edad
console.log(`mi nueva edad es: ${edad}`);

const nuevasSeries = ["peaky blinders", "How I meet your mother"];
seriesFavoritas.push("Friends");
seriesFavoritas.push(nuevasSeries)

console.log(`Esta es mi lista actualizada de series favoritas: ${seriesFavoritas}`);