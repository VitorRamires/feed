import styles from './Post.module.css'

export function Post () {
  return (
		<article className={styles.post}>

			<header>
				<div className={styles.author}>
					<img className={styles.avatar} src="https://pbs.twimg.com/profile_images/1800681301587918848/S4rKPZfP_400x400.jpg" alt="" />
					<div className={styles.authorInfo}>
						<strong>Vitor Ramires</strong>
						<span>Developer</span>
					</div>
				</div>
				<time title="11 de maio às 8:13" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
			</header>

			<div className={styles.content}>
				<p>Lorem ipsum dolor sit amet, consectetur 
				adipisicing</p>
				<p>Lorem ipsum dolor sit amet, consectetur 
				adipisicing</p>
				<p>Lorem ipsum dolor sit amet, consectetur 
				adipisicing</p>
				<a href="#"><p>Link</p></a>
				<p>
					<a className={styles.hashtag} href="">#novoprojeto</a>
					<a className={styles.hashtag} href="">#nlw</a>
					<a className={styles.hashtag} href="">#feeding</a>
				</p>
			</div>

			<form action="" className={styles.commentForm}>

				<strong>Deixe seu feedback</strong>

				<textarea 
				placeholder='Deixe seu comentario'
				/>

				<footer>
					<button type='submit'>Públicar</button>
				</footer>
				
			</form>

		</article>
	)
}


