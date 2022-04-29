import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
	return (
		<>
			<Head>
				<title>Posts | Ignews</title>
			</Head>

			<main className={styles.container}>
				<div className={styles.posts}>
					<a href="">
						<time>24 de abril</time>
						<strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong>
						<p>
							Voluptates, aut laboriosam nisi vel harum aperiam placeat nam omnis,
							soluta, dignissimos possimus. Minus, repudiandae numquam sequi at
							repellat exercitationem distinctio deleniti.
						</p>
					</a>
				</div>
			</main>
		</>
	);
}
