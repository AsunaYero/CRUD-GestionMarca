"use client";
// Formulario para agregar una nueva marca (usado en el modal)
import { useState } from "react";
import "../css/add.css";

function FormBrands({ onCreated, onClose }) {
  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Maneja el envío del formulario y la creación de la marca
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("http://localhost:8000/views/brands/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, owner, status }),
      });
      if (!res.ok) throw new Error("Error al crear la marca");

      // Limpiar campos
      setName("");
      setOwner("");
      setStatus("active");

      // Actualizar lista y cerrar modal
      if (onCreated) onCreated();
      if (onClose) onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-modal">
      {/* Campo nombre de la marca */}
      <input
        type="text"
        placeholder="Marca"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="input-edit"
      />
      {/* Campo titular de la marca */}
      <input
        type="text"
        placeholder="Titular"
        value={owner}
        onChange={e => setOwner(e.target.value)}
        required
        className="input-edit"
      />
      {/* Selector de estado */}
      <select
        value={status}
        onChange={e => setStatus(e.target.value)}
        className="input-edit"
      >
        <option value="active">Activa</option>
        <option value="inactive">Inactiva</option>
        <option value="pending">Pendiente</option>
      </select>
      <button type="submit" disabled={loading} className="add-btn">
        {loading ? "Guardando..." : "Guardar Marca"}
      </button>
      {error && <span style={{ color: "#ef4444" }}>{error}</span>}
    </form>
  );
}

export default FormBrands;
