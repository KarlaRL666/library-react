import React, { useReducer, useState, useEffect } from "react";
import { LibrosReducer } from "../reducers/LibrosReducers.js";
import FormularioAdd from "./FormularioAdd";
import TablaLibros from "./TablaLibros";

const init = () => {
    return JSON.parse(localStorage.getItem("libros")) || [];
};

const Libros = () => {
    const [libros, dispatch] = useReducer(LibrosReducer, [], init);
    const [libroEditar, setLibroEditar] = useState(null);

    useEffect(() => {
        localStorage.setItem("libros", JSON.stringify(libros));
    }, [libros]);

    return (
        <div className="container py-4">
            <header className="pb-3 mb-4 border-bottom">
                <h2 className="fw-bold text-dark">Gestor de Catálogo de Libros</h2>
            </header>

            <FormularioAdd
                dispatch={dispatch}
                libroEditar={libroEditar}
                setLibroEditar={setLibroEditar}
            />

            <TablaLibros
                libros={libros}
                dispatch={dispatch}
                setLibroEditar={setLibroEditar}
            />
        </div>
    );
};

export default Libros;