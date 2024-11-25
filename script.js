
const urlTienda = "https://fakestoreapi.com/products?limit=10";
console.log(urlTienda);
let contTienda = document.getElementById("cont_product");

async function tienda() {
    try {
        let tienda = await fetch(urlTienda); //cojo la informacion de la url
        let productos = await tienda.json(); // paso la informacion a array
        
        contTienda.textContent = '';

        console.log(productos);

        productos.forEach(producto => {    //el parámetro producto contiene todo el array 
            /////CREO UN DIV PARA METER TODO EL PRODUCTO//////////
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            //CREO IMAGEN//
            const imagen = document.createElement('img');
            imagen.src = producto.image;
            imagen.alt = producto.description;
            //console.log(imagen);

            //////CREO OTRO DIV PARA METER LOS DETALLES///////////
            const detallesProdu = document.createElement("div");
            detallesProdu.classList.add("detalles_producto");

            //detalle h2//
            const titulo = document.createElement("h2");
            titulo.textContent = `Nombre: ${producto.title}`;

            //detalle descripción//
            const des = document.createElement("p");
            des.textContent = `Descripción: ${producto.description}`;

            //detalle precio//
            const precio = document.createElement("p");
            precio.textContent = `Precio: ${producto.price}`;

            //meto cada div como hijo//
            detallesProdu.appendChild(titulo);
            detallesProdu.appendChild(des);
            detallesProdu.appendChild(precio);
            productDiv.appendChild(imagen);
            productDiv.appendChild(detallesProdu);
            contTienda.appendChild(productDiv);

            //console.log(productDiv);
        });

 } catch (error) {
        // Mostrar mensaje de error
        productsDiv.textContent = `Hubo un error al cargar los productos: ${error}`;
    }
}

tienda();