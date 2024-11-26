import "./Menu.css";
import { Link } from "react-router-dom";

export function Menu() {
  return (
    <>
      <nav className="navbar navbar-expand-lg menu navbar-dark fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Gestor App
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios">
                  Usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listado">
                  Listado de usuarios
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gastos">
                  Gastos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/listadoGastos">
                  Listado de gastos
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/ingresos">
                  Ingresos
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/categoria">
                  Categoria
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
