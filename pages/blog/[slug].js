import { useRouter } from "next/router"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../../styles/Home.module.css"

// Fake DB
const blogPosts = [
	{
		slug: "post-1",
		src: "/thomas-langnes-nQnt-wWP_2E-unsplash.jpg",
		width: 640,
		height: 800,
	},
	{
		slug: "post-2",
		src: "/jan-huber-NtJeM6MBctc-unsplash.jpg",
		width: 1920,
		height: 1177,
	},
]

export default function BlogPost(props) {
	const router = useRouter()
	const { slug } = router.query

	if (!slug) {
		return <div>No slug</div>
	}

	const post = blogPosts.find((p) => p.slug === slug)
	const { src, width, height } = post

	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<p>
				<Link href='/'>
					<a className='button'>Home</a>
				</Link>
				<Link href='/blog/post-1'>
					<a className='button'>Blog post 1</a>
				</Link>
				<Link href='/blog/post-2'>
					<a className='button'>Blog post 2</a>
				</Link>
			</p>

			<h1>{slug}</h1>
			<p>
				width: {width}, height: {height}, src: {src}
			</p>

			<Image src={src} width={width} height={height} />
		</div>
	)
}

// export async function getStaticProps({ params }) {
// 	return {
// 		props: {
// 			slug: params.slug,
// 		},
// 	}
// }

// export async function getStaticPaths() {
// 	const paths = blogPosts.map((p) => p.slug)
// 	return {
// 		paths: paths.map((slug) => ({ params: { slug } })),
// 		fallback: true,
// 	}
// }
