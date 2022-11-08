class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre
        this.apellido = apellido
        this.libros = libros
        this.mascotas = mascotas
    }

    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }

    addMascota(mascota) {
        this.mascotas.push(mascota)
    }

    countMascotas() {
        return this.mascotas.length
    }

    addBook(nombre, autor) {
        this.libros.push({
            nombre,
            autor
        })
    }

    getBookNames() {
        return this.libros.map(libro => libro.nombre)
    }
}

//Crear un objeto
let usuario = new Usuario('Tsue', 'Motosono', [{ nombre: 'It Starts with Us', autor: 'Colleen Hoover' }], ['Nako', 'Momo'])

//Nombre completo
console.log(usuario.getFullName())

//Agregar Mascota y mostrar cantidad de mascotas
console.log(usuario.mascotas)
console.log(`Cantidad Mascotas: ${usuario.countMascotas()}`)
usuario.addMascota('Vicco')
console.log(usuario.mascotas)
console.log(`Cantidad Mascotas: ${usuario.countMascotas()}`)

//Agregar libros al Array
console.log(usuario.libros)
usuario.addBook('Almendra', 'Won-pyung Sohn')
console.log(usuario.libros)

//Obtener Array con nombres de libros
console.log('Nombre de Libros:', usuario.getBookNames())