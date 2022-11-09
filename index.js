const Contenedor = require('./contenedor.js')

const prod1 = {
    name: "Berry Cheesecake",
    description: "New York-style Cheesecake with Homemade Red Fruit Jam.",
    category: "Vegan",
    price: 3600,
    stock: 5,
    img: "./img/CheeseCake.png"
}

const prod2 = {
    name: "Choco Oreo Cake",
    description: "Layers of Oreo Cookies interspersed with layers of Caramel Sauce and Cream Cheese.",
    category: "Premium",
    price: 4500,
    stock: 6,
    img: "./img/ChocoOreo.png"
}

const prod3 = {
    name: "Chocolate Cake",
    description: "4 floors of the best Chocolate Cake in the world.",
    category: "Premium",
    price: 4300,
    stock: 8,
    img: "./img/Chocotorta.png"
}

async function main() {
    const contenedor = new Contenedor('./products.txt')

    //guarda los 3 productos
    await contenedor.save(prod1)
    await contenedor.save(prod2)
    await contenedor.save(prod3)

    //obtiene todos los productos
    await contenedor.getAll()

    //busca el producto con id=2
    let search1 = await contenedor.getById(2)
    console.log(search1);

    //busca el producto con id=20, no existe
    let search2 = await contenedor.getById(20)
    console.log(search2);

    //elimina el producto con id=2
    await contenedor.deleteById(2)
    let delete1 = await contenedor.getAll()
    console.log(delete1);

    //elimina todos los productos
    /* await contenedor.deleteAll()
    let delete2 = await contenedor.getAll()
    console.log(delete2); */
}

main()