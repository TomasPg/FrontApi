import { useState, useEffect } from "react";
import { registrarUsuario } from "../../../Services/serviciosUsuarios.js";

export function FormularioUsuario() {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [edadUsuario, setEdadUsuario] = useState("");
  const [telefonoUsuario, setTelefonoUsuario] = useState("");
  const [correoUsuario, setCorreoUsuario] = useState("");
  const [contraseñaUsuario, setContraseñaUsuario] = useState("");
  const [fechaUsuario, setFechaUsuario] = useState("");
  const [ciudadUsuario, setCiudadUsuario] = useState("");

  const [formularioEnvado, setFormularioEnvado] = useState(false);
  const [datosFormulario, setDatosFormulario] = useState("");

  //useEffect para controlar llamado al api
  useEffect(
    function () {
      if (formularioEnvado == true) {
        console.log("Voy al back a consumir");
        // console.log(datosFormulario)
        registrarUsuario(datosFormulario)
        .then(function(respuestaBack){
          console.log(respuestaBack)
        })
        setFormularioEnvado(false);
      }
    
    },[formularioEnvado])

function ProcesarFormulario(evento) {
  evento.preventDefault();
  let datosUsuario = {
    nombre: nombreUsuario,
    edad: edadUsuario,
    telefono: telefonoUsuario,
    correo: correoUsuario,
    contraseña: contraseñaUsuario,
    fechaRegistro: fechaUsuario,
    ciudad: ciudadUsuario,
  };
  setDatosFormulario(datosUsuario)
  setFormularioEnvado(true)
}

  

  return (
    <>
      <br />
      <div className="container my-5 usuario">
        <div className="row">
          <div className="col-12">
            <h3 style={{color: '#7021BF',fontFamily: 'Shantell Sans, cursive'}}>Registro de Usuario</h3>
            <form
              className="p-5 form-custom text-custom"
              onSubmit={ProcesarFormulario}
            >
              <div className="row">
                <div className="col-12">
                  <label className="form-label">Nombre: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={nombreUsuario}
                    onChange={function (evento) {
                      setNombreUsuario(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Edad: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={edadUsuario}
                    onChange={function (evento) {
                      setEdadUsuario(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Telefono: </label>
                  <input
                    type="number"
                    className="form-control"
                    value={telefonoUsuario}
                    onChange={function (evento) {
                      setTelefonoUsuario(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Correo: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={correoUsuario}
                    onChange={function (evento) {
                      setCorreoUsuario(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Contraseña: </label>
                  <input
                    type="password"
                    className="form-control"
                    value={contraseñaUsuario}
                    onChange={function (evento) {
                      setContraseñaUsuario(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Fecha Registro: </label>
                  <input
                    type="date"
                    className="form-control"
                    value={fechaUsuario}
                    onChange={function (evento) {
                      setFechaUsuario(evento.target.value);
                    }}
                  />
                </div>
                <div className="col-12 col-md-6">
                  <label className="form-label">Ciudad: </label>
                  <input
                    type="text"
                    className="form-control"
                    value={ciudadUsuario}
                    onChange={function (evento) {
                      setCiudadUsuario(evento.target.value);
                    }}
                  />
                </div>
              </div>
              <button
                type="submit"
                className="btn my-3 w-100 btn-outline-light"
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
