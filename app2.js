const aplicarDescuento=new Promise((resolve,reject)=>{
    const descuento=false
    if (descuento){
        resolve('Descuento aplicado')
    }else{
        reject('Descuento NO aplicado')
    }
})
aplicarDescuento
.then(resultado=>{console.log(resultado)
}).catch(error=>{console.log(error)
})
//finally
console.log(aplicarDescuento)

//calback to promise
const paises=[]
const nuevoPais=pais=>new Promise(resolve=>{
    setTimeout(()=>{
      paises.push(pais)
      resolve(`Agregado: ${pais}`)
    },3000)
})
nuevoPais('Mexico')
.then(resultado=>{
    console.log(resultado)// se agrego el pais mexico
    console.log(paises)//se imprime mexico
    return nuevoPais('EUA') //se ejecuta de nuevo 
})
.then(resultado=>{
    console.log(resultado)// se agrego el pais eua
    console.log(paises)//se imprime mexico eua 
    return nuevoPais('Francia') //se ejecuta de nuevo 
})
.then(resultado=>{
    console.log(resultado)// se agrego francia
    console.log(paises)//se imprime mexico eua francia
})
