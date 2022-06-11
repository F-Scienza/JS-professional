console.log('///////// interfaces')

console.log('Nos permiten declarar la forma exacta de un objeto,definiendo los tipos de sus propiedades y si son opcionales o no')

enum Color3 {
	Rojo = 'Rojo',
	Verde = 'Verde',
	Celeste = 'Celeste',
}

interface Rectangulo {
    ancho: number,
    alto: number,
    color?: Color3 // el color va a ser opcional
}
// si no pasamos ambas propiedades, la intefaz marcará un error
let rect: Rectangulo = {
    ancho: 10,
    alto: 5,
    color: Color3.Celeste
}
// declaramos una funcion que va a recibir un objeto de tipo Rectacngulo
// definido anteriormente, que sabemos que devuelve algo de tipo Number
// y retornamos el producto del ancho y alto del objeto r recibido por parametro
function areaRecatangulo (r: Rectangulo): number{
    return r.alto * r.ancho
}
const areaRect = areaRecatangulo(rect)

rect.toString = function(){
    return rect.color ? `un rectangulo de color: ${rect.color} y area ${areaRect}`: `un rectangulo de area ${areaRect}.`
}
console.log( rect.toString())