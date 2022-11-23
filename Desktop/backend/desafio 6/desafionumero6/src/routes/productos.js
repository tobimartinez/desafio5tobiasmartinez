
import  express  from 'express';
import { Contenedor } from '../contenedor/contenedorFs.js';
const rutaProducto = express.Router(); 

const productos = new Contenedor('../db/productos.txt');

const privilegio = (peticion,respuesta,next) =>{
    const administrador = peticion.headers.administrador;
    if(administrador==="true"){
        next();
    }else {
        respuesta.status(401).send({error : -1, descripcion: `ruta ${peticion.url} no autorizada`})
    }

};




//Endpoints 
rutaProducto.get('/', async (peticion, respuesta) =>{
    const listaProductos = await productos.getAll();
    respuesta.json(listaProductos);
});
rutaProducto.get('/:id', (peticion, respuesta) =>{
    
});
rutaProducto.post('/',privilegio, (peticion, respuesta) =>{
    
});
rutaProducto.put('/:id',privilegio, (peticion, respuesta) =>{
    
});
rutaProducto.delete('/:id',privilegio, (peticion, respuesta) =>{
    
});

export { rutaProducto };

