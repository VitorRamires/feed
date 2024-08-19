import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './comment.module.css'
import { Avatar } from './avatar'
import { useState } from 'react'

export function Comment ({content, deleteComment}) {

	const [likeCount, setLikeCount] = useState(0)
	const [giveLike, setGiveLike] = useState(false)

	function handleDeleteComment () {
		deleteComment(content)
	}

	function handleAddLike(){
		if(giveLike === false){
			setLikeCount((state) => {
				return state + 1
			})
			setGiveLike(true)
		} else if (giveLike === true){
			setLikeCount((state) => {
				return state - 1
			})
			setGiveLike(false)
		}
	}

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
							<button onClick = {handleDeleteComment} title="Deletar comentário">
								<Trash size={20}/>
							</button>
						</header>
						<p>{content}</p>
				</div>

				<footer>
					<button 
					onClick = {handleAddLike} 
					className={giveLike && styles.likeGiving}>
						<ThumbsUp />
						Aplaudir <span>{likeCount}</span>
					</button>
				</footer>
			</div>

		</div>
	)
}