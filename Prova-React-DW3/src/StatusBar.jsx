import styles from './StatusBar.module.css'

function StatusBar() {
  return (
    <header className={styles.statusBar}>
      <span className={styles.title}>Gerenciador de Tarefas</span>
    </header>
  )
}

export default StatusBar
