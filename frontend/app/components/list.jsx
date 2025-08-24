"use client";
// Tabla de marcas con paginación, edición, eliminación y filtro por estado
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import StatusBadge from "./StatusBadge";
import { CiEdit, CiTrash, CiFloppyDisk, CiCircleRemove } from "react-icons/ci";

const ITEMS_PER_PAGE = 3;

const ListBrands = forwardRef((props, ref) => {
  // Estado de la lista de marcas y controles
  const [brands, setBrands] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: "", owner: "", status: "active" });
  const [page, setPage] = useState(1);
  const [filterStatus, setFilterStatus] = useState('all');

  // Obtiene las marcas del backend
  const fetchBrands = () => {
    setLoading(true);
    setError(null);
    fetch("http://localhost:8000/views/brands/")
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar marcas");
        return res.json();
      })
      .then(setBrands)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchBrands();
  }, []);

  // Permite recargar la lista desde el padre
  useImperativeHandle(ref, () => ({
    reload: fetchBrands,
  }));

  // Elimina una marca
  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar esta marca?")) return;
    await fetch(`http://localhost:8000/views/brands/${id}/`, { method: "DELETE" });
    fetchBrands();
  };

  // Activa modo edición
  const handleEdit = (brand) => {
    setEditId(brand.id);
    setEditData({ name: brand.name, owner: brand.owner, status: brand.status });
  };

  // Cambia los campos en modo edición
  const handleEditChange = (e) => {
    setEditData({ ...editData, [e.target.name]: e.target.value });
  };

  // Guarda los cambios de edición
  const handleEditSave = async (id) => {
    await fetch(`http://localhost:8000/views/brands/${id}/`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });
    setEditId(null);
    fetchBrands();
  };

  // Cancela la edición
  const handleEditCancel = () => {
    setEditId(null);
  };

  if (loading) return <div>Cargando marcas...</div>;
  if (error) return <div>Error: {error.message}</div>;

  // Filtrado por estado
  const filteredBrands = filterStatus === 'all'
    ? brands
    : brands.filter(b => b.status === filterStatus);

  // Paginación
  const totalPages = Math.ceil(filteredBrands.length / ITEMS_PER_PAGE) || 1;
  const startIdx = (page - 1) * ITEMS_PER_PAGE;
  const paginatedBrands = filteredBrands.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  return (
    <>
      {/* Filtro por estado */}
      <div className="filter-container">
        <label htmlFor="filter-status" className="filter-label">Filtrar por estado:</label>
        <select id="filter-status" value={filterStatus} onChange={e => { setFilterStatus(e.target.value); setPage(1);}} className="input-filter">
          <option value="all">Todos</option>
          <option value="active">Activa</option>
          <option value="inactive">Inactiva</option>
          <option value="pending">Pendiente</option>
        </select>
      </div>
      {/* Tabla de marcas */}
      <table>
        <thead>
          <tr>
            <th>Marca</th>
            <th>Titular</th>
            <th>Estado</th>
            <th>Creada</th>
            <th>Actualizada</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {paginatedBrands.map((brand) => (
            <tr key={brand.id}>
              <td>
                {editId === brand.id ? (
                  <input name="name" value={editData.name} onChange={handleEditChange} className="input-edit" />
                ) : (
                  brand.name
                )}
              </td>
              <td>
                {editId === brand.id ? (
                  <input name="owner" value={editData.owner} onChange={handleEditChange} className="input-edit" />
                ) : (
                  brand.owner
                )}
              </td>
              <td>
                {editId === brand.id ? (
                  <select name="status" value={editData.status} onChange={handleEditChange} className="input-edit">
                    <option value="active">Activa</option>
                    <option value="inactive">Inactiva</option>
                    <option value="pending">Pendiente</option>
                  </select>
                ) : (
                  <StatusBadge status={brand.status} />
                )}
              </td>
              <td>{brand.created_at?.slice(0, 10).split("-").reverse().join("/")}</td>
              <td>{brand.updated_at?.slice(0, 10).split("-").reverse().join("/")}</td>
              <td>
                {editId === brand.id ? (
                  <>
                    <button className="btn-guardar" onClick={() => handleEditSave(brand.id)}><CiFloppyDisk /></button>
                    <button className="btn-cancelar" onClick={handleEditCancel}><CiCircleRemove /></button>
                  </>
                ) : (
                  <>
                    <button className="btn-editar" onClick={() => handleEdit(brand)}><CiEdit /></button>
                    <button className="btn-eliminar" onClick={() => handleDelete(brand.id)}><CiTrash /></button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Controles de paginación */}
      <div className="pagination-container">
        <button onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={page === 1} className="btn-pag"> Anterior</button>
        <span className="pagination-info">Página {page} de {totalPages}</span>
        <button onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={page === totalPages} className="btn-pag">Siguiente</button>
      </div>
    </>
  );
});

export default ListBrands;
