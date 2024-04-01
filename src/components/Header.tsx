import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <img src="/Logo.svg" alt="logo do website" />
    </header>
  )
}
