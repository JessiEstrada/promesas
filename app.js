//const paises=[ 'México', 'Colombia', 'Argentina', 'Canada']
//Asyn, requiere algo de tiempo la respuesta a mi peticion
//function nuevoPais(pais,callback){ 
//    setTimeout(()=>{
//        paises.push(pais)
//        callback()
//    },3000)
//}
//function mostrarPaises(){
//    setTimeout(()=>paises.forEach(pais=>{console.log(pais)}),2000)
//}
//mostrarPaises()
//nuevoPais('Alemania', mostrarPaises)
//calbackk es la funcion que manda lamar a otra funcion
const paises = []
function nuevoPais(pais, callback) {
    paises.push(pais)
    console.log(`Agregado: ${pais}`)
    callback()
}
function mostrarPaises() {
    console.log(paises)
}
function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoPais('Alemania', mostrarPaises)
        setTimeout(() => {
            nuevoPais('Mexico', mostrarPaises)
            setTimeout(() => {
                nuevoPais('Francia', mostrarPaises)
            }, 3000)
        }, 3000)
    }, 3000)
}
iniciarCallbackHell()