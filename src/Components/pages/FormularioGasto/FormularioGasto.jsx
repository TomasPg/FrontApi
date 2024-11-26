import { useState,useEffect } from "react";
import { registrarGasto } from "../../../Services/serviciosGastos.js";

  export function FormularioGasto() {
  const [montoGasto, setMontoGasto] = useState("");
  const [fechaGasto, setFechaGasto] = useState("");
  const [descipcionGasto, setDescripcionGasto] = useState("");
  const [nombreGasto, setNombreGasto] = useState("");

  const [formularioEnvado, setFormularioEnvado] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState("");

  useEffect(
    function () {
      if (formularioEnvado == true) {
        console.log("Voy al back a consumir");
        // console.log(datosFormulario)
        registrarGasto(datosFormulario)
        .then(function(respuestaBack){
          console.log(respuestaBack)
        })
        setFormularioEnvado(false);
      }
    
    },[formularioEnvado])


  function ProcesarFormulario(evento) {
    evento.preventDefault();
    let datosGasto = {
      monto: montoGasto,
      fecha: fechaGasto,
      descripcion: descipcionGasto,
      nombre: nombreGasto,
    };
    setDatosFormulario(datosGasto)
  setFormularioEnvado(true)
  }

  return (
    <>
      <br />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3 style={{color: '#7021BF', fontFamily: 'Shantell Sans, cursive'}}>Registro de Gasto</h3>
            <form
              className="p-5 form-custom text-custom"
              onSubmit={ProcesarFormulario}
            >
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Monto: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={montoGasto}
                    onChange={function (evento) {
                      setMontoGasto(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Fecha Gasto: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaGasto}
                    onChange={function (evento) {
                      setFechaGasto(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Descripcion: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={descipcionGasto}
                    onChange={function (evento) {
                      setDescripcionGasto(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Nombre: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreGasto}
                    onChange={function (evento) {
                      setNombreGasto(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-outline-light my-3 w-100"
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
