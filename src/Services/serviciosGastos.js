import { Await } from "react-router-dom"

export async function registrarGasto(datosGasto){
    const URL ='http://localhost:8000/Gastos'
let peticion={
    method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(datosGasto)
    }
    let respuestaInicial=await fetch(URL, peticion)
    let gastos=await respuestaInicial.json()
    console.log(datosGasto)

    return gastos
}

export async function buscarGasto(){

    const URL ='http://localhost:8000/Gastos'

    let peticion={
        method:"GET"
    }

    let respuestaInicial=await fetch(URL, peticion)
    let gastos=await respuestaInicial.json()

    return gastos

}
