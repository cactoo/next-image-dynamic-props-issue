import { useState } from "react"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

const images = [
	{ src: "/thomas-langnes-nQnt-wWP_2E-unsplash.jpg", width: 640, height: 800 },
	{ src: "/jan-huber-NtJeM6MBctc-unsplash.jpg", width: 1920, height: 1177 },
]

export default function Home() {
	const [currentImage, setImageIndex] = useState(0)

	const { src, width, height } = images[currentImage]
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<p>
				<button
					onClick={() => {
						setImageIndex(0)
					}}
					className='button'
				>
					Image 1
				</button>
				<button
					onClick={() => {
						setImageIndex(1)
					}}
					className='button'
				>
					Image 2
				</button>
				<Link href='/blog/post-1'>
					<a className='button'>Blog 1</a>
				</Link>
				<Link href='/blog/post-2'>
					<a className='button'>Blog 2</a>
				</Link>
			</p>
			<p>
				width: {width}, height: {height}, src: {src}
			</p>

			<Image src={src} width={width} height={height} />

			<main className={styles.main}>
				<h1 className={styles.title}>
					Welcome to <a href='https://nextjs.org'>Next.js!</a>
				</h1>

				<p className={styles.description}>
					Get started by editing <code className={styles.code}>pages/index.js</code>
				</p>

				<div className={styles.grid}>
					<a href='https://nextjs.org/docs' className={styles.card}>
						<h3>Documentation &rarr;</h3>
						<p>Find in-depth information about Next.js features and API.</p>
					</a>

					<a href='https://nextjs.org/learn' className={styles.card}>
						<h3>Learn &rarr;</h3>
						<p>Learn about Next.js in an interactive course with quizzes!</p>
					</a>

					<a href='https://github.com/vercel/next.js/tree/master/examples' className={styles.card}>
						<h3>Examples &rarr;</h3>
						<p>Discover and deploy boilerplate example Next.js projects.</p>
					</a>

					<a
						href='https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
						className={styles.card}
					>
						<h3>Deploy &rarr;</h3>
						<p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
					</a>
				</div>
			</main>

			<footer className={styles.footer}>
				<a
					href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
					target='_blank'
					rel='noopener noreferrer'
				>
					Powered by <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
				</a>
			</footer>
		</div>
	)
}
