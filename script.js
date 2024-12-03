
const urlTienda = "https://fakestoreapi.com/products?limit=10";
console.log(urlTienda);
let contTienda = document.getElementById("cont_product");


async function tienda() {
    try {
        let tienda = await fetch(urlTienda);
        let productos = await tienda.json();
        contTienda.textContent = '';

        console.log(productos);

        productos.forEach(producto => {

            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const imagen = document.createElement('img');
            imagen.src = producto.image;
            imagen.alt = producto.description;

            const detallesProdu = document.createElement("div");
            detallesProdu.classList.add("detalles_producto");

            const categoria = document.createElement("h2");
            categoria.textContent = `Catgoría: ${producto.category}`;

            const des = document.createElement("p");
            des.textContent = `Descripción: ${producto.description}`;

            const id = document.createElement("p");
            id.textContent = `Code: ${producto.id}`;

            const precio = document.createElement("p");
            precio.textContent = `Precio: ${producto.price}`;

            const titulo = document.createElement("h3");
            titulo.textContent = `Nombre: ${producto.title}`;

            detallesProdu.appendChild(categoria);
            detallesProdu.appendChild(des);
            detallesProdu.appendChild(id);
            detallesProdu.appendChild(titulo);
            detallesProdu.appendChild(precio);
            productDiv.appendChild(imagen);
            productDiv.appendChild(detallesProdu);
            contTienda.appendChild(productDiv);

        });

    } catch (error) {

        productsDiv.textContent = `Hubo un error al cargar los productos: ${error}`;
    }
}

tienda();

