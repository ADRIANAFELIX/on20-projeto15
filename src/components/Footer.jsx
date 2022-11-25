import styles from '../styles/components/footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <p className={styles.footerText}>
        Feito com ♡ por Adriana, durante o projeto guiado no módulo de React da reprograma, por Simara ♡.
      </p>
    </footer>
  )
}