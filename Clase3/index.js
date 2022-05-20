const fs = require('fs');

class Contenedor {

    static id = 0;
    productos = [];

    constructor(fileName) {
        this.fileName = fileName;

        if (fs.existsSync(this.fileName)) { 
            
                fs.readFile(this.fileName, (err, file) => {

                    this.productos = JSON.parse(file);
                    if (err) {
                        return "Error";
                    }

                    Contenedor.id = this.productos.length;
                    console.log(Contenedor.id);
                });
        }
    };

    save(producto) {
        Contenedor.id++;
        producto.id = Contenedor.id;

        this.productos.push(producto);
        fs.promises.writeFile( this.fileName, JSON.stringify(this.productos, null, 2) );
        return Contenedor.id;
    };


    // getById();
    // getAll();
    // deleteById();
    // deleteAll();
}


const primerProducto = {
    title: 'computadora',
    price: 150000,
    thumbnail: '(url de la foto del producto)'
};

const segundoProducto = {
    title: 'monitor',
    price: 1000,
    thumbnail: '(url de la foto del producto)'
};


const gestor = new Contenedor('Archivo.txt');

( async () => {
    await gestor.save(primerProducto);
    await gestor.save(segundoProducto);

})()

gestor.save(segundoProducto);