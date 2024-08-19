import styles from './header.module.css'
import logoFeed from '../imgs/logo-feed.svg'

export function Header () {
  return (
    <header className={styles.header}>
      <strong>Feed</strong>
      <img src={logoFeed} alt="logotipo" />
    </header>
  )
}

