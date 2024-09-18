// Datos de las categorías y subcategorías
const catalogo = [
    {
        nombre: 'Bienestar',
        subcategorias: ['Salud mental', 'Fitness', 'Nutrición']
    },
    {
        nombre: 'Aseo',
        subcategorias: ['Cuidado personal', 'Higiene corporal', 'Productos de limpieza']
    },
    {
        nombre: 'Hogar',
        subcategorias: ['Mobiliario', 'Decoración', 'Electrodomésticos']
    },
    {
        nombre: 'Mascotas',
        subcategorias: ['Alimentación', 'Cuidado e higiene', 'Accesorios']
    }
];

// Función para mostrar todas las categorías
function mostrarCategorias() {
    console.log('Categorías disponibles:');
    for (let i = 0; i < catalogo.length; i++) {
        console.log(`${i + 1}. ${catalogo[i].nombre}`);
    }
}

// Función para mostrar las subcategorías según la categoría seleccionada
function mostrarSubcategorias(indice) {
    switch (indice) {
        case 1:
            console.log(`Subcategorías de ${catalogo[0].nombre}:`);
            for (let i = 0; i < catalogo[0].subcategorias.length; i++) {
                console.log(` - ${catalogo[0].subcategorias[i]}`);
            }
            break;
        case 2:
            console.log(`Subcategorías de ${catalogo[1].nombre}:`);
            for (let i = 0; i < catalogo[1].subcategorias.length; i++) {
                console.log(` - ${catalogo[1].subcategorias[i]}`);
            }
            break;
        case 3:
            console.log(`Subcategorías de ${catalogo[2].nombre}:`);
            for (let i = 0; i < catalogo[2].subcategorias.length; i++) {
                console.log(` - ${catalogo[2].subcategorias[i]}`);
            }
            break;
        case 4:
            console.log(`Subcategorías de ${catalogo[3].nombre}:`);
            for (let i = 0; i < catalogo[3].subcategorias.length; i++) {
                console.log(` - ${catalogo[3].subcategorias[i]}`);
            }
            break;
        default:
            console.log('Categoría no encontrada.');
            break;
    }
}

// Mostrar las categorías disponibles
mostrarCategorias();

// Pedir al usuario que seleccione una categoría
const seleccion = parseInt(prompt("Elige una categoría \n 1. Bienestar \n 2. Aseo \n 3. Hogar \n 4. Mascotas:"), 10);

// Mostrar subcategorías de la categoría seleccionada
mostrarSubcategorias(seleccion);

