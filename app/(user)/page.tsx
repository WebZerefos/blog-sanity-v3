import { groq } from 'next-sanity'
import { client } from '../../lib/sanity.client'
import BlogList from '../components/BlogList'

const query = groq`
*[_type == 'post']{
	..., 
	author->,
	categories[]->
} | order(_createdAt desc)
`

const Home = async () => {
	const posts = await client.fetch(query)

	return <BlogList posts={posts} />
}

export default Home
