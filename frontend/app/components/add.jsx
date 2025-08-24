"use client";
import { useState } from "react";

function FormBrands({ onCreated, onClose }) {
  const [name, setName] = useState("");
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("active");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

      // limpiar
      setName("");
      setOwner("");
      setStatus("active");

      // actualizar lista y cerrar modal
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
      <input
        type="text"
        placeholder="Marca"
        value={name}
        onChange={e => setName(e.target.value)}
        required
        className="input-edit"
      />
      <input
        type="text"
        placeholder="Titular"
        value={owner}
        onChange={e => setOwner(e.target.value)}
        required
        className="input-edit"
      />
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
