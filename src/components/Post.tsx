import styles from './Post.module.css'
import { InvalidEvent, ChangeEvent, FormEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'
import { Avatar } from './avatar.jsx'
import { Comment } from './comment.jsx'

interface Author {
	name: string;
	role: string;
	avatarUrl: string;
}

interface Content {
	type: string;
	content: string;
}

interface PostProps {
	author: Author;
	publishedAt: Date;
	content: Content[];
}

export function Post ({author, publishedAt, content}: PostProps) {
	
	const publishedDateFormate = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
		locale: ptBR
	})

	const publishedRelativeNow = formatDistanceToNow(publishedAt, {
		locale:ptBR,
		addSuffix:true
	})

	const [comments, setComments] = useState([])
	const [newCommentText, setNewCommentText] = useState('')
	
	function handleCreateNewComment(event: FormEvent){
		event.preventDefault()
		setComments([...comments, newCommentText])
		setNewCommentText('')
	}

	function handleCommentChange(event: ChangeEvent<HTMLTextAreaElement>){
		event.target.setCustomValidity('')
		setNewCommentText(event.target.value)
	}

	function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>){
		event.target.setCustomValidity('campo requerido')
	}

	function deleteComment(commentToDelete: String){
		const commentsWithoutDeletedOne = comments.filter(comment => {
			return comment !== commentToDelete
		})
		setComments(commentsWithoutDeletedOne)
	}

	const isNewCommentEmpty = newCommentText.length === 0

  return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.authorInfo}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>
				<time title= {publishedDateFormate} dateTime={publishedAt.toISOString()}>{publishedRelativeNow}</time>
			</header>

			<div className={styles.content}>
				{content.map(item => {
					if(item.type === 'paragraph'){
						return (
						<p key={item.content}>{item.content}</p>
						) } else if (item.type === 'link'){
							return <p key={item.content}><a href='#'>{item.content}</a></p>
						}
				})}
				<a href="#"><p>Link</p></a>
				<p>
					<a className={styles.hashtag} href="">#novoprojeto</a>
					<a className={styles.hashtag} href="">#nlw</a>
					<a className={styles.hashtag} href="">#feeding</a>
				</p>
			</div>

			<form onSubmit = {handleCreateNewComment} action="" className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>
				<textarea 
				value = {newCommentText}
				name='comment' 
				placeholder='Deixe seu comentario'
				onChange = {handleCommentChange}
				onInvalid={handleNewCommentInvalid}
				required
				/>

				<footer>
					<button 
						type='submit' disabled={isNewCommentEmpty}> 
						Publicar
					</button>
				</footer>
			</form>
			
				<div className={styles.commentList}>
					{comments.map(comment=>{
						return (
							<Comment 
								key={comment} 
								content={comment} 
								deleteComment = {deleteComment}
							/>
						)
					})}
				</div>

		</article>
	)
}


