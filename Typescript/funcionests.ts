// funciones en typescript
console.log(' Funciones en typescript')

function suma(a:number, b:number):number{
    return a+b
}
suma(4,5) 
// vscode te avisa que tipo parametros necesita la funcion
function createAdder (a:number){
    return function(b:number){
        return b+a
    }
}
const addFour = createAdder(4)
const fourPlus6 = addFour(6)
// la funcion create adder retorna una funcion 
// y fourplus le suma el otro parametro

function fullname(fname: string, lname: string):string{
    return `${fname} ${lname}`
}
const facu = fullname('facundo', 'scienza')
console.log(facu)
// esta funcion pide estrictamente que tenga los dos parametros
// pero en caso que querramos uno opcional, seria de la siguiente
// manera (devuelve undefined)        👇🏼
function fullname2(fname:string, lname?:string):string{
    return `${fname} ${lname}`
}
const cufa = fullname2('cufa')
console.log(cufa)
// la funcion no devuelve error porque lname no es obligatorio
// pero devuelve lname como undefined
// y si quisieramos valor por defecto
function fullname3(fname:string, lname:string = 'scienza'){
    return `${fname} ${lname}`
}
const cufita = fullname3('cufita')
console.log(cufita)
// por defecto asigna Scienza a lname