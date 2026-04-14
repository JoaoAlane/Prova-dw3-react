import styles from './Footer.module.css'

function Footer() {
  const today = new Date().toLocaleDateString('pt-BR')

  return (
    <footer className={styles.footer}>
      <span>João Flavio Fernandes Alane &nbsp;|&nbsp; {today}</span>
    </footer>
  )
}

export default Footer
