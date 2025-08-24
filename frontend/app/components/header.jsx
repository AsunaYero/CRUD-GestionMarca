"use client";

//traer estilos
import "../css/header.css";

// Header creativo superior de la app
function CreativeHeader() {
  return (
    <header className="creative-header">
      <div className="header-title-group">
        <h1 className="creative-title">
          Brand<span style={{ color: "#2563eb" }}>Track</span>
        </h1>
        <p className="creative-sub">Gestión moderna y visual de tus marcas</p>
      </div>
    </header>
  );
}

export default CreativeHeader;