import { useState, useEffect } from 'react'
import StatusBar from './StatusBar'
import Footer from './Footer'
import TaskItem from './TaskItem'
import styles from './App.module.css'

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, descricao: 'Estudar React e Hooks', status: 'pendente' },
    { id: 2, descricao: 'Revisar componentes funcionais', status: 'pendente' },
    { id: 3, descricao: 'Praticar useState e useEffect', status: 'concluída' },
  ])

  const [novaDescricao, setNovaDescricao] = useState('')

  useEffect(() => {
    console.log('Aplicação de Lista de Tarefas iniciada com sucesso!')
  }, [])

  function adicionarTarefa() {
    const texto = novaDescricao.trim()
    if (!texto) return
    const nova = {
      id: Date.now(),
      descricao: texto,
      status: 'pendente',
    }
    setTarefas((prev) => [...prev, nova])
    setNovaDescricao('')
  }

  function toggleStatus(id) {
    setTarefas((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === 'pendente' ? 'concluída' : 'pendente' }
          : t
      )
    )
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') adicionarTarefa()
  }

  const pendentes = tarefas.filter((t) => t.status === 'pendente').length
  const concluidas = tarefas.filter((t) => t.status === 'concluída').length

  return (
    <div className={styles.appWrapper}>
      <StatusBar />

      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <img
              src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80"
              alt="Produtividade"
              className={styles.prodImage}
            />
            <span className={styles.imageCaption}>Foco, organização e produtividade</span>
          </div>

          <div className={styles.statsRow}>
            <span className={styles.statChip}>📋 Total: {tarefas.length}</span>
            <span className={styles.statChip}>⏳ Pendentes: {pendentes}</span>
            <span className={styles.statChip}>✔ Concluídas: {concluidas}</span>
          </div>

          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Nova tarefa..."
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.input}
            />
            <button onClick={adicionarTarefa} className={styles.addBtn}>
              Adicionar
            </button>
          </div>

          <ul className={styles.lista}>
            {tarefas.map((tarefa) => (
              <TaskItem key={tarefa.id} task={tarefa} onToggle={toggleStatus} />
            ))}
          </ul>

          {tarefas.length === 0 && (
            <p className={styles.emptyMsg}>Nenhuma tarefa cadastrada ainda.</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
