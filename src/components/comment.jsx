import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'

export function Comment () {
  return (
		<div className = {styles.comment}>

			<Avatar hasBorder = { false } src="https://pbs.twimg.com/profile_images/1800681301587918848/S4rKPZfP_400x400.jpg"/>
			
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
						<header>
							<div className={styles.authorAndTime}>
								<strong>Vitor</strong>
								<time title="11 de maio às 8:13" dateTime="2022-05-11 08:13:30">Cerca de 1h</time>
							</div>
							<button title="Deletar comentário">
								<Trash size={20}/>
							</button>
						</header>
						<p>Comentário</p>
				</div>

				<footer>
					<button>
						<ThumbsUp />
						Aplaudir <span>20</span>
					</button>
				</footer>
			</div>

		</div>
	)
}