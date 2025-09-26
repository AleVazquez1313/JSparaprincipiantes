function simularPeticionAPI () {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Datos recibidos correctamente');
        }, 5000);
    });
}


async function obtenerDatos () {
    console.log('Cargando...');
    const datos = await simularPeticionAPI();
    console.log(datos);
    console.log('Petición finalizada.');
}

obtenerDatos();
