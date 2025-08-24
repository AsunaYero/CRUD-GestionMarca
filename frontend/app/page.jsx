"use client"; 
// Indica que este componente se ejecuta en el cliente (Next.js App Router).

import { useRef, useState } from "react"; 
// useRef -> para acceder a métodos del hijo (ListBrands).
// useState -> para controlar apertura y cierre del modal.

import ListBrands from "./components/list";     // Componente que lista las marcas en tabla.
import FormBrands from "./components/add";      // Formulario para agregar nuevas marcas.
import { CiSquarePlus, CiCircleRemove } from "react-icons/ci"; // Íconos de agregar y cerrar.
import CreativeHeader from "./components/header.jsx"; // Header principal de la app.

function HomePage() {
  // Referencia al componente ListBrands (para llamar su función `reload`).
  const listRef = useRef();

  // Estado para mostrar u ocultar el modal de agregar marcas.
  const [showModal, setShowModal] = useState(false);

  // Función que se ejecuta cuando se crea una marca desde el formulario.
  const handleCreated = () => {
    setShowModal(false); // Cierra el modal después de crear.
    // Si ListBrands expone `reload`, se ejecuta para refrescar la tabla.
    if (listRef.current && listRef.current.reload) {
      listRef.current.reload(); 
    }
  };

  return (
    <>
      {/* Header general */}
      <CreativeHeader />

      <div className="page-wrapper">
        <div className="container-box">
          <main className="main-content">

            {/* Barra superior con título y botón para abrir modal */}
            <div className="header-bar">
              <h1 className="main-title">Gestión de Marcas</h1>
              <button className="add-btn" onClick={() => setShowModal(true)}>
                <CiSquarePlus size={20} style={{ marginRight: "6px" }} />
                Agregar Marca
              </button>
            </div>

            {/* Contenedor de la tabla de marcas */}
            <div className="table-container">
              <ListBrands ref={listRef} />
            </div>

            {/* Modal para agregar nueva marca */}
            {showModal && (
              <div className="modal-bg">
                <div className="modal-content">
                  {/* Botón para cerrar modal */}
                  <button
                    className="modal-close"
                    onClick={() => setShowModal(false)}
                  >
                    <CiCircleRemove size={24} />
                  </button>

                  <h2 className="modal-title">Agregar Marca</h2>

                  {/* Formulario para crear nueva marca */}
                  <FormBrands 
                    onCreated={handleCreated}   // Acción al guardar correctamente
                    onClose={() => setShowModal(false)} // Acción al cerrar sin guardar
                  />
                </div>
              </div>
            )}

          </main>
        </div>
      </div>
    </>
  );
}

export default HomePage;
