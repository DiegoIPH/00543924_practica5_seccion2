const estanteria = {
    Libros:[{
        nombre: 'El caballero oscuro',
        autor: 'Frank Miller',
        leido: false
    },
    {
        nombre: 'Harry Potter y el caliz de fuego',
        autor: 'J.K. Rowling',
        leido: false,
    },
    {
        nombre: 'El ingenioso hidalgo Don Quijote de la Mancha',
        autor: 'Miguel de Cervantes', 
        leido: false
    },
    {
        nombre: 'Berserk',
        autor: 'Kentaro Miura',
        leido: true
    },
    {
        nombre: 'Iliada',
        autor: 'Homero',
        leido: false
    }],
    log() {
        const { Libros } = this; 
        let resultado = ''
        for (const libro of Libros) { 
            const prefijo = libro.leido ? 'Ya has' : 'Aun no has';
            resultado = `${resultado}\n${prefijo} leído ${libro.nombre} de ${libro.autor}`
        }
        console.log(resultado)
    },

    sugerencia() {
        const librosNoLeidos = this.Libros.filter(libro => !libro.leido)
        const indiceRandom = Math.floor(librosNoLeidos.length * Math.random())
        const elementoRandom = librosNoLeidos[indiceRandom]
        console.log(`Te sugiero ${elementoRandom.nombre} de ${elementoRandom.autor}`)
    }
}

estanteria.log(); 
estanteria.sugerencia();