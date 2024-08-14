import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import './global.css'
import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <p>Post</p>
          <p>Post</p>
        </main>
      </div>
      
    </div>
  )
}


