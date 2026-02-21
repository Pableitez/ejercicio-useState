import React, { useState } from "react";

function App() {
  // Estado del nombre actual
  const [name, setName] = useState("Sofia");
  // Estado del input del formulario
  const [newName, setNewName] = useState("");
  // Lista de profesores (se puede actualizar con nuevos nombres)
  const [teachers, setTeachers] = useState(["Data", "Reyes", "Yolanda"]);

  // Cambiar nombre al clicar un profesor
  const handleClick = (teacher) => {
    setName(teacher);
  };

  // Agregar nuevo profesor desde el formulario
  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = newName.trim();
    if (trimmed && !teachers.includes(trimmed)) {
      setTeachers([...teachers, trimmed]); // agrega a la lista
      setName(trimmed); // actualiza el nombre mostrado
      setNewName(""); // limpia el input
    } else if (teachers.includes(trimmed)) {
      setName(trimmed); // si ya existe, solo cambia el nombre mostrado
      setNewName("");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Teacher Name: {name}</h2>

      {/* Lista de profesores clickeables */}
      <ul>
        {teachers.map((teacher) => (
          <li
            key={teacher}
            onClick={() => handleClick(teacher)}
            style={{
              cursor: "pointer",
              margin: "5px 0",
              padding: "3px 5px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              width: "fit-content"
            }}
          >
            {teacher}
          </li>
        ))}
      </ul>

      {/* Formulario para agregar nuevo nombre */}
      <form onSubmit={handleAdd} style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Add a name"
          style={{ padding: "5px", marginRight: "10px" }}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;