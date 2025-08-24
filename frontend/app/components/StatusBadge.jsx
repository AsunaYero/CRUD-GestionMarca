"use client";

export default function StatusBadge({ status }) {
  let color = "#9ca3af", bg = "#f3f4f6", text = "Desconocido";

  if (status === "active") { color = "#16a34a"; bg = "#dcfce7"; text = "Activa"; }
  if (status === "inactive") { color = "#f59e0b"; bg = "#fef3c7"; text = "Inactiva"; }
  if (status === "pending") { color = "#ef4444"; bg = "#fee2e2"; text = "Pendiente"; }

  return (
    <span style={{ color, background: bg, padding: "6px 12px", borderRadius: "20px", fontSize: "0.9rem", fontWeight: "600" }}>
      {text}
    </span>
  );
}
