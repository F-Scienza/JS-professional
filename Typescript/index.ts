/*
    Typescript es un lenguaje tipado
        ayuda a prevenir errores de manera temprana

        hay que instalar PARCEL-BUNDLER para que transpile 
        (en lugar de usar liveserver usamo esto)

        modificamos el package.json
        script start parcel
*/
console.log("hello typescript")

function add(a:number, b:number) {
    return a + b
}
const sumados = add (2, 3)

// si ponemos cursor sobre 'sumados' ya sabe que es numero

/////// clase 2 ///////
/* 
    TIPOS BASICOS 
        booleanos => boolean true or false
        numeros => number  1235
        letras => string  "entre comillas"
*/
let muted:boolean = false 
let numero:number = 123
let nombre:string = "Facundo Scienza"

//NUMEROS
let horas:number = 24
let horasPorDia = horas
let horasDeSemana = 7 * horasPorDia
    // si asignamos type number a horas. 
    // lo arrastra durante todo el codigo y se debe respetar
//STRING
let fname: string = 'Facundo'
let saludo= `Me llamo ${fname}`
    // podemos ver que el type de saludo es string

// si asignamos valores que no respeten el tipo de variable
// marca error y no compila

//ARREGLOS

let people:string[] = []
people = ['marta', 'gabriel', 'ruben']
    // people.push(123) no se puede asignar porque es numero ERROR

let peopleAndNumbers: Array < string | number > = []
    // acá si podemos hacer que convivan numeros y palabras
    // con el | (or) RECORDAR que Array es con A mayuscula
peopleAndNumbers.push(23)
peopleAndNumbers.push('Jordan');
console.log(peopleAndNumbers)

//ENUM
enum Color {
    Rojo,
    Verde,
    Celeste
}

let colorFavorito: Color = Color.Celeste
console.log(`Mi color favorito es: ${colorFavorito}`)
    // en este caso nos muestra la posición (empezando en 0)
    // en el deabajo el texto porque fue instanciado
enum Color2 {
	Rojo = 'Rojo',
	Verde = 'Verde',
	Celeste = 'Celeste',
}
let colorFavorito2: Color2 = Color2.Celeste;
console.log(`Mi color favorito es: ${colorFavorito2}`);

// ANY
let comodin: any = 'joker'
comodin = { type:'wildcard' }

// OBJECT
let someObject: object = { type: 'wildcard'}