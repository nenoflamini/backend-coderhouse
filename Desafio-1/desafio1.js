class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    getFullName() {
        return `Mi nombre es ${this.nombre} y mi apellido ${this.apellido}` 
    }
    addMascota(nombre) {
        const newMascota = nombre
        console.log(newMascota);
        this.mascotas.push(newMascota);
    }
    countMascotas() {
        return this.mascotas.length
    }
    addBook(nombre, autor) {
        const newBook = {nombre : nombre, autor: autor}
        console.log(newBook);
        this.libros.push(newBook)

    }
    getBookNames() {
        return this.libros.map( (libro) => libro.nombre)
    }
}

const usuarioNuevo = new Usuario(
    "Matias",
    "Flamini",
    [{
            nombre: "Cien años de soledad",
            autor: "Gabriel García Márquez"
        },
        {
            nombre: "El señor de los anillos",
            autor: "J. R. R. Tolkien"
        },
        {
            nombre: "Orgullo y prejuicio",
            autor: "Jane Austen"
        },
        {
            nombre: "Don Quijote de la Mancha",
            autor: "Miguel de Cervantes",
        }
    ], ["Cote", "Gringo", "Simba", "Tana"]
)
console.log(usuarioNuevo.getFullName());

usuarioNuevo.addMascota("Morena")

console.log(usuarioNuevo.countMascotas());

usuarioNuevo.addBook("El Principito", "Antoine de Saint-Exupéry")

console.log(usuarioNuevo.getBookNames());