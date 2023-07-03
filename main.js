let miNombre = "Priscila"
let miApellido = "Araujo" 
let miEdad = 24
let miMascota = "Astro"
let edadMascota = 5

console.log(miNombre)
console.log(miApellido);
console.log(miEdad);
console.log(miMascota);
console.log(edadMascota);

let nombreCompleto = `${miNombre} ${miApellido}`
console.log(nombreCompleto);

let textoPresentacion = `Hola mi nombre es ${miNombre} y mi apellido es ${miApellido}, tengo ${miEdad} años. Mi mascota se llama ${miMascota} y su edad es de ${edadMascota} años`
console.log(textoPresentacion);

let sumaEdades = miEdad + edadMascota
console.log(sumaEdades);

let restaEdades = miEdad - edadMascota
console.log(restaEdades);

let productoEdades = miEdad * edadMascota
console.log(productoEdades);

let divisionEdades = miEdad / edadMascota
console.log(divisionEdades);

let alumno = {
    nombre: "priscila",
    apellido: "araujo",
    edad: 24 ,
    conocimientojs: "ninguno",
    mascota: {
        nombre: "astro",
        tipo: "perro"
    }
}
console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.conocimientojs)
console.log(alumno.mascota)

let mascota = {
    nombre: "astro",
    edad: 5,
    tipo: "perro",
    raza: "mestizo",
    color: "negro con pelitos grises"
}
console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.tipo)
console.log(mascota.raza)
console.log(mascota.color)

let frutas = ["manzana", "banana", "naranja","mandarina","frutilla"]
console.table(frutas)

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let numeros = [ 2, 4 , 6, 8, 10]
console.table(numeros)
console.log(numeros)
console.log(numeros[0]) 
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = ["abuela", "prima", "mama","tia","hermana"]
console.table(familia)
console.log(familia)
console.log(familia[0])
console.log(familia[1])
console.log(familia[2])
console.log(familia[3])
console.log(familia[4])
let textoAleatorio = `A mi ${familia[4]} le encanta hacerse licuados de ${frutas[1]} por lo tanto usa ${numeros[3]} por semana`
console.log(textoAleatorio);

const edad1 = prompt("ingrese su edad")
const edad2 = prompt("ingrese edad de su compañero")
const edadesIguales = (edad1 === edad2)
console.log(`mi edad es igual a la del compañero ${edadesIguales}`);
const soyMayor = (edad1 > edad2)
console.log(`mi edad es mayor que la del compañero ${soyMayor}`);
const soyMenor = (edad1 < edad2)
console.log(`mi edad es menor que la del compañero ${soyMenor}`);

// ejercicio 18
const edadUsuario = prompt("ingrese su edad")
const altura = prompt("ingrese su altura")
let puedeSubir = (edadUsuario == 6 && altura >= 120)
console.log(`Puede subir a la atraccion con su edad: ${edadUsuario}`)

// ejercicio 19
const pase = prompt("ingrese su tipo de pase")
const saldo = prompt("ingrese su saldo")
const vip = (pase == 'vip')
const normal = (pase == 'normal')
const limitado = (pase == 'limitado')
const puedePasar = (vip || saldo > 1000)
console.log(`puede pasar ${puedePasar}`);