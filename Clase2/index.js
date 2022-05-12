class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`;
    }

    countMascotas() {
        return this.mascotas.length;
    }

    addMascota(mascota) {
        this.mascotas.push(mascota);
    }

    addBook(nombreLibro, autor) {
        this.libros.push({
            nombreLibro: nombreLibro,
            autor: autor
        });
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombreLibro);
    }
}

const usuario = new Usuario('Rick', 'Sanchez / Dimensión C137', [], []);

console.log(`Nombre de Usuario:`,usuario.getFullName());
usuario.addMascota('Snow Ball');
usuario.addMascota(' Robodrilo');
console.log(`Mascotas que tiene: ${usuario.mascotas}`);
console.log(`Cantidad de Mascotas:`, usuario.countMascotas());
usuario.addBook('Do you wanna develop an app?', 'Intern: Glootie');
usuario.addBook('A Nightmare on scary street', 'Scary Terry');
console.log(`Nombre Libros Favoritos:`, usuario.getBookNames());