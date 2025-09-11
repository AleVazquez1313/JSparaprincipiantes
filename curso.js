//Vamos a hacer unas cuantas cosas vistas en el video 

//Tipos de datos
"Hola Vane" //Hacemos uso de string
'Hola Vane' // Hacemos uso de comillas simples, de igual forma STRING

10 //Numero entero INT
-2.3 //INT

true //boll (verdadero o falso)
false //boll  (verdadero o falso)

['Vany','Marquito', 'Vane'] // Array (Lista de strings)
[1,2,3] //Array de enteros
[true,false,true,false] //array de bool

// es para crear un objto, lo que viene basicamente es la informacion
'Vane' //nombre
70.7 //puntos
14 //horas jugadas
true //si es profesional

{
    'username": 'Vane', //Para un obejeto se necesitan nombres clave y se ponen en dobles comilla, un objeto tiene pares,clave y valor
    "score": '70.7',
    "hours": 14,
    "profesional": true

}
//Operadores
let x = 15;
let y = 6;

console.log("Suma:", x + y); //suma
console.log("Resta:", x - y);//resta
console.log("Producto:", x * y); //multiplicacion
console.log("Cociente:", x / y); //division
console.log("Residuo:", x % y); //residuo

console.log("x > y:", x > y); //mayor que
console.log("x === y:", x === y); //igualdad estricta

console.log("x > 10 && y < 10:", x > 10 && y < 10); //AND
console.log("x < 10 || y === 6:", x < 10 || y === 6); //OR

//Condicionales if
let nota = 65; //definimos una variable nota

if (nota >= 90) {  //si la nota es mayor o igual a 90
    console.log("Sobresaliente"); //imprime sobresaliente
} else if (nota >= 70) { //si la nota es mayor o igual a 70
    console.log("Aprobado"); //imprime aprobado
} else { // si no
    console.log("Reprobado"); //imprime reprobado
}

//Bucle con for 
for (let i = 0; i < 4; i++) { //inicia en 0, mientras i sea menor que 4, incrementa i en 1
    console.log("Iteración:", i); //imprime la iteracion
}

// Bucle con while
let contador = 3; //inicia en 3
while (contador > 0) { //mientras contador sea mayor que 0
    console.log("Cuenta regresiva:", contador); //imprime la cuenta regresiva
    contador--; //decrementa contador en 1
}

let animales = ["Perro", "Gato", "Loro"]; //array de animales
for (let animal of animales) { //para cada animal en animales
    console.log("Animal:", animal); //imprime el animal
}
 //funciones
function despedir(nombre) { //definimos una funcion llamada despedir que recibe un parametro nombre
    return "Adiós " + nombre; //retorna adios y el nombre
}
console.log(despedir("Vanecha")); //llamamos a la funcion despedir con el parametro Vanecha

const dividir = (a, b) => a / b; //funcion flecha que divide a entre b
console.log("12 / 3 =", dividir(12, 3)); //llamamos a la funcion dividir con los parametros 12 y 3

// Array (Listas)
let comidas = ["Pizza", "Tacos", "Hamburguesa"]; //definimos un array de comidas
console.log("Primera comida:", comidas[0]); //imprime la primera comida
for (let i = 0; i < comidas.length; i++) { //bucle for que recorre el array de comidas
    console.log("Ítem:", comidas[i]); //imprime cada comida
}
comidas.push("Sushi"); //agrega sushi al final del array
console.log("Comidas:", comidas); //imprime el array de comidas

//Objetos
let coche = { //definimos un objeto coche
    marca: "Toyota", //clave marca con valor Toyota
    modelo: "Corolla", //clave modelo con valor Corolla
    anio: 2020 //Este es su ano 
};

console.log("Marca:", coche.marca); //imprime la marca del coche
console.log("Modelo:", coche["modelo"]); //imprime el modelo del coche

coche.color = "Rojo"; //agrega una nueva clave color con valor Rojo
console.log("Coche completo:", coche); //imprime el objeto coche completo

