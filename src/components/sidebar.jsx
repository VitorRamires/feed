import styles from './sidebar.module.css'

export function Sidebar() {
	return (
		<>
			<aside className={styles.sidebar}>
				<img className ={styles.cover} src="https://plus.unsplash.com/premium_photo-1675793715030-0584c8ec4a13?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
				<div className={styles.profile}>
					<strong>Vitor Ramires</strong>
					<span>Dev</span>
				</div>
				<footer>
					<a href="#">editar perfil</a>
				</footer>
			</aside>
		</>
	)
}