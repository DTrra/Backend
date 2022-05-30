const Contenedor = require ('./script');
const express = require ('express');
const PORT = 8080;
const app = express();

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
const productos = new Contenedor('productos.txt');

const guardar = async() => {
    await productos.save(primerProducto);
    await productos.save(segundoProducto); 
    await productos.save(tercerProducto);
    await productos.getAll();
}  
guardar()



app.get('/productos' , async (req, res) => {

    const mostrarProductos = await JSON.parse(productos.productos); 
    console.log('Ver Productos' + mostrarProductos);
    res.send(mostrarProductos); 


});

app.get('/productosRandom' , async (req, res) => {

    const p = await JSON.parse(productos.productos);   
    console.log('Verificando' + p);
    const numeroRandom = Math.floor(Math.random() * p.length); 
    console.log('numero random ' + p[numeroRandom]);
    res.send(p[numeroRandom]);

});

app.listen (PORT, () => console.log(`Mensaje de prueba en Server numero: ${PORT}`));
