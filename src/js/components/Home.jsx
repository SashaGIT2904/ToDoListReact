import React, { useState } from "react";

const Home = () => {
  // Estado para el valor del input
  const [inputValue, setInputValue] = useState("");
  // Estado para la lista de tareas
  const [todos, setTodos] = useState([]);

  // Función para agregar una tarea cuando se presiona Enter
  const addTodo = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      setTodos([...todos, inputValue.trim()]); // Agrega la tarea al array
      setInputValue(""); // Limpia el input
    }
  };

  // Función para eliminar una tarea por su índice
  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Filtra la tarea a eliminar
  };

  // Renderizado del componente
  return (
    <div className="background">
      <h1 className="title">todos</h1>
      <div className="todo-container">
        <ul>
          <li>
            {/* Input para escribir nuevas tareas */}
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // Actualiza el estado al escribir
              onKeyDown={addTodo} // Llama a addTodo al presionar una tecla
              placeholder="What needs to be done?"
              autoFocus
            />
          </li>
          {/* Si no hay tareas, muestra un mensaje */}
          {todos.length === 0 ? (
            <li className="no-tasks">No hay tareas, añadir tareas </li>
          ) : (
            // Si hay tareas, las muestra en la lista
            todos.map((item, index) => (
              <li key={index} className="todo-item">
                {item}
                {/* Botón para eliminar la tarea */}
                <span className="trash" onClick={() => removeTodo(index)}>
                  <i className="fas fa-trash-alt"></i>
                </span>
              </li>
            ))
          )}
        </ul>
        {/* Contador de tareas restantes */}
        <div className="task-counter">
          {todos.length} {todos.length === 1 ? "item" : "items"} left
        </div>
      </div>
    </div>
  );
};

export default Home;
