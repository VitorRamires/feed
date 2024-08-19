import { Header } from './components/header'
import { Sidebar } from './components/sidebar'
import { Post } from './components/Post'
import styles from './App.module.css'
import './global.css'


const post = [
  {
    id:1,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1800681301587918848/S4rKPZfP_400x400.jpg',
      name: 'Vitor Ramires',
      role: 'Developer'
    }, 
    content: [
      {type: 'paragraph', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem accusantium neque veniam magnam Neque pariatur aut'},
      {type: 'paragraph', content:'quae similique recusandae voluptas iusto voluptatum commodi eum tempora a Officia, quo vel'},
      {type: 'link', content: 'Link' },
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id:2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1800681301587918848/S4rKPZfP_400x400.jpg',
      name: 'Ramires Martins',
      role: 'Developer'
    }, 
    content: [
      {type: 'paragraph', content: 'dolor sit amet consectetur adipisicing elit. Explicabo dolorem accusantium neque veniam magnam Neque pariatur aut'},
      {type: 'paragraph', content:'recusandae voluptas iusto voluptatum commodi eum tempora a Officia, quo vel'},
      {type: 'link', content: 'Link' },
    ],
    publishedAt: new Date('2022-05-15 20:00:00')
  }
]

export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post)=>{
            return(
              <Post 
                key = {post.id}
                author = {post.author}
                content = {post.content}
                publishedAt = {post.publishedAt}
              />
            )
          })}
        </main>
      </div>
      
    </div>
  )
}


