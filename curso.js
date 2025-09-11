@ -1,32 +1,5 @@
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


