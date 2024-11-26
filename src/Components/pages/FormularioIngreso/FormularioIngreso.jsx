import { useState } from "react";

export function FormularioIngreso() {
  const [montoIngreso, setMontoIngreso] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [descipcionIngreso, setDescripcionIngreso] = useState("");
  const [nombreIngreso, setNombreIngreso] = useState("");

  function ProcesarFormulario(evento) {
    evento.preventDefault();
    let datosIngreso = {
      monto: montoIngreso,
      fecha: fechaIngreso,
      decripcion: descipcionIngreso,
      nombre: nombreIngreso,
    };
    console.log(datosIngreso);
  }

  return (
    <>
      <br />
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h3 style={{color: '#7021BF', fontFamily: 'Shantell Sans, cursive'}}>Registro de Ingreso</h3>
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
                    value={montoIngreso}
                    onChange={function (evento) {
                      setMontoIngreso(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Fecha Ingreso: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaIngreso}
                    onChange={function (evento) {
                      setFechaIngreso(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Descripcion: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={descipcionIngreso}
                    onChange={function (evento) {
                      setDescripcionIngreso(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Nombre: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreIngreso}
                    onChange={function (evento) {
                      setNombreIngreso(evento.target.value);
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
