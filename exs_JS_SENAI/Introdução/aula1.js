//Soma???
console.log("10.5" / 2)

//Concatena????
console.log("10" + 2)

//Inprecisão???
console.log(0.7 + 0.1)

var nome = 'Giovanni'
var idade = 16
//Const = Constante
const SobreNome = 'Nespoli'

//Let
if(true)
{
    var Sair = 'Roupa de sair'
}
console.log(Sair)

if(true)
{
    let Sair = 'Pijama'
}
console.log(Sair)

//Hoisting
console.log(F1)
var F1 = "McLaren"

console.log(F1)
var F1 = "McLaren"
console.log(F1)

var F1 = "McLaren"
console.log(F1)

//AULA 2

//THIS
console.log(this.document === document)

this.a = 30
console.log(this.a)


//Arrow Functions

var a = 10
let dobro1 = function (a)
{
    return 2 * a
}


var a = 10
dobro2 = (a) =>
{
    return 2 * a
}

var a = 10
dobro3 = (a) => 2 * a

var a = 10
dobro4 = a => 2* a

//ARRAY

var array = ['GM','Wolks','Dodge']
console.log(array.length)

var primeiro = array[0]
console.log(primeiro)

var ultimo = array[array.length - 1]
console.log(ultimo)
