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
          <p>Author</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum quam dolorum quasi? Necessitatibus, iusto. Nulla unde fugiat ut necessitatibus provident, minima labore quae impedit, culpa nobis, sequi libero facere ducimus.</p>
        </main>
      </div>
      
    </div>
  )
}


