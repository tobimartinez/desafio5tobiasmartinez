
let nombre="";
let nombreProducto="";
let consultaMenu ;
let seguimientoCompra="";
let sumatotal= 0;
function saludar(){
    alert(
        "Bienvenidos a metropizza macarenna " +  nombre +
        "                                            Te dejamos a continuacion las siguientes opciones"
    );
    
}
function comprarProducto(){
    if(opcion === "1"){
        alert("usted eligio la Opcion numero 1 (Menu)");
    }else if(opcion === "2"){
        alert("elegiste Opcion numero 2 (Seguir pedido)");
    }else if(opcion === "3"){
        alert("usted eligio la Opcion numero 3 (Salir)");
    }
}
function compra(){
    let text = "";
    for (let i in productos) {
        text += productos[i].nombre + ",  " + productos[i].precio + " ";
    }
    alert(text);
    opcion = prompt("ingrese una opcion \n 2: Compra \n 3: Salir");
}
const productos=[
    {id:1 ,nombre:"Pizza muzarella", precio: 1000},
    {id:2 ,nombre:"Pizza fugazzetta", precio: 1400},
    {id:3 ,nombre:"Pizza palmito", precio: 1300},
    {id:4 ,nombre:"Pizza morron y jamon", precio: 1800},
    {id:5 ,nombre:"Docena de empandas", precio: 1900},
    {id:6 ,nombre:"Media docena de empandas", precio: 700}
]

function compra2(){
    const nombresArray= productos.map((el)=> " "+ el.id + " " + el.nombre)
    alert(nombresArray);
    while(seguimientoCompra.toUpperCase()!="ESC"){
    seguimientoCompra=(prompt("ingresar ID  (ESC PARA TERMINAR)"));
    seguimientoCompra.toUpperCase();
    for(let i in productos){
        if(seguimientoCompra==productos[i].id){
             sumatotal += productos[i].precio
        }
    }
    alert("Su precio de compra es " + " $ " + sumatotal);
    }
}
nombre=prompt("Ingrese su nombre");
alert("El nombre que ingresaste fue: " + nombre);
saludar();
let opcion=prompt("elegi una de las siguientes opciones \n 1:Menu   \n 2: Compra  \n 3: Salir");
while( opcion !=="3"){
    if( opcion === "1"){
        comprarProducto();
        compra();
    }
    else if( opcion ==="2"){
        compra2();
        opcion="3";
    }
     else if( opcion ==="3"){
    }
}



alert("gracias por su compra!");