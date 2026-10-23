import React from "react";

const TablaLibros = ({ libros, dispatch, setLibroEditar }) => {
  const handleDelete = (id) => {
    dispatch({
      type: "delete",
      payload: id,
    });
  };

  return (
    <div className="card shadow-sm border-0 mb-5">
      <div className="card-header bg-dark text-white py-3">
        <h5 className="card-title mb-0 fw-bold">Catálogo de Libros ({libros.length})</h5>
      </div>
      <div className="card-body p-0">
        <div className="table-responsive">
          <table className="table table-hover align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col" style={{ width: "80px" }}>Portada</th>
                <th scope="col">Título</th>
                <th scope="col">Autor</th>
                <th scope="col">Género</th>
                <th scope="col">Precio</th>
                <th scope="col">Stock</th>
                <th scope="col" className="text-center" style={{ width: "160px" }}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {libros.length === 0 ? (
                <tr>
                  <td colSpan="7" className="text-center py-4 text-muted">
                    No hay libros registrados en el inventario.
                  </td>
                </tr>
              ) : (
                libros.map((libro) => (
                  <tr key={libro.id}>
                    <td>
                      {libro.portada ? (
                        <img
                          src={libro.portada}
                          alt={libro.titulo}
                          className="rounded object-fit-cover shadow-sm"
                          style={{ width: "48px", height: "64px" }}
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "https://via.placeholder.com/48x64?text=N/A";
                          }}
                        />
                      ) : (
                        <div
                          className="bg-light rounded border d-flex align-items-center justify-content-center text-muted small"
                          style={{ width: "48px", height: "64px" }}
                        >
                          N/A
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="fw-semibold text-dark">{libro.titulo}</div>
                      {libro.descuento > 0 && (
                        <span className="badge bg-success-subtle text-success border border-success-subtle">
                          {libro.descuento}% desc.
                        </span>
                      )}
                    </td>
                    <td>{libro.autor}</td>
                    <td>
                      <span className="badge bg-secondary">{libro.genero}</span>
                    </td>
                    <td className="fw-semibold">
                      ${Number(libro.precio).toFixed(2)}
                    </td>
                    <td>
                      <span className={`badge ${libro.stock > 0 ? "bg-info" : "bg-danger"}`}>
                        {libro.stock} u.
                      </span>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          className="btn btn-outline-warning btn-sm"
                          onClick={() => setLibroEditar(libro)}
                        >
                          Editar
                        </button>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={() => handleDelete(libro.id)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TablaLibros;