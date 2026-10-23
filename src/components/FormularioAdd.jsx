import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

const FormularioAdd = ({dispatch, libroEditar, setLibroEditar }) => {
  const initialForm = {
    titulo: "",
    autor: "",
    genero: "",
    precio: 0.0,
    descuento: 0.0,
    stock: 0,
    portada: "",
    sinopsis: "",
  };

    const [data, setData] = useState(initialForm);
    const { titulo, autor, genero, precio, descuento, stock, portada, sinopsis } = data;

    useEffect(() => {
      if (libroEditar) {
        setData(libroEditar);
      } else {
        setData(initialForm);
      }
    }, [libroEditar]);
    const handleChange = (e) => {
    const { name, value, type } = e.target;
    setData({
      ...data,
      [name]: type === "number" ? parseFloat(value) || 0 : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titulo.trim() || !autor.trim()) return;

    if (libroEditar) {
      dispatch({
        type: "update",
        payload: data,
      });
      setLibroEditar(null);
    } else {
      dispatch({
        type: "add",
        payload: {
          ...data,
          id: uuid(),
        },
      });
    }

    setData(initialForm);
  };

  return (
    <div className="card shadow-sm border-0 my-4">
      <div className={`card-header text-white py-3 ${libroEditar ? "bg-warning text-dark" : "bg-primary"}`}>
        <h5 className="card-title mb-0 fw-bold">
          {libroEditar ? "Editar Libro" : "Registrar Nuevo Libro"}
        </h5>
      </div>

      <div className="card-body p-4">
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label fw-semibold">Título</label>
              <input
                type="text"
                name="titulo"
                value={titulo}
                onChange={handleChange}
                placeholder="Ej. Cien años de soledad"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Autor</label>
              <input
                type="text"
                name="autor"
                value={autor}
                onChange={handleChange}
                placeholder="Ej. Gabriel García Márquez"
                className="form-control"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Género</label>
              <select
                name="genero"
                value={genero}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Selecciona un género...</option>
                <option value="Novela">Novela</option>
                <option value="Ciencia Ficción">Ciencia Ficción</option>
                <option value="Fantasía">Fantasía</option>
                <option value="Historia">Historia</option>
                <option value="Biografía">Biografía</option>
                <option value="Terror">Terror</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Precio ($)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                name="precio"
                value={precio}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Descuento (%)</label>
              <input
                type="number"
                step="0.01"
                min="0"
                max="100"
                name="descuento"
                value={descuento}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="col-md-4">
              <label className="form-label fw-semibold">Stock</label>
              <input
                type="number"
                min="0"
                name="stock"
                value={stock}
                onChange={handleChange}
                className="form-control"
                required
              />
            </div>

            <div className="col-md-8">
              <label className="form-label fw-semibold">URL de Portada</label>
              <input
                type="url"
                name="portada"
                value={portada}
                onChange={handleChange}
                placeholder="https://ejemplo.com/portada.jpg"
                className="form-control"
              />
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Sinopsis</label>
              <textarea
                name="sinopsis"
                value={sinopsis}
                onChange={handleChange}
                rows="3"
                placeholder="Breve resumen del libro..."
                className="form-control"
              ></textarea>
            </div>

            <div className="col-12 d-flex justify-content-end gap-2 mt-4">
              {libroEditar && (
                <button
                  type="button"
                  className="btn btn-secondary px-3"
                  onClick={() => setLibroEditar(null)}
                >
                  Cancelar
                </button>
              )}
              <button
                type="submit"
                className={`btn px-4 ${libroEditar ? "btn-warning" : "btn-primary"}`}
              >
                {libroEditar ? "Guardar Cambios" : "Agregar Libro"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormularioAdd;