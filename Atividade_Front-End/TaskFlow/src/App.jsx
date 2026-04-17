import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Baixa");
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("@taskflow_data");
    if (saved) setTaskList(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("@taskflow_data", JSON.stringify(taskList));
  }, [taskList]);

  const addTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;

    const newTask = {
      id: crypto.randomUUID(),
      text: taskText,
      priority: priority,
      completed: false,
      createdAt: new Date().toLocaleDateString(),
    };

    setTaskList([newTask, ...taskList]);
    setTaskText("");
  };

  const toggleEdit = (id) => {
    setTaskList(
      taskList.map((t) =>
        t.id === id ? { ...t, isEditing: !t.isEditing } : t,
      ),
    );
  };

  const toggleTask = (id) => {
    setTaskList(
      taskList.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  const deleteTask = (id) => {
    const confirmar = window.confirm("Tem certeza que deseja remover esta tarefa?");

    if (confirmar){
      setTaskList(taskList.filter((t) => t.id !== id));
    }
    
  };

  const priorityWeight = { Alta: 3, Média: 2, Baixa: 1 };

  const updateTaskText = (id, newText) =>{
    setTaskList(taskList.map(t => 
      t.id === id ? {...t, text: newText} : t
    ));
  }

  const filteredTasks = taskList
    .filter((t) => {
      const matchesSearch = t.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      let matchesStatus = true;
      if (filter === "Pendentes") return !t.completed;
      if (filter === "Concluídas") return t.completed;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => priorityWeight[b.priority] - priorityWeight[a.priority]);

  return (
    <div className="app-container">
      <header>
        <h1>TaskFlow</h1>
        <p>Gestão de Produtividade</p>
      </header>

      <section className="form-section">
        <form onSubmit={addTask}>
          <input
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
            placeholder="Descrição da tarefa..."
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="Baixa">Baixa</option>
            <option value="Média">Média</option>
            <option value="Alta">Alta</option>
          </select>
          <button type="submit">Criar</button>
        </form>
      </section>

      <section className="filter-section">
        <input
          type="text"
          placeholder="Pesquisa Tarefa"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {["Todas", "Pendentes", "Concluídas"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </section>

      <main className="task-grid">
        {filteredTasks.map((item) => (
          <div
            key={item.id}
            className={`task-card ${item.priority.toLowerCase()} ${
              item.completed ? "done" : ""
            }`}
          >
            <div className="task-content">
              {item.isEditing ? (
                <input
                  value={item.text}
                  onChange={(e) => updateTaskText(item.id, e.target.value)}
                />
              ) : (
                <h3>{item.text}</h3>
              )}
              <span>Prioridade: {item.priority}</span>
              <small>Criada em: {item.createdAt}</small>
            </div>
            <div className="task-actions">
              <button onClick={() => toggleEdit(item.id)}>
                {item.isEditing ? "Salvar" : "Editar"}
              </button>
              <button onClick={() => toggleTask(item.id)}>
                {item.completed ? "Reabrir" : "Concluir"}
              </button>
              <button onClick={() => deleteTask(item.id)} className="delete">
                Remover
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
