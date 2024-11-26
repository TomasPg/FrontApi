import { Routes, Route } from "react-router-dom"
import { Menu } from "../Components/common/Menu/Menu"
import { Home } from "../Components/pages/Home/Home"
import { Usuarios } from "../Components/pages/Usuarios/Usuarios";
import { Gastos } from "../Components/pages/Gastos/Gasto";
import { Ingresos } from "../Components/pages/Ingresos/Ingresos";
import { Categoria } from "../Components/pages/Categoria/Categoria";
import { ListadoUsuarios } from "../Components/pages/ListadoDeUsuarios/ListadoDeUsuarios";
import { ListadoGastos } from "../Components/pages/ListadoGastos/ListadoGastos";

export function Rutas(){
    return(
    <>
        <Menu></Menu>
        <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/usuarios" element={ <Usuarios /> } />
        <Route path="/listado" element={ <ListadoUsuarios /> } />
        <Route path="/gastos" element={ <Gastos /> } />
        <Route path="/listadoGastos" element={ <ListadoGastos /> } />
        <Route path="/ingresos" element={ <Ingresos /> } />
        <Route path="/categoria" element={ <Categoria /> } />
      </Routes>
    </>
    );
}