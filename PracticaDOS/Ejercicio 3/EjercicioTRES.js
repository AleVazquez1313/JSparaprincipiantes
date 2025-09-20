const personas = [
    { nombre: "Ana", edad: 22 },
    { nombre: "Luis", edad: 35 },
    { nombre: "Maria", edad: 28 },
];

const nombreLuis = personas.find(persona => persona.nombre === "Luis")?.nombre;
console.log(nombreLuis); // Aqui debo encontrar a Luis

personas.forEach(persona => {
    console.log(`${persona.nombre} tiene ${persona.edad} años`);
}); //Aqui debo imprimir la persona y su edad 

const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(totalEdades); //Aqui debo sumar sus edades si
