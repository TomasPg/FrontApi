import { useState, useEffect } from "react";
import { buscarGasto } from "../../../Services/serviciosGastos";
export function ListadoGastos(){

    let gastos=[

    ]


    const[datosAPI, setDatosApi]=useState(null)
    const[estadoCarga, setEstadoCarga]=useState(true)

    useEffect(function(){
        buscarGasto()
        .then(function(respuestaBack){
            //console.log(respuestaBack)
            setDatosApi(respuestaBack)
            setEstadoCarga(false)
        })
    },[])

    if(estadoCarga==true){
        return(
        <>
            <h3>Permanezca con nosotros</h3>
        </>
        )
    }
    else{
        return(
            <>
            <br /> <br /> <br />
            <h3>LISTADO DE GASTOS</h3>
    
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-3">
                {
                //Renderizando un arreglo de objetos
                datosAPI.map(function(gastos){
                    return(
                        <div className="col">
                            <div className="card h-100 shadow p-5">
                                <h5>{gastos.monto}</h5>
                                <h4>Fecha: {gastos.fecha}</h4>
                                <h4>Descripcion: {gastos.descripcion}</h4>
                            </div>
                        </div>
                    )
                })
            }
                </div>
            </div>
            </>
        )
    }

}

