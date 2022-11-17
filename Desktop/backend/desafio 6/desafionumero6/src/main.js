const express = require('express');
const aplicacion = express();
const moment = require('moment');

const {Server: HttpServer} = require('http');
const {Server: IOServer} = require('socket.io');
const Contenedor = require('./contenedor/contenedorMemoria');

const port = 8080;
const publicRoot = "./public";

aplicacion.use(express.json());
aplicacion.use(express.urlencoded({extended:true}));

const httpServer = new HttpServer(aplicacion);
const io = new IOServer(httpServer);



aplicacion.use(express.static(publicRoot))




const productos = new Contenedor([
    {
        "title": "Gaseosa",
        "price": 400,
        "img":".",
        "id": 1
    },
    {
        "title": "papas fritas",
        "price": 500,
        "img":".",
        "id": 2
    },
    {
        "title": "Hamburguesa",
        "price": 400,
        "img":".",
        "id": 3
    }
]);

const messages = [
    {email:"juan@gmail.com",text:"Hola Todo?",time:moment(new Date()).format('DD/MM/YYYY hh:mm:ss')},
    {email:"pedro@gmail.com",text:"Hola Todo?",time:moment(new Date()).format('DD/MM/YYYY hh:mm:ss')},
    {email:"ana@gmail.com",text:"Hola Todo?",time:moment(new Date()).format('DD/MM/YYYY hh:mm:ss')}
];

//Endpoints 

aplicacion.get('/', (peticion, respuesta) =>{
    respuesta.send('index.html',{root:publicRoot});
});


const servidor = httpServer.listen(port,() =>{
    console.log(`Servidor escuchando: ${servidor.address().port}`);
});

servidor.on('error', error => console.log(`Error: ${error}`));


io.on('connection',(socket)=>{
    console.log('Nuevo cliente conectado');

    const listaProductos = productos.getAll();
    socket.emit('nueva-conexion',listaProductos);

    socket.on("new-product",(data)=>{
        productos.save(data);
        io.sockets.emit('producto',data);
    })

    socket.emit('messages',messages);

    socket.on('new-message',data =>{
        data.time=moment(new Date()).format('DD/MM/YYYY hh:mm:ss');
        messages.push(data);
        io.sockets.emit('messages',messages )
    })
})

