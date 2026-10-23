import React from "react";
import Libros from "./components/Libros";
import './App.css';

function App() {
  return (
    <div className="bg-light min-vh-100">
      <nav className="navbar navbar-dark bg-dark shadow-sm">
        <div className="container">
          <span className="navbar-brand mb-0 h1 fw-bold">
            📚 Sistema de Librería
          </span>
        </div>
      </nav>

      <main>
        <Libros />
      </main>
    </div>
  );
}

export default App;