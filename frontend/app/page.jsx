"use client";

import { useRef, useState } from "react";
import ListBrands from "./components/list";
import FormBrands from "./components/add";
import { CiSquarePlus, CiCircleRemove, CiHeart } from "react-icons/ci"; 
import CreativeHeader from "./components/header.jsx";

function HomePage() {
  const listRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const handleCreated = () => {
    setShowModal(false); // cerrar modal después de agregar
    if (listRef.current && listRef.current.reload) {
      listRef.current.reload(); 
    }
  };

  return (
    <>
      <CreativeHeader />
      <div className="page-wrapper">
        <div className="container-box">
          <main className="main-content">
            <div className="header-bar">
              <h1 className="main-title">Gestión de Marcas</h1>
              <button className="add-btn" onClick={() => setShowModal(true)}>
                <CiSquarePlus size={20} style={{ marginRight: "6px" }} />
                Agregar Marca
              </button>
            </div>

            <div className="table-container">
              <ListBrands ref={listRef} />
            </div>

            {showModal && (
              <div className="modal-bg">
                <div className="modal-content">
                  <button
                    className="modal-close"
                    onClick={() => setShowModal(false)}
                  >
                    <CiCircleRemove size={24} />
                  </button>
                  <h2 className="modal-title">Agregar Marca</h2>
                  <FormBrands onCreated={handleCreated} onClose={() => setShowModal(false)} />
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
