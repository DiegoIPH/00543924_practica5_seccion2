const carrito = {
    productos: [{
        nombre: 'papel higienico',
        unidades: 4,
        precio: 5,
    },
    {
        nombre: 'chocolate',
        unidades: 2,
        precio: 1.5
    }],
    get precioTotal(){
        let precio = 0;
        for (let i = 0; i < this.productos.length; i++){
            precio += this.productos[i].unidades * this.productos[i].precio;
        }
        return precio;
    }
};

const lista = document.getElementById("lista-productos");
const total = document.getElementById("total");

carrito.productos.forEach(p => {
    const li = document.createElement("li");
    li.textContent = `${p.unidades} x ${p.nombre} ($${p.precio} cada uno)`;
    lista.appendChild(li);
});

total.textContent = `Total: $${carrito.precioTotal}`;