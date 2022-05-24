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


    getById(id){
        let prod = this.productos.filter(prodId => prodId.id === id) 
        console.log(prod);
        return prod
    };

    getAll(){  
        fs.promises.readFile('./archivo.txt', 'utf-8') 
        .then(contenido => {console.log(JSON.parse(contenido));;
            return JSON.parse(contenido)})
        .catch(err => console.log('error: ' + err))
    };

    deleteById(id){ 
        console.log(this.productos); 
        let prod = this.productos.filter(prodId => prodId.id !== id); 
        this.save(prod)
        console.log(prod); 
        return prod
    };
    
    deleteAll(){ fs.promises.unlink('./archivo.txt')};

} 

const primerProducto = {
    title: 'computadora',
    price: 150000,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSChbYprfh5vMzjXe4j--kRQCWLhJEKjZyVEw&usqp=CAU'
};

const segundoProducto = {
    title: 'monitor',
    price: 1000,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmqHwCdolN1uip6LufzhzPq6EfmNX0OpGv--Spm2zDCl7ooRZzEsFjRw7s6BLHycTTcYI&usqp=CAU'
};

const tercerProducto = {
    title: 'mouse',
    price: 500,
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNtgoZQUozhCInA3fDoOoe74Vqzy5Oh49fA&usqp=CAU'
};


const gestor = new Contenedor('Archivo.txt');

( async () => {
    await gestor.save(primerProducto);
    await gestor.save(segundoProducto);
    await gestor.save(tercerProducto);

    await gestor.deleteById(2);
    await gestor.getAll(); 
})();