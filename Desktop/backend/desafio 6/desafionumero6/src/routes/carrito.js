
import  express  from 'express';
import { Contenedor } from '../contenedor/contenedorFs.js';
const rutaCarrito = express.Router();

const carritos = new Contenedor('../db/carrito.txt');
const productos = new Contenedor('../db/productos.txt');

//Endpoints 
rutaCarrito.get('/', async (peticion, respuesta) =>{
    const listaCarrito = await carritos.getAll();
    respuesta.json(listaCarrito);
});
rutaCarrito.post('/', (peticion, respuesta) =>{
    
});

rutaCarrito.delete('/:id', async (peticion, respuesta) =>{
    const idCarrito= peticion.params.id;
    await carritos.deleteById(idCarrito);
    respuesta.json({
        status:'ok'
    });
});

rutaCarrito.get('/:id/productos', (peticion, respuesta) =>{
    
});

rutaCarrito.post('/:id/productos', (peticion, respuesta) =>{
    
});

rutaCarrito.delete('/:id/productos/:id_prod', (peticion, respuesta) =>{
    
});
export { rutaCarrito };

