import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // ==========================================
  // 1. ESTADOS (A "Memória de Curto Prazo" do App)
  // ==========================================
  // useState guarda os dados que, quando alterados, fazem a tela atualizar.
  const [taskText, setTaskText] = useState("");
  const [priority, setPriority] = useState("Baixa");
  const [taskList, setTaskList] = useState([]);
  const [filter, setFilter] = useState("Todas");
  const [searchTerm, setSearchTerm] = useState("");

  // ==========================================
  // 2. EFEITOS COLATERAIS (A "Memória de Longo Prazo")
  // ==========================================
  
  // Efeito 1: CARREGAR os dados.
  // O array vazio [] no final significa: "Execute isso apenas UMA VEZ, quando o componente nascer na tela".
  useEffect(() => {
    const saved = localStorage.getItem("@taskflow_data");
    if (saved) setTaskList(JSON.parse(saved)); // Transforma o texto do localStorage de volta em um Array de objetos
  }, []);

  // Efeito 2: SALVAR os dados.
  // O array [taskList] significa: "Execute isso toda vez que a taskList sofrer qualquer alteração".
  useEffect(() => {
    // localStorage só aceita texto (strings), por isso usamos JSON.stringify
    localStorage.setItem("@taskflow_data", JSON.stringify(taskList));
  }, [taskList]);

  // ==========================================
  // 3. FUNÇÕES DE CRUD (Criar, Ler, Atualizar, Deletar)
  // ==========================================

  // Função para CRIAR uma nova tarefa
  const addTask = (e) => {
    e.preventDefault(); // Impede que o formulário recarregue a página inteira
    
    // Evita a criação de tarefas vazias ou só com espaços
    if (!taskText.trim()) return;

    // Cria o objeto da nova tarefa
    const newTask = {
      id: crypto.randomUUID(), // Gera um ID único e seguro (melhor que usar index do array)
      text: taskText,
      priority: priority,
      completed: false,
      createdAt: new Date().toLocaleDateString(), // Pega a data atual do sistema do usuário
    };

    // Atualiza a lista: pega a nova tarefa e espalha (...taskList) as antigas logo atrás.
    // Isso garante que a tarefa mais nova apareça no topo.
    setTaskList([newTask, ...taskList]); 
    
    // Limpa o input após adicionar
    setTaskText("");
  };

  // Função para ATIVAR/DESATIVAR o modo de edição
  const toggleEdit = (id) => {
    // Usamos o .map() pois ele cria uma lista NOVA (Imutabilidade do React).
    // Se o id bater, invertemos o valor de isEditing (!t.isEditing). Se não, mantemos a tarefa como estava.
    setTaskList(
      taskList.map((t) =>
        t.id === id ? { ...t, isEditing: !t.isEditing } : t,
      ),
    );
  };

  // Função para MARCAR/DESMARCAR como concluída
  const toggleTask = (id) => {
    setTaskList(
      taskList.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t,
      ),
    );
  };

  // Função para DELETAR uma tarefa
  const deleteTask = (id) => {
    const confirmar = window.confirm("Tem certeza que deseja remover esta tarefa?");

    if (confirmar){
      // O .filter() cria uma nova lista contendo apenas as tarefas que tem o ID DIFERENTE (!==) do ID que queremos deletar.
      setTaskList(taskList.filter((t) => t.id !== id));
    }
  };

  // Função para ATUALIZAR o texto enquanto o usuário edita
  const updateTaskText = (id, newText) => {
    setTaskList(taskList.map(t => 
      t.id === id ? {...t, text: newText} : t
    ));
  }

  // ==========================================
  // 4. LÓGICA DE FILTRAGEM E ORDENAÇÃO
  // ==========================================
  
  // Dicionário de pesos para a ordenação (Alta vale mais, Baixa vale menos)
  const priorityWeight = { Alta: 3, Média: 2, Baixa: 1 };

  // filteredTasks é uma variável "derivada". Ela se recalcula automaticamente
  // toda vez que a taskList, o searchTerm ou o filter mudam.
  const filteredTasks = taskList
    .filter((t) => {
      // 1º Filtro: Busca por texto (tudo em minúsculo para não ter erro de maiúsculas/minúsculas)
      const matchesSearch = t.text
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      
      // 2º Filtro: Status (Todas, Pendentes, Concluídas)
      let matchesStatus = true;
      if (filter === "Pendentes") return !t.completed;
      if (filter === "Concluídas") return t.completed;
      
      // Só retorna a tarefa se ela passar nos dois filtros
      return matchesSearch && matchesStatus;
    })
    // Após filtrar, ordena a lista usando nosso dicionário de pesos
    // Se b - a for positivo, b vem antes. Se for negativo, a vem antes.
    .sort((a, b) => priorityWeight[b.priority] - priorityWeight[a.priority]);

  // ==========================================
  // 5. RENDERIZAÇÃO (O que vai para a tela)
  // ==========================================
  return (
    <div className="app-container">
      <header>
        <h1>TaskFlow</h1>
        <p>Gestão de Produtividade</p>
      </header>

      {/* SEÇÃO DE CRIAÇÃO */}
      <section className="form-section">
        <form onSubmit={addTask}>
          <input
            value={taskText} // Input Controlado: O React manda no valor que aparece aqui
            onChange={(e) => setTaskText(e.target.value)} // Atualiza o estado a cada tecla digitada
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

      {/* SEÇÃO DE FILTROS */}
      <section className="filter-section">
        <input
          type="text"
          placeholder="Pesquisa Tarefa"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {/* Renderiza os botões de filtro dinamicamente a partir de um Array */}
        {["Todas", "Pendentes", "Concluídas"].map((f) => (
          <button
            key={f}
            className={filter === f ? "active" : ""} // Adiciona classe 'active' se for o filtro atual selecionado
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </section>

      {/* SEÇÃO DA LISTA DE TAREFAS */}
      <main className="task-grid">
        {/* Usamos filteredTasks aqui em vez de taskList para aplicar a busca/filtros visualmente */}
        {filteredTasks.map((item) => (
          <div
            key={item.id} // O React precisa do Key para saber quem é quem na hora de atualizar ou deletar
            className={`task-card ${item.priority.toLowerCase()} ${
              item.completed ? "done" : ""
            }`}
          >
            <div className="task-content">
              {/* RENDERIZAÇÃO CONDICIONAL: Mostra input se estiver editando, senão mostra o texto normal */}
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